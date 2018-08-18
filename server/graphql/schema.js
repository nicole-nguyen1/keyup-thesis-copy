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
          .where('services.career_id', args.id);
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
        if (args.email !== null) {
          console.log('searching users table');
          return knex('users')
            .select('id')
            .where('email', args.email)
            .returning('id')
            .then((res) => {
              console.log('searched users table');
              console.log(res);
              if (res[0].id) {
                console.log(res);
                return knex('contact_form')
                  .insert({
                    user_id: res[0].id,
                    page: args.page,
                    career: args.career,
                    training_service: args.training_service,
                    financial_aid: args.financial_aid,
                    app_process: args.app_process,
                    talk_to_grad: args.talk_to_grad,
                    talk_to_working: args.talk_to_working,
                    other: args.other,
                    message: args.message
                  })
                  .then((res) => console.log(res))
              } else {
                return knex('users')
                  .insert({
                    first_name: args.first_name,
                    last_name: args.last_name,
                    password: null,
                    email: args.email,
                    phone_number: args.phone_number
                  })
                  .returning('id')
                  .then((res, err) => {
                    console.log('added to users table');
                    console.log(res);
                    if (res[0].id) {
                      console.log(res);
                      return knex('contact_form')
                        .insert({
                          user_id: res[0].id,
                          page: args.page,
                          career: args.career,
                          training_service: args.training_service,
                          financial_aid: args.financial_aid,
                          app_process: args.app_process,
                          talk_to_grad: args.talk_to_grad,
                          talk_to_working: args.talk_to_working,
                          other: args.other,
                          message: args.message
                        })
                        .then((res) => console.log(res))
                    } else {
                      console.error(err);
                    }
                  })
              }
            });
        } else if (args.phone_number !== null) {
          return knex('users')
            .select('id')
            .where('phone_number', args.phone_number)
            .returning('id')
            .then((res, err) => {
              if (res[0].id) {
                return knex('contact_form')
                  .insert({
                    user_id: res[0].id,
                    page: args.page,
                    career: args.career,
                    training_service: args.training_service,
                    financial_aid: args.financial_aid,
                    app_process: args.app_process,
                    talk_to_grad: args.talk_to_grad,
                    talk_to_working: args.talk_to_working,
                    other: args.other,
                    message: args.message
                  })
              } else {
                return knex('users')
                  .insert({
                    first_name: args.first_name,
                    last_name: args.last_name,
                    password: null,
                    email: args.email,
                    phone_number: args.phone_number
                  })
                  .returning('id')
                  .then((res, err) => {
                    if (res[0].id) {
                      return knex('contact_form')
                        .insert({
                          user_id: res[0].id,
                          page: args.page,
                          career: args.career,
                          training_service: args.training_service,
                          financial_aid: args.financial_aid,
                          app_process: args.app_process,
                          talk_to_grad: args.talk_to_grad,
                          talk_to_working: args.talk_to_working,
                          other: args.other,
                          message: args.message
                        })
                    } else {
                      console.error(err);
                    }
                  })
              }
            });
        }
      }
    },

  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});