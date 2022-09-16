import { gql } from '@apollo/client'
//apollo client setup  //fe-step-5-gqlApollo-iii
const getBooksQuery = gql`
 {
  books{
   name
   id
  }
 }
`
const getBookQuery = gql`
query($id: ID){
    book(id: $id){
        name
        genre
        id
        author{
            id
            name
            age
            books{
                name
                id
            }
        }
    }
}
`
//apollo client setup  //fe-step-5-gqlApollo-iii
const getAuthorsQuery = gql`
 {
  authors{
   name
   id
  }
 }
`
const addNewBookMutation = gql` 
mutation($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId){
       name
       id
    }
}
`
export {
    getBooksQuery,
    getBookQuery,
    getAuthorsQuery,
    addNewBookMutation
}