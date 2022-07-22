import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/clientApp";
import { Button, Loading, Text } from "@nextui-org/react";

const SignIn = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  //Firebase logic
  const onSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };

  const onChange = (event) => {
    //Update form state
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" onChange={onChange} /> <br />
        <input name="password" type="password" onChange={onChange} /> <br />
        <Button type="submit">
          {loading ? (
            <Loading color="white" type="points" />
          ) : (
            <Text color="white">Login</Text>
          )}
        </Button>
        <p>{error}</p>
      </form>
    </div>
  );
};

export default SignIn;
