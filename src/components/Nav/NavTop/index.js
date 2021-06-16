// components
import logo from './icons/community-logo-1.svg'
import MenuUser from './MenuUser';
import Search from './Search';

// create component
const NavTop = ({ userAuth, history }) => {

   // render
   return (
      <nav className="w-full top-0 left-0 sm:pb-4 bg-default fixed z-40">
         <div className="max-w-screen-xl mx-auto xl:px-4 px-2 h-16 sm:h-20">
            <div
               className="h-full w-full flex items-center justify-between"
            >

               {/* left */}
               <div className="hidden sm:flex items-center space-x-2 w-1/4 font-raleway">
                  <img className="h-10 ml-2" src={logo} alt="logo" />
                  <span className="hidden lg:flex text-lg tracking-wider text-icon font-medium">
                     COMMUNITY
                  </span>
               </div>

               {/* center */}
               <div className="sm:w-2/4 lg:mx-8 w-full flex">
                  {/* search */}
                  {
                     userAuth && <Search history={history} />
                  }
               </div>

               {/* right */}
               <div className="sm:w-1/4 flex justify-end ml-1">
                  {/* menu user */}
                  <MenuUser userAuth={userAuth} />
               </div>
            </div>
         </div>
      </nav>
   )
}

// export component
export default NavTop;
