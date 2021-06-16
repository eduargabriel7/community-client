// imported modules
import themeState from './themeState';

// create theme reducer
const themeReducer = (state = themeState, { type, payload }) => {
     switch (type) {
          case 'LIGHT_THEME':
               return {
                    themeMode: payload
               }
          case 'DARK_THEME':
               return {
                    themeMode: payload
               }
          default:
               return state;
     }
}

// export module
export default themeReducer;