import React from "react";
import SignUp from "../../components/Admin/auth/SignUp";
import { useAuthState } from "react-firebase-hooks/auth";
import Dashboard from "../../components/Admin/Dashboard";
import { auth } from "../../components/Firebase/clientApp";
import LogIn from "../../components/Admin/auth/LogIn";

const Admin = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="max-w-5xl mx-5 lg:mx-auto flex flex-col gap-5 md:gap-10 lg:gap-16 relative">
      {!user ? (
        <div>
          <LogIn />
          <br />
          <SignUp />
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default Admin;
