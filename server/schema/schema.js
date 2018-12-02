const graphql = require('graphql');
const _ = require('lodash')
const {GraphQLObjectType, 
       GraphQLString, 
       GraphQLSchema, 
       GraphQLID, 
       GraphQLInt } = graphql;

//dummy data
var books = [
     { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
     { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
     { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' } 
];

var authors = [
    { name: 'Patrick', age: 44, id: '1' },
    { name: 'Brandon', age: 44, id: '2' },
    { name: 'Terry Pratchett', age: 44, id: '3' } 
];


const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
})

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name :'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: { type: GraphQLID }},
            resolve( parent, args){
              return _.find(books, { id: args.id }) 
            }
        },
        author: {
            type: AuthorType,
            args: {id: { type: GraphQLID }},
            resolve( parent, args){
              return _.find(authors, { id: args.id }) 
            }
        }
    }
})

module.exports = new GraphQLSchema({
   query: RootQuery
})