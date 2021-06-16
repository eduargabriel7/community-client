// imported modules
import { HeartIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';

// create component
const Like = ({
   isLiked,
   onClickLike,
   likes
}) => {

   // render
   return (
      <div className="button flex items-center sm:hover:text-pink-700">
         {
            isLiked
               ? <>
                  <HeartIconSolid
                     onClick={onClickLike}
                     className="button h-9 p-2 rounded-full hover-active-pink text-pink-700"
                  />
                  <p className="text-pink-700">{likes.length}</p>
               </>
               : <>
                  <HeartIcon
                     onClick={onClickLike}
                     className="button h-9 p-2 rounded-full hover-active-pink"
                  />
                  <p>{likes.length}</p>
               </>
         }
      </div>
   )
}

// export component
export default Like;
