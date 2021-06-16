import React from 'react'

// create component
const EditAbout = ({ setShowPaper, getUser, values, setValues }) => {

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
               setShowPaper('pictures');
            }}
            className="absolute button origin-top-left
            sm:top-3 sm:right-3 top-2 left-2
            py-1 px-2 rounded-3xl border-2 border-opacity-60
            border-blue-600 font-semibold hover-active-blue"
         >
            Pictures
         </button>

         {/* user about */}
         <form className="w-full h-full flex flex-col justify-center lg:p-8 p-4">
            <div className="flex flex-col items-start h-full">
               <p className="p-1 font-semibold">About You</p>
               <textarea
                  onChange={onChangeText} maxLength="250"
                  className="input-text w-full h-full"
                  name="about" placeholder={getUser.about}
                  value={values.about}
               />
            </div>
         </form>
      </>
   )
}

// export component
export default EditAbout
