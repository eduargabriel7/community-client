
// icons
import { CameraIcon, PhotographIcon } from '@heroicons/react/outline';

// create component
const EditPictures = ({
   setShowPaper,
   values,
   setValues,
   files,
   setFiles,
}) => {

   // on change picture
   const onChangePicture = (event) => {
      if (event.target.files[0]) {
         setFiles({
            ...files,
            [event.target.name + 'File']: event.target.files[0]
         })
         setValues({
            ...values,
            [event.target.name]: URL.createObjectURL(event.target.files[0])
         })
      }
   }

   // render
   return (
      <>
         <button
            onClick={() => {
               setShowPaper('info')
            }}
            className="absolute button origin-top-left
            sm:top-3 sm:right-3 top-2 left-2
            py-1 px-2 rounded-3xl border-2 border-opacity-60
            border-blue-600 font-semibold hover-active-blue"
         >
            Profile Info
         </button>

         {/* form pictures */}
         <form className="relative flex flex-col justify-center h-full">

            {/* cover photo */}
            <div
               className="w-full rounded-md bg-paper lg:h-44 sm:h-32 h-24
               flex items-center justify-center bg-cover bg-center bg-no-repeat
               sm:mb-10 mb-6"
               style={{
                  backgroundImage: `url(${values.coverPhoto !== '' && values.coverPhoto})`
               }}
            >
               <label
                  className="button bg-gray-600 bg-opacity-50 rounded-full p-1 hover-blue 
                     active-blue text-gray-200"
                  htmlFor="coverPhoto"
               >
                  <PhotographIcon className="sm:h-8 h-4" />
               </label>
               <input
                  onChange={onChangePicture}
                  className="hidden"
                  name="coverPhoto"
                  id="coverPhoto"
                  type="file"
                  accept="image/*"
               />
            </div>

            {/* profile photo */}
            <div
               className="absolute origin-top-left 
               lg:top-28 top-20 sm:left-4 left-2 bg-default
               rounded-full sm:p-2 p-1"
            >
               <div
                  className="bg-paper rounded-full
                  bg-cover bg-center bg-no-repeat 
                  lg:h-40 lg:w-40 sm:h-28 sm:w-28 h-16 w-16
                  flex items-center justify-center"
                  style={{
                     backgroundImage: `url(${values.profilePhoto !== '' && values.profilePhoto})`
                  }}
               >
                  <label
                     className="button bg-gray-600 bg-opacity-50 rounded-full p-1 hover-blue 
                     active-blue text-gray-200"
                     htmlFor="profilePhoto"
                  >
                     <CameraIcon className="sm:h-8 h-4" />
                  </label>
                  <input
                     onChange={onChangePicture}
                     className="hidden"
                     name="profilePhoto"
                     id="profilePhoto"
                     type="file"
                     accept="image/*"
                  />
               </div>
            </div>
         </form>
      </>
   )
}

// export component
export default EditPictures;
