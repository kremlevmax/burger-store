export const signInUser = (email, password) => {
  return async (dispatch) => {
    const sendSignInRequest = async () => {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDkDPtv28NKNnAxKYN_RFTG36lp3-IraAE",
        {
          method: "POST",
          body: JSON.stringify({ email, password, returnSecureToken: true }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Couldn't log in");
      }

      const respnseStatus = await response.json();
      return respnseStatus;
    };

    try {
      const respnseStatus = await fetchData();
      console.log(respnseStatus);
    } catch (error) {
      console.log(error);
    }
  };
};
