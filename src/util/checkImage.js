// create check image function
const checkImage = async (file, setError) => {
   if (file) {
      if (
         file.type !== 'image/jpg' &&
         file.type !== 'image/jpeg' &&
         file.type !== 'image/png'
      ) {
         setError('the file must be of type image')
         return null
      }
      else if (
         file.size > 1024 * 1024 * 10
      ) {
         setError('the image must be less than 10 mb')
         return null
      }
      else {
         return file;
      }
   }
   else {
      return null;
   }
}

// export module
export default checkImage;