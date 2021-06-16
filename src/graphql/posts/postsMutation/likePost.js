// imported modules
import gql from 'graphql-tag';

// create mutation
const LIKE_POST = gql`
   mutation likePost(
      $postId: ID!
      $userId: ID!
   ) {
      likePost(
         likePostInput: {
            postId: $postId
            userId: $userId
         }
      ) {
         id
      }
   }
`;

// export module
export default LIKE_POST;