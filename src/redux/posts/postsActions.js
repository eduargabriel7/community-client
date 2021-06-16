// imported modules
import store from 'redux/store';

// create posts actions
const postsActions = {
     redux_getPost: (post) => {
          store.dispatch({
               type: 'GET_POST',
               payload: post
          })
     },
     redux_likePost: (postId) => {
          store.dispatch({
               type: 'LIKE_POST',
               payload: postId
          })
     }
}

// export module
export default postsActions;