// imported modules
import { useEffect } from 'react';
import ProfileHeader from './ProfileHeader';
import LoadingIcon from 'assets/LoadingIcon';

// create component
const ProfilePage = ({
   userAuth,
   loading,
   data,
   error,
   subscribeToNewFollow,
   subscribeToNewUnfollow
}) => {

   // when rendering
   useEffect(() => {
      subscribeToNewFollow();
      subscribeToNewUnfollow();
      // eslint-disable-next-line
   }, [
   ])

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
      <div
         className="w-full h-full xl:pl-72 sm:pl-20
         sm:pb-2 pb-16 sm:pt-24 pt-16"
      >

         {/* header */}
         <ProfileHeader getUser={data.getUser} userAuth={userAuth} />

      </div>
   )
}

// export component
export default ProfilePage;