// imported modules
import gql from 'graphql-tag';

// create new follower subscription
const NEW_UNFOLLOW = gql`

   subscription newUnfollow(
      $username: String!
   ) {
      newUnfollow(
         username: $username
      ) {
         nonFollower{
            id
            username
            fullname
            profilePhoto
         }
         nonFollowed{
            id
            username
            fullname
            profilePhoto
         }
      }
   }
`;

// export module
export default NEW_UNFOLLOW;