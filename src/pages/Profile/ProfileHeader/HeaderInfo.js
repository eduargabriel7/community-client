// imported modules
import moment from 'moment';

// icons
import { CalendarIcon } from '@heroicons/react/outline';

// components
import ProfileFollowers from '../ProfileFollowers';

// create component
const HeaderInfo = ({ getUser, userAuth }) => {

   // render
   return (
      <div className="sm:ml-4 ml-2 sm:mt-20 mt-12">
         <h1 className="sm:text-xl text-lg font-bold">{getUser.fullname}</h1>
         <h1 className="sm:text-lg text-base font-semibold text-disabled font-sans">
            @{getUser.username}
         </h1>
         <div className="flex items-center space-x-1 text-disabled mt-2">
            <CalendarIcon className="sm:h-5 h-4" />
            <p className="">joined {moment(getUser.createdAt).fromNow()}</p>
         </div>

         {/* profile info followers */}
         <ProfileFollowers getUser={getUser} userAuth={userAuth}/>

      </div>
   )
}

export default HeaderInfo;
