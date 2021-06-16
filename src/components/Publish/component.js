// imported modules
import ModalPublish from 'components/Modal/ModalPublish';
import { PencilIcon } from '@heroicons/react/solid';

// create component
const PublishComponent = ({
   isOpen,
   setIsOpen,
   showModal,
   setShowModal,
   values,
   setValues,
   setFile,
   onChangeFile,
   onChangeContent,
   onSubmitPub,
   isLoading,
   error
}) => {

   // render
   return (
      <div>

         {/* publish button */}
         <div
            className="flex items-center justify-center space-x-2 w-full xl:px-2 px-1"
         >
            <PencilIcon
               onClick={() => setIsOpen(true)}
               className="button h-11 rounded-full p-3 hover-blue active-blue"
            />
            <button
               onClick={() => setIsOpen(true)}
               className="hidden xl:flex flex-grow justify-center button text-xl font-bold
               hover-blue active-blue rounded-full py-2 font-raleway tracking-wider"
            >
               Publish
            </button>
         </div>

         {/* modal to publish */}
         <ModalPublish
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            showModal={showModal}
            setShowModal={setShowModal}
            values={values}
            setValues={setValues}
            setFile={setFile}
            onChangeFile={onChangeFile}
            onChangeContent={onChangeContent}
            onSubmitPub={onSubmitPub}
            isLoading={isLoading}
            error={error}
         />

      </div >
   )
}

// export component
export default PublishComponent;
