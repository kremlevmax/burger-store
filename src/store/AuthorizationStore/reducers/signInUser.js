export const signInUser = (email, password) => {
  return async (dispatch) => {
    const sendSignInRequest = async () => {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkDPtv28NKNnAxKYN_RFTG36lp3-IraAE",
        {
          method: "POST",
          body: JSON.stringify({
            email: "QWERTY12345@GMAIL.COM",
            password: "12345TREWQ!asd",
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        console.log(res);
        return res;
      });

      return response;
    };

    try {
      const respnseStatus = await sendSignInRequest();
    } catch (error) {
      console.log(error);
    }
  };
};
