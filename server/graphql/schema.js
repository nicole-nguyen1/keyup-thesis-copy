const { knex } = require('../../database/db');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLID
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
    industry: { 
      type: IndustryType,
      resolve(parent, args) {
        return knex('industries')
                .select()
                .where({ 'id': parent.industry_id })
                .first();
      }
    },
    annual_salary: { type: GraphQLString },
    description: { type: GraphQLString },
    openings: { type: GraphQLString },
    card_image_url: { type: GraphQLString },
    card_pro: { type: GraphQLString},
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
    training_cost: { type: GraphQLString }
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

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    //GET careers list
    careers: {
      type: new GraphQLList(CareerType),
      resolve(parent, args) {
        return knex('careers').select();
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
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCareer: {
      type: CareerType,
      args: {
        name: { type: GraphQLString }
      }, 
      resolve(parent, args) {
        console.log('add Mutation resolve functionality');
        return;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});