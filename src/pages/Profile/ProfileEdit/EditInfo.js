
// create component
const EditInfo = ({
   getUser,
   setShowPaper,
   values,
   setValues
}) => {

   // on change input text
   const onChangeText = (event) => {
      setValues({
         ...values,
         [event.target.name]: event.target.value
      })
   }

   // render
   return (
      <>
         <button
            onClick={() => {
               setShowPaper('about');
            }}
            className="absolute button origin-top-left
            sm:top-3 sm:right-3 top-2 left-2
            py-1 px-2 rounded-3xl border-2 border-opacity-60
            border-blue-600 font-semibold hover-active-blue"
         >
            About You
         </button>

         {/* form information profile */}
         <form
            autoComplete="off"
            className="w-full h-full flex flex-col sm:justify-center justify-start
            lg:px-8 sm:px-6 px-2 sm:space-y-2"
         >
            {/* username */}
            <div className="flex flex-col items-start">
               <p className="p-1 font-semibold">User Name</p>
               <input
                  disabled
                  onChange={onChangeText}
                  className="input-text w-full p-1 rounded-md" type="text"
                  name="username" placeholder={getUser.username}
                  value={values.username}
               />
            </div>

            {/* full name */}
            <div className="flex flex-col items-start">
               <p className="p-1 font-semibold">Full Name</p>
               <input
                  onChange={onChangeText}
                  className="input-text w-full p-1 rounded-md" type="text"
                  name="fullname" placeholder={getUser.fullname}
                  value={values.fullname}
               />
            </div>

            {/* user website */}
            <div className="flex flex-col items-start">
               <p className="p-1 font-semibold">Web Site</p>
               <input
                  onChange={onChangeText}
                  className="input-text w-full p-1 rounded-md" type="text"
                  name="website" placeholder={getUser.website}
                  value={values.website}
               />
            </div>
         </form>
      </>
   )
}

// export component
export default EditInfo;
