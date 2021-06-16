
// create component
const ModalMessage = ({
   errorMessage,
   successMessage,
   setShowModal,
   toShowModal
}) => {

   // render
   return (
      <div className="relative h-full w-full flex items-center justify-center">
         {
            errorMessage
               ? <div className="text-red-500 font-semibold sm:text-lg">
                  {errorMessage}
               </div>
               : <div className="text-green-500 font-semibold sm:text-lg">
                  {successMessage}
               </div>
         }
      </div>
   )
}

// export component
export default ModalMessage
