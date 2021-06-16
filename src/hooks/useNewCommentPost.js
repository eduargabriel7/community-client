
// create hook for subscription
const useNewCommentPost = (
   subscribeToMore,
   subscription,
   { variables: { postId } }
) => {

   // create function
   const subscribeToNewCommentPost = () => {
      subscribeToMore({
         document: subscription,
         variables: { postId },
         updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data || !prev.getPosts) return prev;
            const { comment } = subscriptionData.data.newCommentPost;
            // add to comment
            return Object.assign({}, prev, {
               getPosts: prev.getPosts.map(post => {
                  if (post.id === postId) {
                     return Object.assign({}, post, {
                        comments: [...post.comments, comment]
                     })
                  }
                  return post;
               })
            });
         }
      })
   }

   // return function
   return subscribeToNewCommentPost;
}

// export module
export default useNewCommentPost;