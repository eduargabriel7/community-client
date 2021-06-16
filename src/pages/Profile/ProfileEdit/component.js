// imported modules
import { useState } from 'react';
import { connect } from 'react-redux';

// components
import { Dialog } from '@headlessui/react'
import EditPictures from './EditPictures';
import EditInfo from './EditInfo';
import EditAbout from './EditAbout';
import EditMessage from './EditMessage';

// icons
import { XIcon } from '@heroicons/react/outline';
import LoadingIcon from 'assets/LoadingIcon'

// create component
const ProfileEditComponent = ({
   getUser,
   themeMode,
   showPaper,
   setShowPaper,
   values,
   setValues,
   files,
   setFiles,
   onSubmitChanges,
   isLoading,
   error
}) => {

   // state component
   const [isOpen, setIsOpen] = useState(false);

   // render
   return (
      <>
         <button
            onClick={() => setIsOpen(true)}
            className="absolute button origin-top-right lg:top-60 sm:top-48 top-32
            sm:right-4 right-2 sm:py-2 py-1 px-2 rounded-3xl border-2 border-opacity-60
            border-blue-600 font-semibold hover-active-blue sm:w-32 w-28
            flex items-center justify-center"
         >
            Set up profile
         </button>

         <Dialog
            as="div"
            className={`${themeMode} fixed z-50 inset-0 overflow-y-auto
            sm:text-sm text-xs text-default`}
            open={isOpen}
            onClose={() => {
               setIsOpen(false)
               setShowPaper('pictures')
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
                  lg:h-96 sm:h-80 h-64 sm:py-14 py-10 px-2 overflow-hidden
                  align-middle transition-all transform bg-default rounded-2xl"
               >
                  {/* close button */}
                  <button
                     onClick={() => {
                        setIsOpen(false)
                        setShowPaper('pictures')
                     }}
                     className="button absolute z-40 origin-top-right top-2 right-2
                     rounded-full text-icon p-1 hover-active-gray bg-default"
                  >
                     <XIcon className="sm:h-5 h-4" />
                  </button>

                  {/* edit pictures */}
                  {
                     showPaper === 'pictures' && <EditPictures
                        getUser={getUser}
                        setShowPaper={setShowPaper}
                        values={values}
                        setValues={setValues}
                        files={files}
                        setFiles={setFiles}
                     />
                  }

                  {/* edit info */}
                  {
                     showPaper === 'info' && <EditInfo
                        getUser={getUser}
                        setShowPaper={setShowPaper}
                        values={values}
                        setValues={setValues}
                     />
                  }

                  {/* edit about */}
                  {
                     showPaper === 'about' && <EditAbout
                        getUser={getUser}
                        setShowPaper={setShowPaper}
                        values={values}
                        setValues={setValues}
                     />
                  }

                  {/* message paper */}
                  {
                     showPaper === 'message' && <EditMessage
                        setShowPaper={setShowPaper}
                        error={error}
                     />
                  }

                  {/* submit button */}
                  {
                     showPaper !== 'message' &&
                     <button
                        onClick={onSubmitChanges}
                        className="absolute origin-bottom-right 
                        sm:bottom-3 sm:right-3 bottom-2 right-2
                        button button-blue sm:py-2 py-1 rounded-full
                        ml-auto sm:w-20 w-16 flex items-center justify-center"
                     >
                        {
                           isLoading
                              ? <LoadingIcon className="animate-spin sm:h-5 h-4" viewBox="0 0 24 24" />
                              : 'Save'
                        }
                     </button>
                  }
               </div>
            </div>
         </Dialog>
      </>
   )
}

// state mapping to pass properties to component
const mapStateToProps = (state) => ({
   themeMode: state.themeState.themeMode
})

// export component
export default connect(mapStateToProps)(ProfileEditComponent);
