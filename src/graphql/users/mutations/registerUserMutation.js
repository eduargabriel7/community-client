// imported modules
import gql from 'graphql-tag';

// create regsiter user mutation
const REGISTER_USER = gql`
     mutation register(
          $fullname: String!
          $username: String!
          $email: String!
          $password: String!
          $confirmPassword: String!
     ) {
          register(
               registerInput: {
                    fullname: $fullname
                    username: $username
                    email: $email
                    password: $password
                    confirmPassword: $confirmPassword
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
export default REGISTER_USER;