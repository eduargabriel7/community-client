// imported modules
import { Menu } from '@headlessui/react';
import { useHistory } from 'react-router-dom';
import userActions from 'redux/user/userActions';
import avatar from 'assets/avatar.png';
import {
   LogoutIcon,
   UserIcon
} from '@heroicons/react/outline';

// create component
const MenuUser = ({ userAuth }) => {

   // hooks
   const history = useHistory()

   // render
   return (
      <Menu as="div" className="relative">
         <Menu.Button className="flex items-center focus:outline-none">
            {
               userAuth ? (
                  <>
                     <div className="rounded-full sm:h-9 sm:w-9 h-7 w-7 md:mx-3 mx-2">
                        <img
                           src={userAuth.profilePhoto !== '' ? userAuth.profilePhoto : avatar}
                           alt="avatar"
                           className="object-cover rounded-full h-full w-full"
                        />
                     </div>
                     <h1 className="hidden md:flex pr-2 font-semibold text-icon">{userAuth.username}</h1>
                  </>
               ) : (
                  <UserIcon className="icon icon-button" />
               )
            }
         </Menu.Button>
         <Menu.Items
            className="flex flex-col absolute origin-top-right sm:top-12 top-10 right-0
            shadow z-50 overflow-hidden bg-default rounded-md
            border border-gray-500 border-opacity-20 w-24"
         >
            <Menu.Item
               as="div"
               onClick={() => history.push(`/${userAuth.username}`)}
               className="button p-2 flex items-center space-x-2 hover-active-gray"
            >
               <UserIcon className="h-4" />
               <p>Profile</p>
            </Menu.Item>
            <Menu.Item
               as="div"
               onClick={() => {
                  userActions.logout();
                  history.push('/');
               }}
               className="button p-2 flex items-center space-x-2 hover-active-gray"
            >
               <LogoutIcon className="h-4" />
               <p>Logout</p>
            </Menu.Item>
         </Menu.Items>
      </Menu>
   )
}

// export component
export default MenuUser;
