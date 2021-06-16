// imported modules
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

// components
import NavTop from './NavTop';
import NavBottom from './NavBottom';
import NavLeft from './NavLeft';

// create component
const Nav = ({ userAuth, themeMode }) => {

   // hooks
   const history = useHistory();
   const location = useLocation();

   // render
   return (
      <>
         <NavTop
            userAuth={userAuth}
            history={history}
            location={location}
         />
         <NavBottom
            userAuth={userAuth}
            history={history}
            location={location}
            themeMode={themeMode}
         />
         <NavLeft
            userAuth={userAuth}
            themeMode={themeMode}
            history={history}
            location={location}
         />
      </>
   )
}

// state mapping to pass properties to component
const mapStateToProps = (state) => ({
   userAuth: state.userState.userAuth,
   themeMode: state.themeState.themeMode
})

// export component
export default connect(mapStateToProps)(Nav);
