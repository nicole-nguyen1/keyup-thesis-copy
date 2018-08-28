const LocalStrategy = require('passport-local').Strategy;
const { knex } = require('../database/db');
const bcrypt = require('bcryptjs');
const passport = require('passport');

passport.use(new LocalStrategy({
  usernameField: 'email'
},
(email, password, done) => {
  knex('users')
    .select()
    .where({ email })
    .first()
    .then(user => {
      if (!user) {
        return done('User does not exist');
      }
      if (bcrypt.compareSync(password, user.password)) {
        return done(null, user);
      }
      return done('Invalid username or password');
    })
    .catch(err => done(err));
}
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  knex('users')
    .select()
    .where({ id })
    .first()
    .then(user => {
      done(null, user);
    })
    .catch(err => done(err));
});

const loginHelper = (email, password, req) => {
  console.log(email, password);
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user) => {
      if (err) {
        reject(new Error(err));
      }
      req.login(user, () => {
        const { id, email, first_name, last_name, phone_number, zip } = user;
        resolve({ id, email, first_name, last_name, phone_number, zip });
      });
    })({ body: { email, password } });
  });
};

const signUpHelper = (email, password, first_name, last_name, phone_number, zip, req) => {
  return knex('users')
    .select()
    .where({ email })
    .first()
    .then(user => {
      if (user) {
        throw new Error('User already exists');
      }
      return bcrypt.hash(password, 10)
        .then(hash => {
          return knex('users')
            .insert({ email, password: hash, first_name, last_name, phone_number, zip });
        })
        .then(() => {
          return new Promise((resolve, reject) => {
            passport.authenticate('local', (err, user) => {
              if (err) {
                reject(new Error(err));
              }
              req.login(user, () => {
                const { id, email, first_name, last_name, phone_number, zip } = user;
                resolve({ id, email, first_name, last_name, phone_number, zip });
              });
            })({ body: { email, password } });
          });
        });
    })
    .catch(err => console.log(err));
};

const updateInfoHelper = (id, email, first_name, last_name, phone_number, zip, req) => {
  return knex('users')
    .select()
    .where({ id })
    .first()
    .then((user) => {
      let thisUpdate = {};
      if (user.email !== email) {
        thisUpdate.email = email;
      } else if (user.first_name !== first_name) {
        thisUpdate.first_name = first_name;
      } else if (user.last_name !== last_name) {
        thisUpdate.last_name = last_name;
      } else if (user.phone_number !== phone_number) {
        thisUpdate.phone_number = phone_number;
      } else if (user.zip !== zip) {
        thisUpdate.zip = zip;
      }

      return knex('users')
        .where({ id })
        .update(thisUpdate)
        .returning(['id', 'email', 'first_name', 'last_name', 'phone_number', 'zip'])
        .then((res) => res[0]);
    })
}

const resetPassword = (email, password, req) => {
  return knex('users')
    .select()
    .where({ email })
    .first()
    .then((user) => {
      return bcrypt.hash(password, 10);
    })
    .then((hash) => {
      return knex('users')
        .where({ email })
        .update({ 
          password: hash,
          resetPasswordToken: null,
          resetPasswordExpiry: null
         })
        .returning('*');
    })
    .then((res) => {
      let user = res[0];
      req.login(user, () => {
        return user;
      });
    })
    .catch((err) => {
      throw new Error('Could not reset password', err);
    })
}

module.exports = { passport, loginHelper, signUpHelper, updateInfoHelper, resetPassword };
