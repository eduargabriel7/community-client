// imported modules
import { connect } from 'react-redux';
import Nav from 'components/Nav';
import AuthLayout from './AuthLayout';


// create component
const Layout = ({ children, userAuth, themeMode }) => {

   // render
   return (
      <>
         {
            userAuth ? (
               <div
                  className={`${themeMode} h-screen w-full overflow-auto overscroll-contain
                  flex bg-default text-default font-sans sm:text-sm text-xs`}
               >
                  <div
                     className="relative max-w-screen-xl mx-auto w-full 
                     flex px-2"
                  >
                     {/* navigation */}
                     <Nav />

                     {/* pages */}
                     {children}
                  </div>
               </div>
            ) : (
               <div
                  className={`${themeMode} h-screen bg-default w-full
                  flex md:flex-row flex-col 
                  overflow-auto overscroll-contain
                  text-default font-raleway sm:text-sm text-xs`}
               >
                  <AuthLayout themeMode={themeMode}>
                     {/* pages */}
                     {children}
                  </AuthLayout>
               </div>
            )
         }
      </>
   )
}

// state mapping to pass properties to component
const mapStateToProps = (state) => ({
   userAuth: state.userState.userAuth,
   themeMode: state.themeState.themeMode
})

// export component
export default connect(mapStateToProps)(Layout);