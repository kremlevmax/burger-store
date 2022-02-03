import { auth } from "../../../firebase";

const makeRequest = async (email, password) => {
  try {
    console.log(email);
    //const response = await auth.createUserWithEmailAndPassword(email, password);
  } catch (err) {
    console.log(err);
  }
};

export const signInUser = (email, password) => {
  makeRequest(email, password);
};
//return auth.createUserWithEmailAndPassword("email@email.com", "password");

// return async () => {
//   const sendSignInRequest = async () => {
//     const response = await fetch(
//       "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkDPtv28NKNnAxKYN_RFTG36lp3-IraAE",
//       {
//         method: "POST",
//         body: JSON.stringify({
//           email: "s111u333per7773@GMAIL.COM",
//           password: "12345TREWQ!asd",
//           returnSecureToken: true,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     ).then((res) => {
//       console.log(res);
//       return res;
//     });

//     return response;
//};
