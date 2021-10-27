import { useState } from "react";
import { useRef } from "react";
import { useAuth } from "../../contexts/AuthContextProvider";
const SignUp = (props) => {
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();

  const { signUp, currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (password.current.value !== passwordConfirmation.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setIsLoading(true);
      setError();
      await signUp(email.current.value, password.current.value);
    } catch {}
    setIsLoading(false);
  };

  if (currentUser) {
    console.log(currentUser.email);
    console.log(error);
  }
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='email'>Email:</label>
        <br />
        <input type='text' id='email' name='email' ref={email} />
        <br />
        <label htmlFor='password'>Password:</label>
        <br />
        <input type='password' id='password' name='password' ref={password} />
        <br />
        <label htmlFor='password'>Confirm Password:</label>
        <br />
        <input
          type='password'
          id='passwordConfirmation'
          name='passwordConfirmation'
          ref={passwordConfirmation}
        />
        <button type='submit' disabled={isLoading}>
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUp;
