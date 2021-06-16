// imported modules
import { connect } from 'react-redux';
import { Dialog } from '@headlessui/react';
import {
   XIcon, PhotographIcon, TrashIcon
} from '@heroicons/react/solid';
import ModalMessage from './ModalMessage';
import LoadingIcon from 'assets/LoadingIcon';

// create component
const ModalPublish = ({
   themeMode,
   isOpen,
   setIsOpen,
   showModal,
   setShowModal,
   values,
   setValues,
   setFile,
   error,
   isLoading,
   onChangeContent,
   onChangeFile,
   onSubmitPub,
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
            setShowModal('publish')
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
                  sm:h-96 h-72 sm:p-4 p-2 overflow-hidden
                  align-middle transition-all transform bg-default rounded-2xl"
            >
               {/* close button */}
               <button
                  onClick={() => setIsOpen(false)}
                  className="button absolute z-40 origin-top-right top-2 right-2
                  rounded-full text-icon p-1 hover-active-gray"
               >
                  <XIcon className="sm:h-5 h-4" />
               </button>

               {/* show modal publish */}
               {
                  showModal === 'publish' &&
                  <div
                     className="flex flex-col space-y-2 justify-between h-full w-full pt-4 px-4 pb-2"
                  >
                     {/* text */}
                     <textarea
                        onChange={onChangeContent} value={values.content}
                        maxLength="500" placeholder="Write your post"
                        className="input-text w-full h-full sm:text-lg border-none
                        focus:border-none resize-none"
                     />

                     {/* file */}
                     {
                        values.imageUrl !== '' &&
                        <div className="relative flex h-2/5 w-1/2">
                           <img
                              src={values.imageUrl} alt="publishImage"
                              className="h-full w-full object-cover rounded-lg"
                           />
                           <div className="absolute h-full w-full flex items-center justify-center">
                              <TrashIcon
                                 onClick={() => {
                                    setFile(null)
                                    setValues({ ...values, imageUrl: '' })
                                 }}
                                 className="button sm:h-9 h-8 p-2 rounded-full hover-active-gray
                                 text-gray-200"
                              />
                           </div>
                        </div>
                     }

                     {/* tools */}
                     <div className="flex justify-between items-center">
                        {/* input file */}
                        <label htmlFor="publishPicture">
                           <PhotographIcon
                              className="button hover-active-gray rounded-full sm:h-9 h-8 p-2"
                           />
                        </label>
                        <input
                           onChange={onChangeFile}
                           id="publishPicture" type="file" accept="image/*" className="hidden"
                        />
                        {/* submit */}
                        <button
                           disabled={values.content === '' && values.imageUrl === '' ? true : false}
                           onClick={onSubmitPub}
                           className={`button button-blue sm:py-2 py-1 rounded-full
                           ml-auto sm:w-24 w-20 flex items-center justify-center
                           ${values.content === '' && values.imageUrl === '' && 'opacity-60'}`}
                        >
                           {
                              isLoading
                                 ? <LoadingIcon className="animate-spin sm:h-5 h-4" viewBox="0 0 24 24" />
                                 : 'Publish'
                           }
                        </button>
                     </div>
                  </div>
               }

               {/* show modal error */}
               {
                  showModal === 'message' &&
                  <ModalMessage
                     errorMessage={error}
                     successMessage='Successfull post'
                     setShowModal={setShowModal}
                     toShowModal='publish'
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
export default connect(mapStateToProps)(ModalPublish);