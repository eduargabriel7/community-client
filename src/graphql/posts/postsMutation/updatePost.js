// imported modules
import gql from 'graphql-tag';

// create mutation
const UPDATE_POST = gql`
   mutation updatePost(
      $postId: ID!
      $content: String!
      $images: [String!]
   ) {
      updatePost(
         updatePostInput: {
            postId: $postId
            content: $content
            images: $images
         }
      ) {
         id
         content
         images
      }
   }
`;

// export module
export default UPDATE_POST;