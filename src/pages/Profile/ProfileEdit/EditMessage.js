// icons
import { ChevronLeftIcon } from '@heroicons/react/outline';

// create component
const EditMessage = ({
   setShowPaper,
   error
}) => {

   // render
   return (
      <div className="h-full w-full flex items-center justify-center">
         {
            error ? (
               <p className="sm:text-lg font-semibold text-red-600">{error}</p>
            ) : (
               <p className="sm:text-lg font-semibold text-green-600">
                  changes were saved successfully
               </p>
            )
         }
      </div>
   )
}

// export component
export default EditMessage;
