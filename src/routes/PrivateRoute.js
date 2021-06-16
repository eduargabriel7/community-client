// imported modules
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// create authentication route
const PrivateRoute = ({ userAuth, component: Component, ...rest }) => {

     // render
     return (
          <Route
               {...rest}
               render={(props) => (
                    userAuth ? (
                         <Component {...props} />
                    ) : (
                         <Redirect
                              to='/login'
                         />
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
export default connect(mapStateToProps)(PrivateRoute);