// imported modules
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import uploadImage from 'util/uploadImage';
import checkImage from 'util/checkImage';
import userActions from 'redux/user/userActions';

// apollo client
import { useMutation } from '@apollo/client';
import UPDATE_USER from 'graphql/users/mutations/update';

// components
import ProfileEditComponent from './component';

// create component
const ProfileEdit = ({ getUser }) => {

   // state component
   const [showPaper, setShowPaper] = useState('pictures')
   const [error, setError] = useState(null)
   const [isLoading, setIsLoading] = useState(false)
   const [files, setFiles] = useState({
      profilePhotoFile: null,
      coverPhotoFile: null,
   })
   const [values, setValues] = useState({
      profilePhoto: getUser.profilePhoto,
      coverPhoto: getUser.coverPhoto,
      username: getUser.username,
      fullname: getUser.fullname,
      about: getUser.about,
      website: getUser.website
   })

   // hooks
   const history = useHistory();

   // hook apollo client
   const [updateUser, { loading }] = useMutation(UPDATE_USER, {
      update: (_, { data }) => {
         userActions.login(data.updateUser);
         setShowPaper('message');
         setTimeout(() => {
            history.push('/' + data.updateUser.username)
         }, 500);
      },
      onError: (error) => {
         console.log(error);
         setError(error.message)
         setShowPaper('message')
      }
   })

   // on submit changes
   const onSubmitChanges = async (event) => {
      event.preventDefault();
      // check values
      const profilePhotoChecked = await checkImage(files.profilePhotoFile, setError);
      const coverPhotoChecked = await checkImage(files.coverPhotoFile, setError);
      // on error
      if (error) {
         setShowPaper('message')
      }
      else {
         // upload image
         const profilePhotoURL = await uploadImage(profilePhotoChecked, setIsLoading);
         const coverPhotoURL = await uploadImage(coverPhotoChecked, setIsLoading);
         // run mutation
         await updateUser({
            variables: {
               ...values,
               id: getUser.id,
               profilePhoto: profilePhotoURL !== '' ? profilePhotoURL : getUser.profilePhoto,
               coverPhoto: coverPhotoURL !== '' ? coverPhotoURL : getUser.coverPhoto
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
      <ProfileEditComponent
         getUser={getUser}
         showPaper={showPaper}
         setShowPaper={setShowPaper}
         values={values}
         setValues={setValues}
         files={files}
         setFiles={setFiles}
         onSubmitChanges={onSubmitChanges}
         setError={setError}
         error={error}
         isLoading={isLoading}
      />
   )
}

// export component
export default ProfileEdit;

