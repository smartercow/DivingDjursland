import { Button, Text } from "@nextui-org/react";
import Link from "next/link";

const FrontShop = () => {
  return (
    <div className="flex justify-between items-center gap-5 flex-col sm:flex-row">
      <div className=" max-w-none sm:max-w-xs md:max-w-sm lg:max-w-lg">
        <Text
          className="text-xl sm:text-2xl md:text-3xl tracking-wider"
          color="primary"
          weight="bold"
        >
          VORES UDSTYR
        </Text>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestia quas vel sint commodi repudiandae con uuntur
          voluptatum laborumnumquam tiis harum quisquam eius sed odit fugiat
          fuga praesentium optio, eaque rerum!
        </p>
        <div className="hidden sm:inline">
          <Link href="/omos">
            <Button auto size="lg">
              GÅ TIL SHOPPEN
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-80 md:w-96 sm:inline">
        <div className="relative ani-con ">
          {/* <div className="front-c h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-56 lg:w-56"></div> */}
          <img
            className="front-diver h-60 w-60 sm:h-48 sm:w-48 md:h-60 md:w-60 lg:h-72 lg:w-72 opacity-75"
            src="/images/roundedbeach.png"
            alt=""
          />
          <Text
            h1
            size={70}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 90%",
            }}
            className="fs-text uppercase opacity-50 font-extrabold text-6xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            ScubaFun
          </Text>
          <img className="diver" src="/images/diver.png" alt="" />
        </div>
        <div className="sm:hidden flex justify-center">
          <Link href="/omos">
            <Button auto size="lg">
              GÅ TIL SHOPPEN
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FrontShop;
