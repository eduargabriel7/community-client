// imported modules
import gql from 'graphql-tag';

// create update user mutation
const UPDATE_USER = gql`
   mutation updateUser(
      $id: ID!
      $fullname: String!
      $username: String!
      $website: String!
      $about: String!
      $profilePhoto: String!
      $coverPhoto: String!
   ) {
      updateUser(
         updateUserInput: {
            id: $id
            fullname: $fullname
            username: $username
            website: $website
            about: $about
            profilePhoto: $profilePhoto
            coverPhoto: $coverPhoto
         }
      ) {
         id
         fullname
         username
         website
         about
         profilePhoto
         coverPhoto
         followers{
            id
         }
         following{
            id
         }
      }
   }
`;

export default UPDATE_USER;