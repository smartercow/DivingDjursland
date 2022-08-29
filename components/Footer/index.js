import React from "react";
import Image from "next/image";
import { Button, Input, Text } from "@nextui-org/react";
const Footer = () => {
  return (
    <div className="relative bg-[#EBFBFF]">
      <div className="bg-[#EBFBFF]">
        <div className="max-w-5xl mx-5 lg:mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-3 lg:gap-10 mb-7">
            <div className="w-full flex flex-col gap-5">
              <Text h4 color="primary">
                DIVINGDJURSLAND
              </Text>
              <Text color="primary">
                Lorem ipsum dolor sit amet co icing elitdolor sit amet consect
                dolor sit amet consectetur elit
              </Text>
            </div>
            <div className="w-full flex flex-col gap-5">
              <Text h5 color="primary">
                KONTAKT OS
              </Text>
              <div>
                <Text color="primary">Svinget 2 8570 Trustrup, Lyngby </Text>
                <Text color="primary">+45 42789605</Text>
                <Text color="primary">contact@scubafun.dk</Text>
              </div>
            </div>
            <div className="w-full flex flex-col gap-5">
              <Text h5 color="primary">
                NYHEDSBREV
              </Text>
              <div>
                <Input
                aria-label="Nyhedsbrev"
                  status="white"
                  width="auto"
                  animated="false"
                  shadow="false"
                  css={{ backgroundColor: "white" }}
                  contentRight={
                    <Button auto rounded>
                      TILMELD
                    </Button>
                  }
                />
              </div>
              <Text size={12}>
                Tilmeld dig med din e-mailadresse for at modtage nyheder og
                opdateringer
              </Text>
            </div>
          </div>
          <hr />
          <div className="h-10 flex">
            <div className="w-full">
              <Text>©2022 DivingDjursland. Alle rettigheder forbeholdes. </Text>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
