// user authenticated in local storage
const userLocalStorage = JSON.parse(localStorage.getItem('userAuth'));

// create authentication state
const authState = {
     userAuth: userLocalStorage ? userLocalStorage : null
}

// export module
export default authState;