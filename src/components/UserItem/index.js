// imported modules
import avatar from 'assets/avatar.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// create component
const UserItem = ({
   profilePhoto,
   fullname,
   username
}) => {

   // render
   return (
      <div className="flex items-center space-x-3">
         <div className="sm:h-12 sm:w-12 h-8 w-8 sm:min-w-12 min-w-8 rounded-full">
            <LazyLoadImage
               src={profilePhoto !== '' ? profilePhoto : avatar}
               alt="avatar"
               height="100%"
               width="100%"
               className="h-full w-full object-cover rounded-full"
            />
         </div>
         <div className="flex flex-col text-left">
            <p className="font-semibold">{fullname}</p>
            <p className="text-disabled font-sans">@{username}</p>
         </div>
      </div>
   )
}

// export component
export default UserItem;
