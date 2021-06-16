// imported modules
import gql from 'graphql-tag';

// create mutation
const CREATE_COMMENT_POST = gql`
   mutation createCommentPost(
      $postId: ID!
      $userId: ID!
      $content: String!
   ) {
      createCommentPost(
         createCommentPostInput: {
            postId: $postId
            userId: $userId
            content: $content
         }
      ) {
         id
         content
         user {
            id
            username
            fullname
            profilePhoto
         }
      }
   }
`;

// export module
export default CREATE_COMMENT_POST;