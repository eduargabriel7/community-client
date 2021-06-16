
// create hook for subscription
const useNewLikeForGetPost = (
   subscribeToMore,
   subscription,
   { variables: { postId } }
) => {

   // create function
   const newLikeForGetPost = () => {
      subscribeToMore({
         document: subscription,
         variables: { postId },
         updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data || !prev.getPost) return prev;
            const { userLike } = subscriptionData.data.newLikePost;
            // is liked ?
            const isLiked = prev.getPost.likes.find(user => user.id === userLike.id)
            if (!isLiked) {
               // add user to likes
               return Object.assign({}, prev, {
                  getPost: Object.assign({}, prev.getPost, {
                     likes: [...prev.getPost.likes, userLike]
                  })
               });
            }
            else {
               // remove user to likes
               return Object.assign({}, prev, {
                  getPost: Object.assign({}, prev.getPost, {
                     likes: prev.getPost.likes.filter(
                        user => user.id !== userLike.id
                     )
                  })
               });
            }
         }
      })
   }

   // return function
   return newLikeForGetPost;
}

// export module
export default useNewLikeForGetPost;