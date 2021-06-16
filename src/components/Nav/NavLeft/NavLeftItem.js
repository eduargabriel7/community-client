// create component
const NavLeftItem = ({ Icon, title, className, onClick }) => {

   // render
   return (
      <div
         className="flex items-center justify-center space-x-2 w-full xl:px-2 px-1"
      >
         <Icon
            onClick={onClick}
            className={`button h-11 p-3 active-blue hover-blue rounded-full ${className}`}
         />
         <button
            onClick={onClick}
            className={`button hidden xl:flex flex-grow 
            items-center justify-center text-xl rounded-full
            hover-blue active-blue tracking-wider
            font-bold w-3/4 ml-2 py-2 ${className}`}
         >
            {title}
         </button>
      </div>
   )
}

// export component
export default NavLeftItem;
