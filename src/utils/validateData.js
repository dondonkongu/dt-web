/**
 * kiem tra mat khau:
At least one uppercase letter
At least one lowercase letter
At least one digit
At least one special symbol
should be more than 4 character
 * @param {*} pw 
 * @returns 
 */
export const validatePassword = (pw)=>{

    return /[A-Z]/       .test(pw) &&
           /[a-z]/       .test(pw) &&
           /[0-9]/       .test(pw) &&
           /[^A-Za-z0-9]/.test(pw) &&
           pw.length > 4;

}
// /**
//  * kiem tra username:
//  chi chua chu cai thuong, chu cai hoac so
//  * @param {*} username 
//  * @returns 
//  */
// export const onValidUsername = (username) => {
//     const usernameRegex = /^[a-z0-9_.]+$/
//     return usernameRegex.test(username)
//   }
/**
 * kiem tra password va re-password
 */


/**
 * kiem tra dinh dang email
 * @param {*} email 
 * @returns 
 */
export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
export const checkRePassword = (password, rePassword) => {
    return password === rePassword;
  }  