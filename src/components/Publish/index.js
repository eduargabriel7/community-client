// imported modules
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import uploadImage from 'util/uploadImage';
import checkImage from 'util/checkImage';
import { useMutation } from '@apollo/client';
import CREATE_POST from 'graphql/posts/postsMutation/createPost';

// components
import PublishComponent from './component';

// create component
const Publish = ({ userAuth }) => {

   // state component
   const [showModal, setShowModal] = useState('publish');
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const [file, setFile] = useState(null);
   const [values, setValues] = useState({ content: '', imageUrl: '' })

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
   const [createPost, { loading }] = useMutation(CREATE_POST, {
      update: () => {
         setValues({ content: '', imageUrl: '' });
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
         console.log(values);
         // upload image
         const imageURL = await uploadImage(imageChecked, setIsLoading);
         // run mutation
         await createPost({
            variables: {
               ...values,
               userId: userAuth.id,
               images: [imageURL]
            }
         })
      }
   }

   // when rendering
   useEffect(() => {
      if (loading) { setIsLoading(true) }
      else { setIsLoading(false) }
   }, [loading])

   // render
   return (
      <PublishComponent
         isOpen={isOpen}
         setIsOpen={setIsOpen}
         values={values}
         setValues={setValues}
         setFile={setFile}
         onChangeFile={onChangeFile}
         onChangeContent={onChangeContent}
         onSubmitPub={onSubmitPub}
         showModal={showModal}
         setShowModal={setShowModal}
         isLoading={isLoading}
         error={error}
      />
   )
}


// state mapping to pass properties to component
const mapStateToProps = (state) => ({
   userAuth: state.userState.userAuth,
   themeMode: state.themeState.themeMode
})

// export component
export default connect(mapStateToProps)(Publish);
