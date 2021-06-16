// imported modules
import gql from 'graphql-tag';

// create subscription
const NEW_COMMENT_POST = gql`

   subscription newCommentPost(
      $postId: ID!
   ) {
      newCommentPost(
         postId: $postId
      ) {
         comment{
            id
            content
            user{
               username
               fullname
               profilePhoto
            }
            likes{
               id
            }
         }
      }
   }
`;

// export module
export default NEW_COMMENT_POST;