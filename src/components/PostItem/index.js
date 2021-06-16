// imported modules
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useMutation } from '@apollo/client';
import LIKE_POST from 'graphql/posts/postsMutation/likePost';
import NEW_LIKE_POST from 'graphql/posts/postsSubscription/newLikePost';
import NEW_COMMENT_POST from 'graphql/comments/commentsSubscription/newCommentPost';
import useSubscribeToNewLike from 'hooks/useSubscribeToNewLike';
import useNewCommentPost from 'hooks/useNewCommentPost';
import PostItemComponent from './component';

// create component
const PostItem = ({ subscribeToMore, post, userAuth }) => {

   // grahpql mutation
   const [likePost] = useMutation(LIKE_POST, {
      onError: (error) => {
         console.log(error);
      }
   })

   // on click like
   const onClickLike = async event => {
      // graphql mutation
      await likePost({ variables: { postId: post.id, userId: userAuth.id } });
   }

   // hooks for subscriptions
   const subscribeToNewLike = useSubscribeToNewLike(
      subscribeToMore, NEW_LIKE_POST, { variables: { postId: post.id } }
   )
   const subscribeToNewCommentPost = useNewCommentPost(
      subscribeToMore, NEW_COMMENT_POST, { variables: { postId: post.id } }
   )

   // effect after rendering
   useEffect(() => {
      subscribeToNewLike();
      subscribeToNewCommentPost();
      // eslint-disable-next-line
   }, [])

   // render
   return (
      <PostItemComponent
         post={post}
         userAuth={userAuth}
         onClickLike={onClickLike}
         subscribeToNewLike={subscribeToNewLike}
      />
   )
}


// state mapping to pass properties to component
const mapStateToProps = (state) => ({
   userAuth: state.userState.userAuth
})

// export component
export default connect(mapStateToProps)(PostItem);
