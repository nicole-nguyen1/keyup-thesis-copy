const { knex } = require('../../database/db');
const contactForm = require('../helpers/form');
const { signUp, login, updateInfoHelper, resetPassword, checkAuth } = require('../helpers/passport');
const { sendPasswordEmail } = require('../helpers/passwordReset');

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLBoolean
} = require('graphql');

const IndustryType = new GraphQLObjectType({
  name: 'Industry',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  })
});

const CareerTraitType = new GraphQLObjectType({
  name: 'CareerTrait',

  fields: () => ({
    id: { type: GraphQLID },
    career_id: { type: GraphQLID },
    type: { type: GraphQLString },
    description: { type: GraphQLString }
  })
});

const CareerType = new GraphQLObjectType({
  name: 'Career',
  description: 'This is a career object',

  fields: () => ({
    id: { type: GraphQLID },
    industry_id: { type: GraphQLID },
    name: { type: GraphQLString },
    industry_name: {
      type: GraphQLString,
      resolve(parent, args) {
        return knex('industries')
          .select('name')
          .where({ 'id': parent.industry_id })
          .first()
          .then((obj) => obj.name);
      }
    },
    annual_salary: { type: GraphQLString },
    description: { type: GraphQLString },
    openings: { type: GraphQLString },
    card_image_url: { type: GraphQLString },
    card_pro: { type: GraphQLString },
    profile_image_url: { type: GraphQLString },
    hourly_pay: { type: GraphQLString },
    video_url: { type: GraphQLString },
    tasks: {
      type: new GraphQLList(CareerTraitType),
      resolve(parent, args) {
        return knex('career_traits')
          .select()
          .where({ 'career_id': parent.id, 'type': 'task' });
      }
    },
    skills: {
      type: new GraphQLList(CareerTraitType),
      resolve(parent, args) {
        return knex('career_traits')
          .select()
          .where({ 'career_id': parent.id, 'type': 'skill' });
      }
    },
    pros: {
      type: new GraphQLList(CareerTraitType),
      resolve(parent, args) {
        return knex('career_traits')
          .select()
          .where({ 'career_id': parent.id, 'type': 'pro' });
      }
    },
    cons: {
      type: new GraphQLList(CareerTraitType),
      resolve(parent, args) {
        return knex('career_traits')
          .select()
          .where({ 'career_id': parent.id, 'type': 'con' });
      }
    },
    number_of_services: {
      type: GraphQLInt,
      resolve(parent, args) {
        return knex('services')
          .select()
          .where({ 'career_id': parent.id })
          .then((arr) => arr.length);
      }
    },
    training_length: { type: GraphQLString },
    training_hours: { type: GraphQLString },
    training_cost: { type: GraphQLString },
    paid_to_learn: { type: GraphQLBoolean },
    free_training: { type: GraphQLBoolean }
  })
});

const TrainingTraitType = new GraphQLObjectType({
  name: 'TrainingTrait',
  fields: () => ({
    id: { type: GraphQLID },
    service_id: { type: GraphQLID },
    type: { type: GraphQLString },
    description: { type: GraphQLString }
  })
});

