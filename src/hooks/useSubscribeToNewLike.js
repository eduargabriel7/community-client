
// create hook for subscription
const useSubscribeToNewLike = (
   subscribeToMore,
   subscription,
   { variables: { postId } }
) => {

   // create function
   const subscribeToNewLike = () => {
      subscribeToMore({
         document: subscription,
         variables: { postId },
         updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data || !prev.getPosts) return prev;
            const { userLike } = subscriptionData.data.newLikePost;
            const postLiked = prev.getPosts.find(post => post.id === postId);
            if (postLiked) {
               // is liked ?
               const isLiked = postLiked.likes.find(user => user.id === userLike.id)
               if (!isLiked) {
                  // add user to likes
                  return Object.assign({}, prev, {
                     getPosts: prev.getPosts.map(post => {
                        if (post.id === postId) {
                           return Object.assign({}, post, {
                              likes: [...post.likes, userLike]
                           })
                        }
                        return post;
                     })
                  });
               }
               else {
                  // remove user to likes
                  return Object.assign({}, prev, {
                     getPosts: prev.getPosts.map(post => {
                        if (post.id === postId) {
                           return Object.assign({}, post, {
                              likes: post.likes.filter(
                                 user => user.id !== userLike.id
                              )
                           })
                        }
                        return post
                     })
                  });
               }
            }
            else {
               return prev;
            }
         }
      })
   }

   // return function
   return subscribeToNewLike;
}

// export module
export default useSubscribeToNewLike;