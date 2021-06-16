// imported modules
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import moment from 'moment';

// components
import UserItem from 'components/UserItem';
import Comment from 'components/Comment';
import Like from 'components/Like';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// create component
const PostItemComponent = ({
   post,
   userAuth,
   onClickLike,
   subscribeToNewLike
}) => {

   // state component
   const [isLiked, setIsLiked] = useState(false)

   // hook react router
   const history = useHistory();

   // effect after rendering
   useEffect(() => {
      setIsLiked(post.likes.find(
         userLike => userLike.id === userAuth.id
      ) ? true : false)
      // eslint-disable-next-line
   }, [subscribeToNewLike])

   // render
   return (
      <div
         className="relative w-full bg-paper sm:rounded-3xl rounded-md 
         sm:p-4 p-2 flex flex-col space-y-2 sm:hover:bg-hoverPaper"
      >

         {/* post header */}
         <div className="flex items-center">
            <UserItem
               profilePhoto={post.user.profilePhoto}
               fullname={post.user.fullname}
               username={post.user.username}
            />
         </div>

         {/* post content */}
         <div className="flex flex-col space-y-2">
            {/* text */}
            <div>
               <p>{post.content}</p>
            </div>

            {/* image */}
            {
               post.images.length > 0 && post.images[0] !== '' &&
               <div className="sm:max-h-72 max-h-52 sm:max-w-lg w-full">
                  <LazyLoadImage
                     src={post.images[0]} alt="postImage"
                     effect="blur"
                     height="100%"
                     width="100%"
                     className="w-full h-full object-cover rounded-md"
                  />
               </div>
            }
         </div>

         {/* tools */}
         <div className="flex items-center space-x-3 text-icon">
            {/* new like */}
            <Like
               isLiked={isLiked}
               onClickLike={onClickLike}
               likes={post.likes}
            />
            {/* new comment */}
            <Comment
               post={post}
               userAuth={userAuth}
            />
         </div>

         {/* date */}
         <p className="text-disabled px-1">{moment(post.createdAt).fromNow()}</p>

         {/* view post button */}
         <button
            onClick={() => history.push(`/${post.user.username}/${post.id}`)}
            className="absolute origin-bottom-right sm:bottom-4 bottom-2 
            sm:right-4 right-2 button border-2 border-blue-600 
            text-blue-500 font-semibold hover-active-blue
            sm:w-16 w-14 sm:py-1 py-1 rounded-3xl"
         >
            View
         </button>

      </div>
   )
}

// export component
export default PostItemComponent;
