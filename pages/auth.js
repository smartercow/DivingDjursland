import { Card, Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Authentication from "../components/auth/Authentication";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../components/Firebase/clientApp";
import { useRouter } from "next/router";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { User } from "firebase/auth";

const Auth = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState([]);

  const getUsers = async () => {
    const docRef = doc(firestore, "Users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists() && docSnap.data().isAdmin === true) {
      setUserData(docSnap.data());
      console.log("isAdmin is True");
    } else if (docSnap.exists() && docSnap.data().isAdmin === false) {
      console.log("isAdmin is False");
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    if (user) {
      getUsers();
    }
  }, [user]);

  return (
    <div className="bg-gradient pt-5 relative h-80 bg-[url('/images/headerimg.svg')] bg-contain">
      <div>
        <Image
          layout="responsive"
          objectFit="contain"
          height="100%"
          width="100%"
          src=""
          alt=""
        />
      </div>
      <div className="max-w-5xl mx-5 lg:mx-auto">
        <div className="mx-auto absolute md:top-10 md:left-[40%]">
          <Card
            variant="flat"
            className="flex justify-center mt-24 bg-white p-10"
          >
            <Authentication />
          </Card>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Auth;
