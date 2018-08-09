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
        name: { type: GraphQLString },
        salary: { type: GraphQLInt },
        training_time: { type: GraphQLString },
        path: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        careers: {
            type: new GraphQLList(CareerType),
            resolve(parent, args) {
                console.log('Add query resolve functionality');
                return knex('careers').select();
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
                name: { type: GraphQLString },
                salary: { type: GraphQLInt },
                trainingTime: { type: GraphQLString },
                path: { type: GraphQLString }
            }, 
            resolve(parent, args) {
                console.log('add Mutation resolve functionality');
                return
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});