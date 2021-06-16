// imported modules
import gql from 'graphql-tag';

// create subscription
const NEW_LIKE_POST = gql`

   subscription newLikePost(
      $postId: ID!
   ) {
      newLikePost(
         postId: $postId
      ) {
         userLike{
            id
            username
            fullname
            profilePhoto
         }
      }
   }
`;

// export module
export default NEW_LIKE_POST;