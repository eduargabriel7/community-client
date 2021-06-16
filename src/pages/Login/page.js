// icons
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import LoadingIcon from 'assets/LoadingIcon';

// create component
const LoginPage = ({
   values,
   onChangeValues,
   onSubmitForm,
   loading,
   errors
}) => {

   // hooks react router
   const history = useHistory();

   // state component
   const [isDisabled, setIsDisabled] = useState(true)
   const [showPassword, setShowPassword] = useState(false)
   const [isFocusedPassword, setIsFocusedPassword] = useState(false)

   // effect after rendering
   useEffect(() => {
      setIsDisabled(
         values.email === '' ||
         values.password === ''
      )
   }, [values])

   // render
   return (
      <div
         className="lg:w-104 w-full lg:bg-paper lg:py-8 py-4 lg:px-8 px-4
         flex flex-col items-center space-y-5 md:rounded-3xl rounded-md"
      >
         <span className="sm:text-2xl text-xl font-semibold">
            Welcome
         </span>

         {/* login form */}
         <form
            autoComplete="off"
            onSubmit={onSubmitForm}
            className="flex flex-col items-center space-y-6 w-full max-w-xs"
         >
            {/* input email */}
            <input
               name="email" type="text"
               placeholder="email" value={values.email}
               onChange={onChangeValues}
               className={`input-text w-full p-2 rounded-xl
                  ${errors?.email ? 'border-red-500' : ''}`}
            />

            {/* input password */}
            <div
               className={`input-text w-full flex items-center rounded-xl
                  ${errors?.password && 'border-red-500'}
                  ${isFocusedPassword && 'border-blue-800'}`}
            >
               <input
                  name="password" type={showPassword ? 'text' : 'password'}
                  placeholder="password" value={values.password}
                  onFocus={() => setIsFocusedPassword(true)}
                  onBlur={() => setIsFocusedPassword(false)}
                  onChange={onChangeValues}
                  className="w-full p-2 bg-transparent outline-none placeholder-gray-500
                  font-medium"
               />
               {
                  values.password !== '' &&
                  <p
                     onClick={() => setShowPassword(showPassword ? false : true)}
                     className="p-2 cursor-pointer text-gray-500"
                  >
                     {showPassword ? 'Hide' : 'Show'}
                  </p>
               }
            </div>

            {/* login button */}
            <button
               type="submit"
               disabled={isDisabled}
               className={`${isDisabled && 'opacity-60'}
                  button button-blue w-full p-2 rounded-xl
                  flex items-center justify-center`}
            >
               {
                  loading ?
                     <LoadingIcon className="sm:h-5 h-4 text-gray-200 animate-spin" />
                     : 'Login'
               }
            </button>
         </form>

         {/* link to register */}
         <div className="flex items-center space-x-2">
            <p>You do not have an account ?</p>
            <p
               onClick={() => history.push('/register')}
               className="whitespace-nowrap text-blue-600 cursor-pointer"
            >
               Sign up
            </p>
         </div>

         {/* error message */}
         {
            Object.values(errors).map(message => (
               <p
                  key={message}
                  className="text-red-600 flex items-center"
               >
                  <ExclamationCircleIcon className="icon" />
                  {message}
               </p>
            ))
         }
      </div>
   )
}

// export component
export default LoginPage;