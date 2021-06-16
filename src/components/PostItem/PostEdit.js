// imported modules
import { useState, useEffect } from 'react';
import { PencilAltIcon } from '@heroicons/react/outline';
import ModalPublish from 'components/Modal/ModalPublish';
import uploadImage from 'util/uploadImage';
import checkImage from 'util/checkImage';
import { useMutation } from '@apollo/client';
import UPDATE_POST from 'graphql/posts/postsMutation/updatePost';

// create component
const PostEdit = ({ post }) => {

   // state component
   const [showModal, setShowModal] = useState('publish');
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const [file, setFile] = useState(null);
   const [values, setValues] = useState({
      content: post.content,
      imageUrl: post.images[0] ? post.images[0] : ''
   })

   // on change file
   const onChangeFile = (event) => {
      if (event.target.files[0]) {
         setFile(event.target.files[0]);
         setValues({ ...values, imageUrl: URL.createObjectURL(event.target.files[0]) });
      }
   }

   // on change content
   const onChangeContent = event => {
      setValues({ ...values, content: event.target.value });
   }

   // graphql mutation
   const [updatePost, { loading }] = useMutation(UPDATE_POST, {
      update: () => {
         setFile(null);
         setShowModal('message');
      },
      onError: (error) => {
         console.log(error);
         setError(error.message)
         setShowModal('message')
      }
   })

   // on submit publication
   const onSubmitPub = async event => {
      event.preventDefault();
      // check files
      const imageChecked = await checkImage(file, setError);
      // on error
      if (error) {
         setShowModal('message')
      }
      else {
         // upload image
         const imageUploadedUrl = await uploadImage(imageChecked, setIsLoading);
         // run mutation
         await updatePost({
            variables: {
               ...values,
               postId: post.id,
               images: [imageUploadedUrl !== '' ? imageUploadedUrl : values.imageUrl]
            }
         })
      }
   }

   // effect after rendering
   useEffect(() => {
      if (loading) { setIsLoading(true) }
      else { setIsLoading(false) }
   }, [loading])

   // render
   return (
      <>
         <button
            onClick={() => setIsOpen(true)}
            className="button p-2 flex items-center space-x-2
            hover-active-gray"
         >
            <PencilAltIcon className="h-4" />
            <p>Edit</p>
         </button>

         <ModalPublish
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            showModal={showModal}
            setShowModal={setShowModal}
            values={values}
            setValues={setValues}
            setFile={setFile}
            isLoading={isLoading}
            error={error}
            onChangeContent={onChangeContent}
            onChangeFile={onChangeFile}
            onSubmitPub={onSubmitPub}
         />
      </>
   )
}

// export component
export default PostEdit;