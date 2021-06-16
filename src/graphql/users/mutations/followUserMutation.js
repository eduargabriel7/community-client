// imported modules
import gql from 'graphql-tag';

// create follow user mutation
const FOLLOW_USER = gql`
   mutation followUser(
      $followerId: ID!
      $followedId: ID!
   ) {
      followUser(
         followUserInput: {
            followerId: $followerId
            followedId: $followedId
         }
      )
   }
`;

// export module
export default FOLLOW_USER;