import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/clientApp";
//import { listMenu } from '../../../assets/adminmenu'
import Forsiden from './Forside'

export const list = [
  {
    title: "Forsiden",
    icon: ""
  },
  {
    title: "Turer",
    icon: ""
  },
  {
    title: "Tilmelding",
    icon: ""
  },
  {
    title: "Dykkerspots",
    icon: ""
  },
  {
    title: "Om os",
    icon: ""
  },
  {
    title: "Kontakt",
    icon: ""
  },
  {
    title: "Footer",
    icon: ""
  },
  {
    title: "Indstillinger",
    icon: ""
  }
]
const Dashboard = () => {
  const [user] = useAuthState(auth);
  //console.log("list", list);
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <div>
        Velkommen {user?.displayName || user.email?.split("@")[0]} <br />
        {user ? <button onClick={logout}>Log Ud</button> : null}
      </div>
      <div className="flex">
        <div>
          {list.map((item, index) => (
            <div key={index} className="flex flex-col">
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div>
          <Forsiden />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
