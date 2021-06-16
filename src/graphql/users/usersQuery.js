// imported modules
import gql from 'graphql-tag';

// create user query
export const GET_USER = gql`
   query getUser(
      $username: String!
   ) {
      getUser(
         username: $username
      ) {
         id
         fullname
         username
         profilePhoto
         coverPhoto
         about
         website
         createdAt
         followers{
            id
            fullname
            username
            profilePhoto
         }
         following{
            id
            fullname
            username
            profilePhoto
         }
      }
   }
`;

export const SEARCH_USERS = gql`
   query searchUsers(
      $username: String!
   ) {
      searchUsers(
         searchUsersInput: {
            username: $username
         }
      ) {
         username
         fullname
         profilePhoto
      }
   }
`;