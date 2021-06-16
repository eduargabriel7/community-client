// imported modules
import themeActions from 'redux/theme/themeActions';
import communityLogo from 'assets/icons/community-logo-1.svg';
import communityBackground from 'assets/community-background.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
   MoonIcon,
   SunIcon
} from "@heroicons/react/solid";
import GithubIcon from 'assets/GithubIcon';
import LinkedinIcon from 'assets/LinkedinIcon';

// create component
const AuthLayout = ({ children, themeMode }) => {

   // render
   return (
      <>
         <div
            className="relative md:h-full h-2/5 md:w-1/2 w-full
         md:p-4 p-2 pb-0 flex items-center justify-center"
         >
            <div
               className="h-full w-full"
            >
               <LazyLoadImage
                  src={communityBackground} alt="community-background"
                  effect="blur"
                  height="100%"
                  width="100%"
                  className="w-full h-full object-cover md:rounded-3xl rounded-md"
               />
            </div>
            <div
               className="absolute flex items-center space-x-2
                        p-4 rounded-3xl"
            >
               <img className="sm:h-16 h-12 ml-2" src={communityLogo} alt="logo" />
               <span className="flex sm:text-3xl text-lg text-white tracking-wider">
                  COMMUNITY
               </span>
            </div>
         </div>

         <div
            className="relative md:h-screen h-full md:w-1/2 w-full flex flex-col
                     items-center justify-center md:px-4 md:py-16 p-2 pb-14"
         >
            {/* pages */}
            {children}

            {/* auth footer */}
            <div
               className="absolute md:p-4 py-2 origin-bottom-right
                        bottom-0 right-0 w-full flex items-center justify-center 
                        space-x-12 text-icon"
            >
               {
                  themeMode === 'light' ? (
                     <MoonIcon
                        className="md:h-12 h-10 button hover-active-gray p-2 rounded-full"
                        onClick={themeActions.darkTheme}
                     />
                  ) : (
                     <SunIcon
                        className="md:h-12 h-10 button hover-active-gray p-2 rounded-full"
                        onClick={themeActions.lightTheme}
                     />
                  )
               }
               <a
                  href="https://github.com/eduargabriel7"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <GithubIcon
                     className="md:h-12 h-10 button hover-active-gray p-2.5 rounded-full"
                  />
               </a>
               <a
                  href="https://www.linkedin.com/in/eduardo-gabriel-sarmiento/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full button hover-active-gray"
               >
                  <LinkedinIcon
                     className="md:h-12 h-10  p-2.5"
                  />
               </a>
            </div>
         </div>
      </>
   )
}

// export component
export default AuthLayout;
