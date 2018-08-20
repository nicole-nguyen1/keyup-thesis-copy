const { knex } = require('../../database/db');
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

const CareerTraitType = new GraphQLObjectType({
  name: 'CareerTrait',

  fields: () => ({
    id: { type: GraphQLID },
    career_id: { type: GraphQLID },
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
    app_process: { type: GraphQLString },
    apply_now_cta: { type: GraphQLString },
    program_url: { type: GraphQLString },
    app_url: { type: GraphQLString },
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

const TrainingTraitType = new GraphQLObjectType({
  name: 'TrainingTrait',
  fields: () => ({
    id: { type: GraphQLID },
    service_id: { type: GraphQLID },
    type: { type: GraphQLString },
    description: { type: GraphQLString }
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    phone_number: { type: GraphQLString }
  })
});

const ContactFormType = new GraphQLObjectType({
  name: 'ContactForm',
  fields: () => ({
    id: { type: GraphQLID },
    user_id: { type: GraphQLID },
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
        free_training: { type: GraphQLBoolean }
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
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return knex('services')
          .select()
          .where('services.career_id', args.id)
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

    industries: {
      type: new GraphQLList(IndustryType),
      resolve(parent, args) {
        return knex('industries')
          .select();
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    saveContactFormUser: {
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
          .select('id')
          .first()
          .then((res) => {
            if (res === undefined) {
              // create contact form user as a user
              let thisInsert = {
                first_name: args.first_name,
                password: null
              }
              
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
                .returning('id')
            }

            return [res.id];
          })
          .then((res) => {
            //insert into contact form table
            let thisInsert = {
              message: args.message,
              page: args.page
            };

            if (args.page === 'Homepage') {
              thisInsert.user_id = res[0];
              thisInsert.career = null;
              thisInsert.training_service = null;
              thisInsert.financial_aid = null;
              thisInsert.app_process = null;
              thisInsert.talk_to_grad = null;
              thisInsert.talk_to_working = null;
              thisInsert.other = null;
            } else {
              thisInsert.user_id = res[0];
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
              .then((res) => {
                return res[0];
              })
          })
      }
    },

  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});