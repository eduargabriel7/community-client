// imported modules
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dialog } from '@headlessui/react';

// icons
import { XIcon } from '@heroicons/react/outline';
import avatar from 'assets/avatar.png';

// create component
const ProfileFollowers = ({
   themeMode,
   getUser
}) => {

   // state component
   const [isOpen, setIsOpen] = useState(false);
   const [showPaper, setShowPaper] = useState('followers');

   // hooks
   const history = useHistory();

   // render
   return (
      <div className="flex items-center sm:space-x-6 space-x-4 mt-2">

         {/* following button */}
         <button
            onClick={() => {
               setShowPaper('following')
               setIsOpen(true);
            }}
            className="button hover-active-gray rounded-md
            flex items-center space-x-1"
         >
            <p className="font-semibold">{Object.keys(getUser.following).length}</p>
            <p className="text-disabled">following</p>
         </button>

         {/* followers button */}
         <button
            onClick={() => {
               setShowPaper('followers')
               setIsOpen(true);
            }}
            className="button hover-active-gray rounded-md
            flex items-center space-x-1"
         >
            <p className="font-semibold">{Object.keys(getUser.followers).length}</p>
            <p className="text-disabled">followers</p>
         </button>

         {/* modal followers */}
         <Dialog
            as="div"
            className={`${themeMode} fixed z-50 inset-0 overflow-y-auto
            sm:text-sm text-xs text-default`}
            open={isOpen}
            onClose={() => setIsOpen(false)}
         >
            <div className="min-h-screen px-2 text-center">
               <Dialog.Overlay className="fixed inset-0 bg-shadow opacity-50" />
               <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
               >
                  &#8203;
               </span>
               <div
                  className="inline-block w-full lg:max-w-2xl sm:max-w-xl max-w-md
                  lg:h-96 sm:h-80 h-64 sm:p-4 p-2 overflow-hidden
                  align-middle transition-all transform bg-default rounded-2xl"
               >
                  <button
                     onClick={() => setIsOpen(false)}
                  >
                     <XIcon
                        className="button sm:h-6 h-4 hover-blue active-blue 
                        absolute origin-top-left top-2 left-2 rounded-full text-icon"
                     />
                  </button>

                  {/* select paper */}
                  <div
                     className="flex space-x-4 w-full sm:h-12 h-10 sm:text-base"
                  >
                     {/* select followers */}
                     <button
                        onClick={() => setShowPaper('followers')}
                        className="w-1/2 button hover-blue active-blue font-semibold text-disabled
                        flex items-center justify-center rounded-md"
                     >
                        <p
                           className={`sm:px-2 h-full flex items-center justify-center
                           ${showPaper === 'followers' && 'border-b-4 border-blue-700 text-blue-700'}`}
                        >
                           Followers
                        </p>
                     </button>

                     {/* select following */}
                     <button
                        onClick={() => setShowPaper('following')}
                        className="w-1/2 button hover-blue active-blue font-semibold text-disabled
                        flex items-center justify-center rounded-md"
                     >
                        <p
                           className={`sm:px-2 h-full flex items-center justify-center
                           ${showPaper === 'following' && 'border-b-4 border-blue-700 text-blue-700'}`}
                        >
                           Following
                        </p>
                     </button>
                  </div>

                  {/* followers paper */}
                  {
                     showPaper === 'followers' &&
                     <div className="sm:mt-4 mt-2 flex flex-col space-y-2">
                        {
                           getUser.followers.map(follower => (
                              <div
                                 key={follower.id}
                                 onClick={() => {
                                    history.push(`/${follower.username}`);
                                    setIsOpen(false);
                                 }}
                                 className="button hover-blue active-blue rounded-md flex
                                 items-center py-1"
                              >
                                 <div className=" sm:h-12 sm:w-12 h-10 w-10 p-2 rounded-full">
                                    <img
                                       className="object-cover rounded-full h-full w-full"
                                       src={follower.profilePhoto ? follower.profilePhoto : avatar}
                                       alt="avatar"
                                    />
                                 </div>
                                 <div className="flex flex-col flex-grow items-start ml-1">
                                    <h1 className="font-semibold whitespace-nowrap">{follower.fullname}</h1>
                                    <h1 className="text-disabled font-sans">@{follower.username}</h1>
                                 </div>
                              </div>
                           ))
                        }
                     </div>
                  }

                  {/* following paper */}
                  {
                     showPaper === 'following' &&
                     <div className="sm:mt-4 mt-2 flex flex-col space-y-2">
                        {
                           getUser.following.map(followed => (
                              <div
                                 key={followed.id}
                                 onClick={() => {
                                    history.push(`/${followed.username}`);
                                    setIsOpen(false);
                                 }}
                                 className="button hover-blue active-blue rounded-md flex
                                 items-center py-1"
                              >
                                 <div className=" sm:h-12 sm:w-12 h-10 w-10 p-2 rounded-full">
                                    <img
                                       className="object-cover rounded-full h-full w-full"
                                       src={followed.profilePhoto ? followed.profilePhoto : avatar}
                                       alt="avatar"
                                    />
                                 </div>
                                 <div className="flex flex-col flex-grow items-start ml-1">
                                    <h1 className="font-semibold whitespace-nowrap">{followed.fullname}</h1>
                                    <h1 className="text-disabled font-sans">@{followed.username}</h1>
                                 </div>
                              </div>
                           ))
                        }
                     </div>
                  }

               </div>
            </div>
         </Dialog>
      </div >
   )
}

// state mapping to pass properties to component
const mapStateToProps = (state) => ({
   themeMode: state.themeState.themeMode
})

// export component
export default connect(mapStateToProps)(ProfileFollowers);

