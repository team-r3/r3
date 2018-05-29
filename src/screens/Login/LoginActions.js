/*
 * Export action constants
 */
export const LOGIN_SIGNIN = 'LOGIN_SIGNIN'
export const LOGIN_SIGNOUT = 'LOGIN_SIGNOUT'

/*
 * Export sync action creators
 */

// Update the text search to a new value
export function userLogin () {
  return { type: LOGIN_SIGNIN }
}

// Clear the text search
export function userLogout () {
  return { type: LOGIN_SIGNOUT }
}

// // send login request and handle response
// export function doLogin () {
//   return (dispatch) => {
//     return callApi('login') //TODO password,user
//       .then(res => dispatch(userLogin())) //TODO check response result
//   }
// }
