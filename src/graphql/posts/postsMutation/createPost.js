// imported modules
import gql from 'graphql-tag';

// create mutation
const CREATE_POST = gql`
   mutation createPost(
      $userId: ID!
      $content: String!
      $images: [String!]
   ) {
      createPost(
         createPostInput: {
            userId: $userId
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
export default CREATE_POST;