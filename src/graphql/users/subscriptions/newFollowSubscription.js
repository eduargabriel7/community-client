// imported modules
import gql from 'graphql-tag';

// create new follower subscription
const NEW_FOLLOW = gql`

   subscription newFollow(
      $username: String!
   ) {
      newFollow(
         username: $username
      ) {
         follower{
            id
            username
            fullname
            profilePhoto
         }
         followed{
            id
            username
            fullname
            profilePhoto
         }
      }
   }
`;

// export module
export default NEW_FOLLOW;