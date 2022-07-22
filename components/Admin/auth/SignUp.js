import { Button, Loading, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { auth } from "../../Firebase/clientApp";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { firestore } from "../../Firebase/clientApp";
import { addDoc, collection } from "firebase/firestore";
import Dashboard from "../Dashboard";

const SignUp = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(false);

  const [createUserWithEmailAndPassword, userCred, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = (event) => {
    event.preventDefault();
    if (error) setError("");
    if (signUpForm.password !== signUpForm.confirmPassword) {
      return setError("Password do not match");
    }
    // Valid form inputs
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

  const onChange = (event) => {
    //Update form state
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const createUserDocument = async (User) => {
    await addDoc(
      collection(firestore, "Users"),
      JSON.parse(JSON.stringify(User))
    );
  };

  useEffect(() => {
    if (userCred) {
      createUserDocument(userCred.user);
    }
  }, [userCred]);

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input name="email" type="email" onChange={onChange} />
          <input name="password" type="password" onChange={onChange} />
          <input name="confirmPassword" type="password" onChange={onChange} />
          <Button type="submit">
            {loading ? (
              <Loading color="white" type="points" />
            ) : (
              <Text color="white">Register</Text>
            )}
          </Button>
          <p>{error}</p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
