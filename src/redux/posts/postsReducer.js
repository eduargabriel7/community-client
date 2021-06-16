// imported modules
import postsState from './postsState';

// create posts reducer
const postsReducer = (state = postsState, { type, payload }) => {
     switch (type) {
          case 'GET_POST':
               return {
                    ...state,
                    getPost: payload
               }
          case 'LIKE_POST':
               return {
                    ...state,
                    likePost: payload
               }
          default:
               return state;
     }
}

// export module
export default postsReducer;