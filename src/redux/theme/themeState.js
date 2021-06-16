// theme in localStorage storage
const themeLocalStorage = localStorage.getItem('theme');

// create theme state
const themeState = {
     themeMode: themeLocalStorage ? themeLocalStorage : 'dark'
}

// export module
export default themeState;