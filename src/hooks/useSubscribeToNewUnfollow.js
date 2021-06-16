
// create hook for subscribeToNewUnfollow function
const useSubscribeToNewUnfollow = (
   subscribeToMore,
   subscription,
   { variables: { username } }
) => {

   // create function
   const subscribeToNewUnfollow = () => {
      subscribeToMore({
         document: subscription,
         variables: { username },
         updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            const { nonFollower, nonFollowed } = subscriptionData.data.newUnfollow;
            if (
               prev.getUser.following &&
               nonFollower.username === username
            ) {
               return Object.assign({}, prev, {
                  getUser: {
                     following: prev.getUser.following.filter(
                        followed => followed.id !== nonFollowed.id
                     )
                  }
               });
            }
            if (
               prev.getUser.followers &&
               nonFollowed.username === username
            ) {
               return Object.assign({}, prev, {
                  getUser: {
                     followers: prev.getUser.followers.filter(
                        follower => follower.id !== nonFollower.id
                     )
                  }
               });
            }
         }
      })
   }

   // return function
   return subscribeToNewUnfollow;
}

// export module
export default useSubscribeToNewUnfollow;