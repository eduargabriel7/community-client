
// create hook for subscription
const useNewCommentPostForGetPost = (
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
            if (!subscriptionData.data || !prev.getPost) return prev;
            const { comment } = subscriptionData.data.newCommentPost;
            // add to comment
            return Object.assign({}, prev, {
               getPost: Object.assign({}, prev.getPost, {
                  comments: [...prev.getPost.comments, comment]
               })
            });
         }
      })
   }

   // return function
   return subscribeToNewCommentPost;
}

// export module
export default useNewCommentPostForGetPost;