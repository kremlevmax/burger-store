import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { auth } from "../../firebase";

const SignUp = (props) => {
  const email = useRef();
  const password = useRef();

  const [currentUser, setCurrentUser] = useState();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(
      email.current.value,
      password.current.value
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => setCurrentUser(user));
  }, []);

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='email'>Email:</label>
        <br />
        <input type='text' id='email' name='email' ref={email} />
        <br />
        <label htmlFor='password'>Last name:</label>
        <br />
        <input type='password' id='password' name='password' ref={password} />
        <button type='submit'>Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
