import Image from "next/image";
import Link from "next/link";
import { Text } from "@nextui-org/react";
const FrontAbout = () => {
  return (
    <div className="flex justify-between items-center gap-14">
      <div className="w-80 md:w-96 hidden sm:inline">
        <div>
          <img src="/images/aboutdjurs.png" alt="" />
        </div>
      </div>
      <div className=" max-w-none sm:max-w-xs md:max-w-sm lg:max-w-lg">
        <Text className="text-xl sm:text-2xl md:text-3xl tracking-wider" color="primary" weight="bold">
          DIVING DJURSLAND
        </Text>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestia quas vel sint commodi repudiandae con uuntur
          voluptatum laborumnumquam tiis harum quisquam eius sed odit fugiat
          fuga praesentium optio, eaque rerum!
        </p>
        <Link href="/omos">
          <Text color="primary" className="text-sm md:text-base font-bold uppercase cursor-pointer">
            Læs mere→
          </Text>
        </Link>
      </div>
    </div>
  );
};

export default FrontAbout;
