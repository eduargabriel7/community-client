// imported modules
import gql from 'graphql-tag';

// create user login mutation
const LOGIN_USER = gql`
   mutation login(
      $email: String!
      $password: String!
   ) {
      login(
         loginInput: {
            email: $email
            password: $password
         }
      ) {
         id
         fullname
         username
         email
         profilePhoto
      }
   }
`;

// export module
export default LOGIN_USER;