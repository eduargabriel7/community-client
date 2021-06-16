// imported modules
import themeActions from 'redux/theme/themeActions';
import NavLeftItem from './NavLeftItem';

// components
import Publish from 'components/Publish';

// hero icons
import {
   HomeIcon,
   UserIcon,
   MoonIcon,
   SunIcon
} from "@heroicons/react/solid";

// create component
const NavLeft = ({ userAuth, themeMode, history, location }) => {

   // render
   return (
      <div
         className="hidden sm:flex flex-col space-y-10 text-icon fixed 
         mb-auto w-16 xl:w-64 pt-24"
      >
         <div
            className="flex flex-col space-y-3 bg-paper rounded-3xl py-4 w-full 
            font-raleway"
         >
            {/* home */}
            <NavLeftItem
               Icon={HomeIcon}
               title="Home"
               onClick={() => history.push('/')}
               className={location.pathname === '/' ? 'text-primary' : ''}
            />

            {/* profile user */}
            <NavLeftItem
               Icon={UserIcon}
               title="Profile"
               onClick={() => history.push('/' + userAuth.username)}
               className={location.pathname === '/' + userAuth.username ? 'text-primary' : ''}
            />
            {
               themeMode === 'light' ? (
                  <NavLeftItem
                     Icon={MoonIcon}
                     onClick={themeActions.darkTheme}
                     title="Dark"
                  />
               ) : (
                  <NavLeftItem
                     Icon={SunIcon}
                     onClick={themeActions.lightTheme}
                     title="Light"
                  />
               )
            }
         </div>

         {/* publish button */}
         <div
            className="flex flex-col space-y-3 bg-paper rounded-3xl py-4 w-full"
         >
            <Publish />
         </div>

      </div>
   )
}

// export component
export default NavLeft;
