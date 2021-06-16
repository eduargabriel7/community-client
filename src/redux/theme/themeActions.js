// imported modules
import store from '../store';

// actions
const themeActions = {
     lightTheme: () => {
          store.dispatch({
               type: 'LIGHT_THEME',
               payload: 'light'
          })
          localStorage.setItem('theme', 'light');
     },
     darkTheme: () => {
          store.dispatch({
               type: 'DARK_THEME',
               payload: 'dark'
          })
          localStorage.setItem('theme', 'dark');
     }
}

// export module
export default themeActions;