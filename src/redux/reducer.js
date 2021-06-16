// imported modules
import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import postsReducer from './posts/postsReducer';
import themeReducer from './theme/themeReducer';

// create root reducer
const reducer = combineReducers({
     userState: userReducer,
     postsState: postsReducer,
     themeState: themeReducer
})

// export root reducer
export default reducer;