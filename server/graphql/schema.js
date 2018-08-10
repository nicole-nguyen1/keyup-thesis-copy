const { knex } = require('../../database/db');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLID
} = require('graphql');

const CareerType = new GraphQLObjectType({
  name: 'Career',
  description: 'This is a career object',

  fields: () => ({
    id: { type: GraphQLID },
    industry_id: { type: GraphQLID },
    name: { type: GraphQLString },
    annual_salary: { type: GraphQLString },
    training_length: { type: GraphQLString },
    description: { type: GraphQLString },
    openings: { type: GraphQLString },
    training_hours: { type: GraphQLString },
    training_cost: { type: GraphQLString },
    card_image_url: { type: GraphQLString },
    card_pro: { type: GraphQLString},
    profile_image_url: { type: GraphQLString },
    hourly_pay: { type: GraphQLString },
    video_url: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    careers: {
      type: new GraphQLList(CareerType),
      resolve(parent, args) {
        return knex('careers').select();
      }
    },
    career: {
      type: CareerType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return knex('careers').select().where('id', args.id).first(); 
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