const TrainingType = new GraphQLObjectType({
  name: 'Training',
  fields: () => ({
    id: { type: GraphQLID },
    career_id: { type: GraphQLID },
    name: { type: GraphQLString },
    career_name: {
      type: GraphQLString,
      resolve(parent, args) {
        return knex('careers')
          .select('name')
          .where({ 'id': parent.career_id })
          .first()
          .then((obj) => obj.name);
      }
    },
    subheading: { type: GraphQLString },
    logo_url: { type: GraphQLString },
    about: { type: GraphQLString },
    financial_info: { type: GraphQLString },
    location: { type: GraphQLString },
    app_type: { type: GraphQLString },
    app_process: { type: GraphQLString },
    apply_now_cta: { type: GraphQLString },
    program_url: { type: GraphQLString },
    app_url: { type: GraphQLString },
    app_phone_number: { type: GraphQLString },
    program_length_total: { type: GraphQLString },
    program_total_weekly: { type: GraphQLString },
    program_class_times: { type: GraphQLString },
    paid_to_learn: { type: GraphQLBoolean },
    federal_student_aid: { type: GraphQLBoolean },
    card_length: { type: GraphQLString },
    card_location: { type: GraphQLString },
    card_tuition: { type: GraphQLString },
    page_title: { type: GraphQLString },
    outcomes: {
      type: new GraphQLList(TrainingTraitType),
      resolve(parent, args) {
        return knex('services_traits')
          .select()
          .where({ 'service_id': parent.id, 'type': 'outcome' });
      }
    },
    requirements: {
      type: new GraphQLList(TrainingTraitType),
      resolve(parent, args) {
        return knex('services_traits')
          .select()
          .where({ 'service_id': parent.id, 'type': 'requirement' });
      }
    },
    pros: {
      type: new GraphQLList(TrainingTraitType),
      resolve(parent, args) {
        return knex('services_traits')
          .select()
          .where({ 'service_id': parent.id, 'type': 'pro' });
      }
    },
    cons: {
      type: new GraphQLList(TrainingTraitType),
      resolve(parent, args) {
        return knex('services_traits')
          .select()
          .where({ 'service_id': parent.id, 'type': 'con' });
      }
    }
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    phone_number: { type: GraphQLString },
    zip: { type: GraphQLString }
  })
});

const MessageType = new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    message: { type: GraphQLString }
  })
});

const ContactFormType = new GraphQLObjectType({
  name: 'ContactForm',
  fields: () => ({
    id: { type: GraphQLID },
    user_id: { type: GraphQLID },
    first_name: {
      type: GraphQLString,
      resolve(parent, args) {
        return knex('users')
          .select('first_name')
          .where({ 'id': parent.user_id })
          .first()
          .then((obj) => obj.first_name);
      }
    },
    last_name: {
      type: GraphQLString,
      resolve(parent, args) {
        return knex('users')
          .select('last_name')
          .where({ 'id': parent.user_id })
          .first()
          .then((obj) => obj.last_name);
      }
    },
    email: {
      type: GraphQLString,
      resolve(parent, args) {
        return knex('users')
          .select('email')
          .where({ 'id': parent.user_id })
          .first()
          .then((obj) => obj.email);
      }
    },
    phone_number: {
      type: GraphQLString,
      resolve(parent, args) {
        return knex('users')
          .select('phone_number')
          .where({ 'id': parent.user_id })
          .first()
          .then((obj) => obj.phone_number);
      }
    },
    page: { type: GraphQLString },
    career: { type: GraphQLString },
    training_service: { type: GraphQLString },
    financial_aid: { type: GraphQLBoolean },
    app_process: { type: GraphQLBoolean },
    talk_to_grad: { type: GraphQLBoolean },
    talk_to_working: { type: GraphQLBoolean },
    other: { type: GraphQLBoolean },
    message: { type: GraphQLString }
  })
});

const FavoriteType = new GraphQLObjectType({
  name: 'Favorite',
  fields: () => ({
    id: { type: GraphQLID },
    career_id: { type: GraphQLID },
    service_id: { type: GraphQLID },
    user_id: { type: GraphQLID },
    career: {
      type: new GraphQLList(CareerType),
      resolve(parent, args) {
        return knex('careers')
          .select()
          .where('careers.id', parent.career_id);
      }
    },
    training_service: {
      type: new GraphQLList(TrainingType),
      resolve(parent, args) {
        return knex('services')
          .select()
          .where('services.id', parent.service_id);
      }
    }
  })
});

