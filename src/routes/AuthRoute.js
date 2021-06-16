// imported modules
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// create authentication route
const AuthRoute = ({ userAuth, component: Component, ...rest }) => {

     // render
     return (
          <Route
               {...rest}
               render={(props) => (
                    userAuth ? (
                         <Redirect
                              to='/'
                         />
                    ) : (
                         <Component {...props} />
                    )
               )}
          />
     )
}

// state mapping to pass properties to component
const mapStateToProps = (state) => ({
     userAuth: state.userState.userAuth
})

// export component
export default connect(mapStateToProps)(AuthRoute);
