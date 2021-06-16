// imported modules
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_USERS } from 'graphql/users/usersQuery';
import avatar from 'assets/avatar.png';

//icons
import {
   SearchIcon
} from "@heroicons/react/solid";

// create component
const Search = ({ history }) => {

   // state component
   const [search, setSearch] = useState('');
   const [usersFound, setUsersFound] = useState([]);
   const [openSearch, setOpenSearch] = useState(false);

   // hook apollo client
   const { data, refetch } = useQuery(SEARCH_USERS, {
      variables: { username: search }
   });

   // effect after rendering
   useEffect(() => {
      refetch()
      if (data) {
         setUsersFound(data.searchUsers)
      }
   }, [data, refetch, usersFound])

   // render
   return (
      <div className="relative w-full ml-1">
         <div
            className={`${openSearch && 'border border-opacity-70 border-blue-600'}
            flex items-center bg-paper rounded-3xl`}
         >
            <SearchIcon
               className={`icon text-gray-500
               ${openSearch && 'text-blue-600'}`}
            />
            <input
               onFocus={() => setOpenSearch(true)}
               onBlur={() => setTimeout(() => {
                  setOpenSearch(false);
               }, 200)}
               onChange={(event) => {
                  setSearch(event.target.value)
               }}
               value={search}
               type="text"
               spellCheck="false"
               placeholder="Search"
               className="bg-transparent focus:outline-none w-full group"
            />
         </div>
         <div
            className={`${!openSearch && 'hidden'}
            border border-gray-500 border-opacity-20 max-h-60 overflow-auto overscroll-contain
            flex flex-col space-y-2 absolute origin-top-left sm:top-14 top-12 left-0
            shadow w-full sm:p-2 p-1 z-50 bg-default rounded-md`}
         >
            {
               search !== '' && Object.values(usersFound).length > 0 ? (
                  usersFound.map(user => (
                     <button
                        key={user.username}
                        onClick={() => history.push(`/${user.username}`)}
                        className="button hover:bg-blue-500 hover:bg-opacity-20 rounded-md 
                        flex items-center py-1"
                     >
                        <div className=" sm:h-12 sm:w-12 h-10 w-10 p-2 rounded-full">
                           <img
                              className="object-cover rounded-full h-full w-full"
                              src={user.profilePhoto ? user.profilePhoto : avatar}
                              alt="avatar"
                           />
                        </div>
                        <div className="flex flex-col flex-grow items-start ml-1">
                           <h1 className="font-semibold whitespace-nowrap">{user.fullname}</h1>
                           <h1 className="text-disabled font-sans">@{user.username}</h1>
                        </div>
                     </button>
                  ))
               ) : (
                  <div className="flex items-center justify-center py-2">
                     <p className="">Try searching for people</p>
                  </div>
               )
            }
         </div>
      </div>
   )
}

// export component
export default Search;
