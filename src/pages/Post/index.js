// imported modules
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import GET_POST from 'graphql/posts/postsQuery/getPost';
import LIKE_POST from 'graphql/posts/postsMutation/likePost';
import NEW_LIKE_POST from 'graphql/posts/postsSubscription/newLikePost';
import NEW_COMMENT_POST from 'graphql/comments/commentsSubscription/newCommentPost';
import useNewLikeForGetPost from 'hooks/useNewLikeForGetPost';
import useNewCommentPostForGetPost from 'hooks/useNewCommentPostForGetPost';
import PostPage from './page';
import LoadingIcon from 'assets/LoadingIcon';

// create component
const Post = ({ userAuth }) => {

   // hook react router
   const { username, postId } = useParams();

   // graphql query
   const { subscribeToMore, loading, error, data } = useQuery(GET_POST, {
      variables: { postId, username }
   });

   // grahpql mutation
   const [likePost] = useMutation(LIKE_POST, {
      onError: (error) => {
         console.log(error);
      }
   })

   // on click like
   const onClickLike = async event => {
      // graphql mutation
      await likePost({ variables: { postId, userId: userAuth.id } });
   }

   // hooks for subscriptions
   const newLikeForGetPost = useNewLikeForGetPost(
      subscribeToMore, NEW_LIKE_POST, { variables: { postId } }
   )
   const subscribeToNewCommentPost = useNewCommentPostForGetPost(
      subscribeToMore, NEW_COMMENT_POST, { variables: { postId } }
   )

   // effect after rendering
   useEffect(() => {
      newLikeForGetPost();
      subscribeToNewCommentPost();
      // eslint-disable-next-line
   }, [])

   // is loading
   if (loading) {
      return (
         <div
            className="w-full h-full xl:pl-72 sm:pl-20
            sm:pb-2 pb-14 sm:pt-24 pt-16"
         >
            <div className="w-full h-1/2 flex items-center justify-center">
               <LoadingIcon className="h-10 text-blue-600 animate-spin" />
            </div>
         </div>
      )
   }

   // on error
   if (error) {
      return (
         <div
            className="w-full h-full xl:pl-72 sm:pl-20
            sm:pb-2 pb-14 sm:pt-24 pt-16"
         >
            <p>{error.message}</p>
         </div>
      )
   }

   // render
   return (
      <PostPage
         post={data?.getPost}
         userAuth={userAuth}
         onClickLike={onClickLike}
         newLikeForGetPost={newLikeForGetPost}
      />
   )
}

// state mapping to pass properties to component
const mapStateToProps = (state) => ({
   userAuth: state.userState.userAuth
})

// export component
export default connect(mapStateToProps)(Post);
