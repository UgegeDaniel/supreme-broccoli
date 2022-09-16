const graphql = require('graphql')
const _ = require('lodash')
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql
const Book = require('../models/book')
const Author = require('../models/author')

//DUMMY DATA
// var books = [
// 	{name: "Things fall Apart", genre: "drama", id: "1", authorId: "3"},
// 	{name: "The song of ice and fire", genre: "fantasy", id: "2", authorId: "1"},
// 	{name: "The house of the dragon", genre: "fantasy", id: "3", authorId: "1"},
// 	{name: "Harry Potter and the philosophers' stone", genre: "Magic", id: "4", authorId: "2"},
//   {name: "An Image of Africa", genre: "history", id: "5", authorId: "3"},
// 	{name: "Fantastic beasts and where to find them", genre: "Magic", id: "6", authorId: "2"},
// ]

// var authors = [
//   {name: "Goerge R. R. Martin", age: 50, id: "1"},
//   {name: "J. K. Rowlings", age: 60, id: "2"},
//   {name: "Chinua Achebe", age: 80, id: "3"}
// ]

//step 3-gql- iv- a --- set up object types 
//BOOK TYPE
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    //RELATIONSHIP 
    author: {
      type: AuthorType,
      resolve(parent, args) {
        //code to get data from db/other source
        //using dummy data
        //  return _.find(authors, {id: parent.authorId}) //you can use vanilla js or just use lodash
        return Author.findById(parent.authorId)
      }
    }
  })
})

//AUTHOR TYPE
const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    //LISTS
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        //using dummy data
        // return _.filter(books, {authorId: parent.id}) //filter by id
        return Book.find({authorId: parent.id})
      }
    }
  })
})


//step 3-gql- iv - b --- set up root queries  
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:  {
    //BOOK QUERRY
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //using dummy data
        //code to get data from db/other source
        //  return _.find(books, {id: args.id}) //you can use vanilla js or just use lodash
        return Book.findById(args.id)
      }
    },
    //AUTHOR QUERRY
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //using dummy data
        //code to get data from db/other source
        //  return _.find(authors, {id: args.id}) //you can use vanilla js or just use lodash
        return Author.findById(args.id)
      }
    },
    //LIST QUERRY
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        //using dummy data
        //code to get data from db/other source
        //  return books
        return Book.find({})
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        //using dummy data 
        //code to get data from db/other source
        //  return authors
        return Author.find({})
      }
    }
  }
})

//step 3-gql- iv - c --- set up Mutations 
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    //add author              //CREATE 
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parent, args) {
        let author = new Author({
          name: args.name,
          age: args.age
        });
        return author.save()
      }
    },
    //add Book                //CREATE 
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID)}
      },
      resolve(parent, args) {
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId
        });
        return book.save()
      }
    },
    //add Book                //CREATE 
    //add Book                //CREATE 
    //add Book                //CREATE 
    //add Book                //CREATE 
    //add Book                //CREATE 
    //add Book                //CREATE 
    //add Book                //CREATE 
    //add Book                //CREATE 
    //add Book                //CREATE 

  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})