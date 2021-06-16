// imported modules
import store from 'redux/store';

// create user actions
const userActions = {
     login: (userAuth) => {
          store.dispatch({
               type: 'LOGIN',
               payload: userAuth
          })
          localStorage.setItem('userAuth', JSON.stringify(userAuth))
     },
     logout: () => {
          store.dispatch({
               type: 'LOGOUT',
               payload: null
          })
          localStorage.removeItem('userAuth')
     }
}

// export module
export default userActions;