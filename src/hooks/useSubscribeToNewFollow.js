
// create hook for subscribeToNewFollow function
const useSubscribeToNewFollow = (
   subscribeToMore,
   subscription,
   { variables: { username } }
) => {

   // create function
   const subscribeToNewFollow = () => {
      subscribeToMore({
         document: subscription,
         variables: { username },
         updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            const { follower, followed } = subscriptionData.data.newFollow;
            if (
               prev.getUser.following &&
               follower.username === username
            ) {
               return Object.assign({}, prev, {
                  getUser: {
                     following: [...prev.getUser.following, followed]
                  }
               });
            }
            if (
               prev.getUser.followers &&
               followed.username === username
            ) {
               return Object.assign({}, prev, {
                  getUser: {
                     followers: [...prev.getUser.followers, follower]
                  }
               });
            }
         }
      })
   }

   // return function
   return subscribeToNewFollow;
}

// export module
export default useSubscribeToNewFollow;