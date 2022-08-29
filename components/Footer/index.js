import React from "react";
import Image from "next/image";
import { Button, Input, Text } from "@nextui-org/react";

import { MdLocationPin, MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="relative bg-[#EBFBFF]">
      <div className="bg-[#EBFBFF]">
        <div className="max-w-5xl mx-5 lg:mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-3 lg:gap-10 mb-7">
            <div className="w-full flex flex-col gap-2">
              <div className="flex -pt-[-1rem]">
                <Text weight="extrabold" size={25} color="#5379FE">
                  DIVING
                </Text>
                <Text weight="extrabold" size={25} color="primary">
                  DJURSLAND
                </Text>
              </div>
              <Text color="primary">
                Lorem ipsum dolor sit amet co icing elitdolor sit amet consect
                dolor sit amet consectetur elit sit amet co icing elitdolor sit
                amet consect
              </Text>
            </div>
            <div className="w-full flex flex-col gap-2">
              <Text size={18} weight="bold" color="primary">
                KONTAKT OS
              </Text>
              <div className="flex flex-col gap">
                <div className="flex items-center gap-2">
                  <Text size={20} color="primary">
                    <MdLocationPin />
                  </Text>
                  <div>
                    <Text weight="semibold" color="primary">
                      Svinget 2 8570 Trustrup, Lyngby{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex items-center gap-2 pl-1">
                  <Text size={15} color="primary">
                    <BsTelephoneFill />
                  </Text>
                  <Text weight="semibold" color="primary">
                    +45 42789605
                  </Text>
                </div>
                <div className="flex items-center gap-2 pl-1">
                  <Text size={20} color="primary">
                    <MdEmail />
                  </Text>
                  <div>
                    <Text weight="semibold" color="primary">
                      contact@scubafun.dk
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <Text size={18} weight="bold" color="primary">
                NYHEDSBREV
              </Text>
              <div>
                <Input
                  aria-label="Nyhedsbrev"
                  status="white"
                  width="auto"
                  animated="false"
                  shadow="false"
                  placeholder="Din email her"
                  css={{ backgroundColor: "white", width: "76%" }}
                  contentRight={
                    <Button auto rounded color="secondary">
                      TILMELD
                    </Button>
                  }
                />
              </div>
              <div className="mt-2">
                <Text weight="semibold" color="primary" size={12}>
                  Tilmeld dig med din e-mailadresse for at modtage nyheder og
                  opdateringer
                </Text>
              </div>
            </div>
          </div>
          <hr />
          <div className="h-10 flex">
            <div className="w-full">
              <Text color="primary" weight="semibold">
                ©2022 DivingDjursland. Alle rettigheder forbeholdes.{" "}
              </Text>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
