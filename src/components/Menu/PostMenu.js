// imported modules
import { useState } from 'react';
import {
   DotsHorizontalIcon,
   TrashIcon,
   EmojiSadIcon
} from '@heroicons/react/outline';
import PostEdit from 'components/PostItem/PostEdit';

// create component
const PostMenu = ({
   post, userAuth
}) => {

   // state component
   const [isOpen, setIsOpen] = useState(false);

   // render
   return (
      <div className="flex flex-grow items-center justify-end">
         <div className="relative">

            {/* dots button */}
            <button
               onClick={() => setIsOpen(isOpen ? false : true)}
               onBlur={() => setTimeout(() => {
                  setIsOpen(false);
               }, 200)}
               className="button"
            >
               <DotsHorizontalIcon
                  className="p-2 h-9 button rounded-full hover-active-gray"
               />
            </button>

            {/* menu */}
            <div
               className={`${!isOpen && 'hidden'}
               absolute origin-top-right top-10 right-0 flex flex-col
               border border-gray-500 border-opacity-20 shadow z-50 bg-default
               rounded-md w-36`}
            >
               <button
                  className="button p-2 flex items-center space-x-2
                  hover-active-gray"
               >
                  <EmojiSadIcon className="h-4" />
                  <p>Not interested</p>
               </button>
               {
                  post.user.id === userAuth.id &&
                  <>
                     {/* edit post */}
                     <PostEdit post={post} />
                     {/* delete post */}
                     <button
                        className="button p-2 flex items-center space-x-2
                              hover-active-gray"
                     >
                        <TrashIcon className="h-4" />
                        <p>Delete</p>
                     </button>
                  </>
               }
            </div>
         </div>
      </div>
   )
}

// export component
export default PostMenu;