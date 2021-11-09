import { useState } from "react";
import { useRef } from "react";
import { useAuth } from "../../contexts/AuthContextProvider";
import Button from "../UI/Button/Button";
import styles from "./SignUp.module.css";

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
    } catch {
      setError("Failed to create account");
    }
    setIsLoading(false);
  };
  return (
    <div className={styles.main}>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <label htmlFor='email' className={styles.label}>
          Email:
        </label>
        <input
          type='text'
          id='email'
          name='email'
          ref={email}
          className={styles.input}
        />
        <label htmlFor='password' className={styles.label}>
          Password:
        </label>
        <input
          type='password'
          id='password'
          name='password'
          ref={password}
          className={styles.input}
        />
        <label htmlFor='password' className={styles.label}>
          Confirm Password:
        </label>
        <input
          type='password'
          id='passwordConfirmation'
          name='passwordConfirmation'
          ref={passwordConfirmation}
          className={styles.input}
        />
        <Button label='Sign up' />
        {/* <button type='submit' disabled={isLoading} className={styles.button}>
          Sign Up
        </button> */}
      </form>
    </div>
  );
};

export default SignUp;
