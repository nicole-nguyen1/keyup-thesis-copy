const LocalStrategy = require('passport-local').Strategy;
const { knex } = require('../../database/db');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
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

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromBodyField('token'),
  secretOrKey: process.env.SECRET
},
(jwtPayload, done) => {
  return knex('users')
    .select()
    .where({ id: jwtPayload.id })
    .first()
    .then(user => {
      return done(null, user);
    })
    .catch(err => {
      return done(err);
    });
})
);

const checkAuth = token => {
  return new Promise((resolve, reject) => {
    passport.authenticate('jwt', { session: false }, (err, user) => {
      if (err) {
        reject(new Error(err));
      }
      resolve(user);
    })({ body: { token } });
  });
};

const signUp = (email, password, first_name, last_name, phone_number, zip, context) => {
  return knex('users')
    .select()
    .where({ email })
    .first()
    .then(user => {
      if (user) {
        throw new Error('User already exists');
      }
      return bcrypt.hash(password, 10);
    })
    .then(hash => {
      return knex('users')
        .insert({ email, password: hash, first_name, last_name, phone_number, zip });
    })
    .then(() => login(email, password, context))
    .catch(console.error);
};

const login = (email, password, context) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', { session: false }, (err, user) => {
      if (err) {
        reject(new Error(err));
      }
      context.req.login(user, { session: false }, (err) => {
        if (err) {
          reject(new Error(err));
        }
        const timestamp = new Date().getTime();
        const token = jwt.sign({ id: user.id, iat: timestamp }, process.env.SECRET);
        resolve({ token });
      });
    })({ body: { email, password } });
  });
};

const updateInfoHelper = (id, email, first_name, last_name, phone_number, zip) => {
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
    });
};

const resetPassword = (email, password, context) => {
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
      return login(user.email, password, context);
    })
    .catch((err) => {
      throw new Error('Could not reset password or sign user in', err);
    });
};

module.exports = { passport, login, signUp, updateInfoHelper, resetPassword, checkAuth };
