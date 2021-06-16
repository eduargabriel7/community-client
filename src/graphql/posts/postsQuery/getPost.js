// imported modules
import gql from 'graphql-tag';

// create query
const GET_POST = gql`
   query getPost(
      $postId: ID!
      $username: String!
   ) {
      getPost(
         getPostInput: {
            postId: $postId
            username: $username
         }
      ) {
         id
         content
         images
         user{
            id
            username
            fullname
            profilePhoto
         }
         comments{
            id
            content
            user {
               id
               username
               fullname
               profilePhoto
            }
            likes {
               id
               username
               fullname
               profilePhoto
            }
            comments {
               id
               content
            }
            createdAt
         }
         likes{
            id
            username
            fullname
            profilePhoto
         }
         createdAt
         updatedAt
      }
   }
`

// export module
export default GET_POST;