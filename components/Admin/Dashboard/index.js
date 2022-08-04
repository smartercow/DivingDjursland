import { Button, Card } from "@nextui-org/react";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/clientApp";
//import { listMenu } from '../../../assets/adminmenu'
import Forsiden from "./Forside";

const Dashboard = ({children}) => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <h2>Dashboard.index</h2>
    </div>
  );
};

export default Dashboard;
