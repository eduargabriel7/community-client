// imported modules
import themeActions from 'redux/theme/themeActions';
import {
   HomeIcon,
   UserIcon,
   MoonIcon,
   SunIcon
} from "@heroicons/react/solid";

// create component
const NavBottom = ({ history, location, userAuth, themeMode }) => {

   // render
   return (
      <nav className="w-full bottom-0 left-0 p-2 fixed overflow-hidden z-50 bg-default sm:hidden">
         <div
            className="h-11 flex items-center justify-around
            bg-paper rounded-md text-icon"
         >
            <HomeIcon
               onClick={() => history.push('/')}
               className={`button h-9 p-2 rounded-full hover-active-gray
               ${location.pathname === '/' && 'text-primary'}`}
            />
            <UserIcon
               onClick={() => history.push(`/${userAuth.username}`)}
               className={`button h-9 p-2 rounded-full hover-active-gray
               ${location.pathname === `/${userAuth.username}` && 'text-primary'}`}
            />
            {
               themeMode === 'light' ? (
                  <MoonIcon
                     className="button h-9 p-2 rounded-full hover-active-gray"
                     onClick={themeActions.darkTheme}
                  />
               ) : (
                  <SunIcon
                     className="button h-9 p-2 rounded-full hover-active-gray"
                     onClick={themeActions.lightTheme}
                  />
               )
            }
         </div>
      </nav>
   )
}

// export component
export default NavBottom;
