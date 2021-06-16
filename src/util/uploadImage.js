// create upload image function
const uploadImage = async (file, setIsLoading) => {
   if (file) {
      setIsLoading(true)
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'community-app');
      formData.append('cloud_name', 'edugabriel7-apps');
      const res = await fetch(
         'https://api.cloudinary.com/v1_1/edugabriel7-apps/image/upload',
         {
            method: 'POST',
            body: formData
         }
      )
      const data = await res.json();
      return data.url;
   }
   return '';
}

// export module
export default uploadImage;