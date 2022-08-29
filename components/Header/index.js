/* import Link from "next/link"; */
import { Button, Link } from "@nextui-org/react";
import { CgLogIn, CgMenuRightAlt } from "react-icons/cg";
import { RiMenu2Fill } from "react-icons/ri";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../Firebase/clientApp";
import { useEffect, useState } from "react";
import Content from "./Content";
const Header = () => {
  const navColRef = collection(firestore, "Menu");
  const [navigation, setNavigation] = useState([]);
  useEffect(() => {
    const getNavigation = async () => {
      const menuData = await getDocs(navColRef);
      setNavigation(
        menuData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getNavigation();
  }, []);
  

  return (
    <div className="bg-[#CFF0F8]">
      <div className="flex justify-between items-center max-w-5xl mx-5 lg:mx-auto sticky">

        <Content navigation={navigation} />

        {/* Right */}
{/*         <div className="hidden sm:inline">
          <div className="flex items-center">
            <Link color="primary" href="/auth">
              <CgLogIn className="h-10 w-8" />
            </Link>
          </div>
        </div>
        <div className="sm:hidden flex items-center pt-3">
          <Link href="/auth">
            <CgMenuRightAlt className="h-10 w-8" />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
