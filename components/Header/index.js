/* import Link from "next/link"; */
import { Button, Link } from "@nextui-org/react";
import { CgLogIn, CgMenuRightAlt } from "react-icons/cg";
import { RiMenu2Fill } from "react-icons/ri";
const Header = () => {
  return (
    <div className="bg-[#CFF0F8] h-16">
      <div className="flex justify-between items-center max-w-5xl mx-5 lg:mx-auto">
        {/* Left */}
        <div className="bg-[#CFF0F8] w-16">
          <Link color="primary" href="/">
            <div className="logo w-10 h-auto"></div>
          </Link>
        </div>

        {/* Middle */}
        <div className="hidden sm:inline pt-1">
          <div className="">
            <ul className="inline-flex gap-2 md:gap-4 lg:gap-6 uppercase font-bold">
              <li className="">
                <Link color="primary" href="/">
                  Hjem
                </Link>
              </li>
              <li className="">
                <Link color="primary" href="/turer">
                  Turer
                </Link>
              </li>
              <li className="">
                <Link color="primary" href="/tilmelding">
                  Tilmelding
                </Link>
              </li>
              <li className="">
                <Link color="primary" href="/dykkerspots">
                  Dykkerspots
                </Link>
              </li>
              <li className="">
                <Link
                  className="whitespace-nowrap"
                  color="primary"
                  href="/omos"
                >
                  Om os
                </Link>
              </li>
              <li className="">
                <Link color="primary" href="/kontakt">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right */}
        <div className="hidden sm:inline">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
