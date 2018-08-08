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
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        salary: { type: GraphQLInt },
        trainingTime: { type: GraphQLString },
        path: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        careers: {
            type: new GraphQLList(CareerType),
            resolve(parent, args) {
                console.log('Add query resolve functionality');
                //knex('careers').select();
                return 
            }
        }
    }
})

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
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});