const TokenType = new GraphQLObjectType({
  name: 'Token',
  fields: () => ({
    token: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    //GET careers list
    careers: {
      type: new GraphQLList(CareerType),
      args: {
        industry_ids: { type: new GraphQLList(GraphQLID) },
        paid_to_learn: { type: GraphQLBoolean },
        free_training: { type: GraphQLBoolean },
        career_ids: { type: new GraphQLList(GraphQLID) }
      },
      resolve(parent, args) {
        let newQuery = knex('careers');
        if (args.industry_ids && args.industry_ids.length > 0) {
          newQuery = newQuery.whereIn('industry_id', args.industry_ids);
        }
        if (args.paid_to_learn === true) {
          newQuery = newQuery.where('paid_to_learn', true);
        }
        if (args.free_training === true) {
          newQuery = newQuery.where('free_training', true);
        }
        if (args.career_ids) {
          newQuery = newQuery.whereIn('id', args.career_ids);
        }
        return newQuery.select();
      }
    },

    //GET one specific career with its career traits
    career: {
      type: CareerType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return knex('careers')
          .select()
          .where('careers.id', args.id)
          .first();
      }
    },

    //GET list of training services related to specific career
    trainings: {
      type: new GraphQLList(TrainingType),
      args: {
        career_id: { type: GraphQLID },
        service_ids: { type: new GraphQLList(GraphQLID) }
      },
      resolve(parent, args) {
        let newQuery = knex('services');
        if (args.career_id) {
          newQuery = newQuery.where('services.career_id', args.career_id);
        }
        if (args.service_ids) {
          newQuery = newQuery.whereIn('services.id', args.service_ids);
        }
        return newQuery.select();
      }
    },

    //GET one specific training service with its traits
    training: {
      type: TrainingType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return knex('services')
          .select()
          .where('services.id', args.id)
          .first();
      }
    },

    //GET list of industries
    industries: {
      type: new GraphQLList(IndustryType),
      resolve(parent, args) {
        return knex('industries')
          .select();
      }
    },

    //GET a specific user
    loggedInUser: {
      type: UserType,
      args: { token: { type: GraphQLString } },
      resolve(parent, { token }, context) {
        return checkAuth(token);
      }
    },

    //GET list of favorites for one user
    favorites: {
      type: new GraphQLList(FavoriteType),
      args: { token: { type: GraphQLString } },
      resolve(parent, { token }) {
        let user = new Promise((resolve, reject) => {
          resolve(checkAuth(token));
        });

        return user.then((userObj) => {
          return knex('favorites')
            .select()
            .where('favorites.user_id', userObj.id);
        });
      }
    },

    userEmail: {
      type: UserType,
      args: { email: { type: GraphQLString }},
      resolve(parent, args) {
        return knex('users')
          .select()
          .where('email', args.email)
          .first()
          .then((res) => {
            return sendPasswordEmail(res.id, res.email);
          });
      }
    },

    token: {
      type: UserType,
      args: { token: { type: GraphQLString }},
      resolve(parent, args) {
        return knex('users')
          .select('email', 'resetPasswordToken', 'resetPasswordExpiry')
          .where('resetPasswordToken', args.token)
          .first()
          .then((res) => {
            if (Date.now() < res.resetPasswordExpiry) {
              return res;
            } else {
              throw new Error('Invalid or expired token');
            }
          });
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signUp: {
      type: TokenType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        phone_number: { type: GraphQLString },
        zip: { type: GraphQLString }
      },
      resolve(parent, { email, password, first_name, last_name, phone_number, zip }, context) {
        return signUp(email, password, first_name, last_name, phone_number, zip, context);
      }
    },

    updateInfo: {
      type: UserType,
      args: {
        token: { type: GraphQLString },
        email: { type: GraphQLString },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        phone_number: { type: GraphQLString },
        zip: { type: GraphQLString }
      },
      resolve(parent, { token, email, first_name, last_name, phone_number, zip }) {
        return checkAuth(token)
          .then(user => updateInfoHelper(user.id, email, first_name, last_name, phone_number, zip));
      }
    },

    login: {
      type: TokenType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parent, { email, password }, context) {
        return login(email, password, context);
      }
    },

    resetPassword: {
      type: TokenType,
      args: { 
        token: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parent, args, context) {
        return knex('users')
          .select()
          .where('resetPasswordToken', args.token)
          .first()
          .then((res) => {
            return resetPassword(res.email, args.password, context);
          });
      }
    },

    saveContactForm: {
      type: ContactFormType,
      args: {
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone_number: { type: GraphQLString },
        page: { type: GraphQLString },
        career: { type: GraphQLString },
        training_service: { type: GraphQLString },
        financial_aid: { type: GraphQLBoolean },
        app_process: { type: GraphQLBoolean },
        talk_to_grad: { type: GraphQLBoolean },
        talk_to_working: { type: GraphQLBoolean },
        other: { type: GraphQLBoolean },
        message: { type: GraphQLString }
      },
      resolve(parent, args) {
        let checkUsers = knex('users');

        if (args.email !== null) {
          checkUsers = checkUsers.where('email', args.email);
        } else {
          checkUsers = checkUsers.where('phone_number', args.phone_number);
        }

        // check if contact form user is a user
        return checkUsers
          .select('id', 'email', 'first_name', 'last_name', 'phone_number')
          .first()
          .then((res) => {
            if (res === undefined) {
              // create contact form user as a user
              let thisInsert = {
                first_name: args.first_name,
                password: null
              };

              if (args.last_name === null) {
                thisInsert.last_name = null;
              } else {
                thisInsert.last_name = args.last_name;
              }

              if (args.email !== null) {
                thisInsert.email = args.email;
                thisInsert.phone_number = null;
              } else {
                thisInsert.email = null;
                thisInsert.phone_number = args.phone_number;
              }

              return knex('users')
                .insert(thisInsert)
                .returning(['id', 'email', 'first_name', 'last_name', 'phone_number']);
            }

            return [res];
          })
          .then((res) => {
            //insert into contact form table
            let thisInsert = {
              user_id: res[0].id,
              message: args.message,
              page: args.page
            };

            if (args.page === 'Homepage') {
              thisInsert.career = null;
              thisInsert.training_service = null;
              thisInsert.financial_aid = null;
              thisInsert.app_process = null;
              thisInsert.talk_to_grad = null;
              thisInsert.talk_to_working = null;
              thisInsert.other = null;
            } else {
              thisInsert.career = args.career;
              thisInsert.training_service = args.training_service;
              thisInsert.financial_aid = args.financial_aid;
              thisInsert.app_process = args.app_process;
              thisInsert.talk_to_grad = args.talk_to_grad;
              thisInsert.talk_to_working = args.talk_to_working;
              thisInsert.other = args.other;
            }

            return knex('contact_form')
              .insert(thisInsert)
              .returning('*')
              .then((result) => {
                result[0].first_name = res[0].first_name;
                result[0].last_name = res[0].last_name;
                result[0].email = res[0].email;
                result[0].phone_number = res[0].phone_number;
                contactForm(result[0]);
                return result[0];
              });
          });
      }
    },

    saveFavorite: {
      type: FavoriteType,
      args: {
        token: { type: GraphQLString },
        career_id: { type: GraphQLID },
        service_id: { type: GraphQLID }
      },
      resolve(parent, { token, career_id, service_id }) {
        //check if favorite currently exists
        let params = {};

        if (career_id) {
          params.career_id = career_id;
        } else if (service_id) {
          params.service_id = service_id;
        }

        let user = new Promise((resolve, reject) => {
          resolve(checkAuth(token));
        });

        return user.then(userObj => {
          params.user_id = userObj.id;
          return knex('favorites')
            .select()
            .where(params)
            .first()
            .then((res) => {
              //add favorite if it
              if (res === undefined) {
                return knex('favorites')
                  .insert({
                    user_id: userObj.id,
                    career_id: career_id,
                    service_id: service_id,
                  })
                  .returning('*');
              }
              return res;
            })
            .then((res) => res[0])
            .catch((err) => console.error(err));
        });

      }
    },

    removeFavorite: {
      type: FavoriteType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        return knex('favorites')
          .where({ id: args.id })
          .del();
      }
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
