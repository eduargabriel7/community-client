// imported modules
import { useState, useEffect } from 'react';
import UserItem from 'components/UserItem';
import moment from 'moment';

// components
import Comment from 'components/Comment';
import Like from 'components/Like';

// create component
const PostPage = ({
   post,
   userAuth,
   onClickLike,
   newLikeForGetPost
}) => {

   // state component
   const [isLiked, setIsLiked] = useState(false)

   // effect after rendering
   useEffect(() => {
      setIsLiked(post.likes.find(
         userLike => userLike.id === userAuth.id
      ) ? true : false)
      // eslint-disable-next-line
   }, [newLikeForGetPost])

   // render
   return (
      <div
         className="w-full h-full xl:pl-72 sm:pl-20
         sm:pb-2 pb-14 sm:pt-24 pt-16"
      >
         <div
            className="w-full flex flex-col space-y-4 pb-1 sm:pr-2 h-full
            overflow-auto overscroll-contain"
         >

            {/* post */}
            <div
               className="flex flex-col space-y-2 w-full sm:p-4 p-2 
               bg-paper sm:rounded-3xl rounded-md"
            >
               {/* post header */}
               <div className="flex items-center mb-2">
                  <UserItem
                     profilePhoto={post.user.profilePhoto}
                     fullname={post.user.fullname}
                     username={post.user.username}
                  />
               </div>
               {/* post content */}
               {
                  post.content !== '' &&
                  <div>
                     <p className="sm:text-base">{post.content}</p>
                  </div>
               }
               {/* image */}
               {
                  post.images.length > 0 && post.images[0] !== '' &&
                  <div className="w-full">
                     <img
                        src={post.images[0]} alt="postImage"
                        className="w-full h-full object-cover rounded-md"
                     />
                  </div>
               }
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
            </div>

            {/* comments */}
            {
               post.comments.map(comment => (
                  <div
                     key={comment.id}
                     className="flex flex-col space-y-2 bg-paper sm:rounded-3xl
                     rounded-md sm:p-4 p-2"
                  >
                     <UserItem
                        profilePhoto={comment.user.profilePhoto}
                        fullname={comment.user.fullname}
                        username={comment.user.username}
                     />
                     <p>{comment.content}</p>

                     {/* date */}
                     <p className="text-disabled px-1">{moment(post.createdAt).fromNow()}</p>
                  </div>
               ))
            }

         </div>
      </div>
   )
}

// export component
export default PostPage;
