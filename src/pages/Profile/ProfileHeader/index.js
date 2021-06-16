// imported modules
import avatar from 'assets/avatar.png';

// components
import HeaderInfo from './HeaderInfo';
import ProfileEdit from '../ProfileEdit';
import ProfileOptions from '../ProfileOptions';

// create component
const ProfileHeader = ({ getUser, userAuth }) => {

   // render
   return (
      <div className="w-full relative">

         {/* header cover photo */}
         <div
            className="lg:h-56 sm:h-44 h-28 bg-paper rounded-xl
            bg-cover bg-center bg-no-repeat"
            style={{
               backgroundImage: `url(${getUser.coverPhoto !== '' && getUser.coverPhoto})`
            }}
         >
         </div>

         {/* header profile photo */}
         <div
            className="absolute origin-top-left lg:top-36 sm:top-28 top-16
            sm:left-4 left-2 bg-default rounded-full sm:p-2 p-1
            lg:h-36 lg:w-36 sm:h-32 sm:w-32 h-20 w-20"
         >
            <img
               src={getUser.profilePhoto !== '' ? getUser.profilePhoto : avatar}
               alt="avatar"
               className="h-full w-full rounded-full bg-paper object-cover"
            />
         </div>

         {/* Header info */}
         <HeaderInfo getUser={getUser} userAuth={userAuth}/>

         {/* profile edit */}
         {
            userAuth.username === getUser.username &&
            <ProfileEdit getUser={getUser} userAuth={userAuth} />
         }

         {/* profile options */}
         {
            userAuth.username !== getUser.username &&
            <ProfileOptions getUser={getUser} userAuth={userAuth} />
         }

      </div>
   )
}

// export component
export default ProfileHeader;
