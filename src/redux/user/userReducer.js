// imported modules
import userState from './userState';

// create user reducer
const userReducer = (state = userState, { type, payload }) => {
     switch (type) {
          case 'LOGIN':
               return {
                    ...state,
                    userAuth: payload
               }
          case 'LOGOUT':
               return {
                    ...state,
                    userAuth: null
               }
          default:
               return state;
     }
}

// export module
export default userReducer;