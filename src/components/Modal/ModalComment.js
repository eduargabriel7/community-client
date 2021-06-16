// imported modules
import { connect } from 'react-redux';
import UserItem from 'components/UserItem';
import ModalMessage from './ModalMessage';
import { Dialog } from '@headlessui/react';
import {
   XIcon, RefreshIcon
} from '@heroicons/react/outline';
import LoadingIcon from 'assets/LoadingIcon';

// create component
const ModalComment = ({
   post,
   userAuth,
   isOpen,
   setIsOpen,
   showModal,
   setShowModal,
   values,
   error,
   loading,
   onChangeContent,
   onSubmitComment,
   themeMode
}) => {

   // render
   return (
      <Dialog
         as="div"
         className={`${themeMode} fixed z-50 inset-0 overflow-y-auto
            sm:text-sm text-xs text-default`}
         open={isOpen}
         onClose={() => {
            setIsOpen(false)
            setShowModal('comment')
         }}
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
                  sm:h-112 h-80 sm:p-4 p-2 overflow-hidden
                  align-middle transition-all transform bg-default rounded-2xl"
            >
               {/* close button */}
               <button
                  onClick={() => setIsOpen(false)}
                  className="button absolute z-40 origin-top-right top-2 right-2
                  rounded-full text-icon p-1 hover-active-gray bg-default"
               >
                  <XIcon className="sm:h-5 h-4" />
               </button>

               {/* modal to comment */}
               {
                  showModal === 'comment' &&
                  <div className="h-full w-full flex flex-col items-start p-2 sm:space-y-3 space-y-2">
                     {/* post to comment */}
                     <UserItem
                        profilePhoto={post.user.profilePhoto}
                        fullname={post.user.fullname}
                        username={post.user.username}
                     />
                     <div className="flex sm:h-24 h-20">
                        <div className="h-full px-4 sm:pl-6">
                           <div className="h-full border-r border-gray-500 border-opacity-60"></div>
                        </div>
                        {
                           post.content !== ''
                              ? <div className="overflow-auto overscroll-contain pr-2">
                                 <p className="text-left">{post.content}</p>
                              </div>
                              : <img
                                 src={post.images[0]} alt="postimg"
                                 className="h-full sm:w-2/5 w-1/2 rounded-md object-cover"
                              />
                        }
                     </div>

                     {/* comment for user */}
                     <UserItem
                        profilePhoto={userAuth.profilePhoto}
                        fullname={userAuth.fullname}
                        username={userAuth.username}
                     />
                     <textarea
                        onChange={onChangeContent} value={values.content}
                        maxLength="500" placeholder="Write your comment"
                        className="input-text h-32 w-full sm:pl-10 pl-8 pr-2
                        sm:text-base border-none focus:border-none resize-none"
                     />

                     {/* comment button */}
                     <button
                        onClick={onSubmitComment}
                        disabled={values.content === '' ? true : false}
                        className={`${values.content === '' && 'opacity-60'}
                        button button-blue sm:py-2 py-1 rounded-full
                        ml-auto sm:w-24 w-20 flex items-center justify-center`}
                     >
                        {
                           loading
                              ? <LoadingIcon className="animate-spin sm:h-5 h-4" viewBox="0 0 24 24" />
                              : 'Comment'
                        }
                     </button>
                  </div>
               }

               {/* modal message */}
               {
                  showModal === 'message' &&
                  <ModalMessage
                     errorMessage={error}
                     successMessage='Successfull Comment'
                     setShowModal={setShowModal}
                     toShowModal='comment'
                  />
               }

            </div>
         </div>
      </Dialog>
   )
}

// state mapping to pass properties to component
const mapStateToProps = (state) => ({
   themeMode: state.themeState.themeMode
})

// export component
export default connect(mapStateToProps)(ModalComment);