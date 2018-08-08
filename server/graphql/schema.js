const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt, 
    GraphQLList
} = require('graphql');

const knex = require('knex');

const CareerType = new GraphQLObjectType({
    name: 'Career',
    description: 'This is a career object',

    field: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        salary: {type: GraphQLInt},
        trainingTime: {type: GraphQLString},
        path: {type: GraphQLString}
    }) 
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        careers: {
            type: new GraphQLList(CareerType),
            resolve(parent, args) {
                return knex('careers').select();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});