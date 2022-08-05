import React from 'react'
import { Button, Card, Input, Row, Text, Textarea } from "@nextui-org/react";
import { IoMdCloudUpload } from "react-icons/io";
import { DeleteDocumentIcon } from "../../../../assets/DeleteDocumentIcon";
import { EditDocumentIcon } from "../../../../assets/EditDocumentIcon";
import Image from 'next/image';
const Team = () => {
  return (
    <div>
              <Card variant="bordered">
        <Card.Body>
          <Text className="font-semibold mb-3">Team</Text>
          <div className="flex gap-4 flex-col md:flex-row">
            <Card variant="bordered">
              <Card.Body>
                <Image layout="fill" objectFit="cover" src="/assets/testimgs/obama.jpg" alt="" />
              </Card.Body>
              <Card.Divider></Card.Divider>

              <Card.Footer>
                <Row
                  wrap="nowrap"
                  justify="space-between"
                  gap={0.2}
                  align="center"
                >
                  <Text className="truncate">Henrik</Text>
                  <Text>
                    <EditDocumentIcon
                      size={22}
                      fill="#083C50"
                      className="cursor-pointer"
                      onClick={() => {}}
                    />
                    <DeleteDocumentIcon
                      fill="#F31260"
                      className="cursor-pointer"
                      onClick={() => {}}
                    />
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
            <Card variant="bordered">
              <Card.Body>
                <Image layout="fill" objectFit="cover" src="/assets/testimgs/obama.jpg" alt="" />
              </Card.Body>
              <Card.Divider></Card.Divider>

              <Card.Footer>
                <Row
                  wrap="nowrap"
                  justify="space-between"
                  gap={0.2}
                  align="center"
                >
                  <Text className="truncate">Henrik</Text>
                  <Text>
                    <EditDocumentIcon
                      size={22}
                      fill="#083C50"
                      className="cursor-pointer"
                      onClick={() => {}}
                    />
                    <DeleteDocumentIcon
                      fill="#F31260"
                      className="cursor-pointer"
                      onClick={() => {}}
                    />
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
            <Card variant="bordered">
              <Card.Body>
                <Image layout="fill" objectFit="cover" src="/assets/testimgs/obama.jpg" alt="" />
              </Card.Body>
              <Card.Divider></Card.Divider>

              <Card.Footer>
                <Row
                  wrap="nowrap"
                  justify="space-between"
                  gap={0.2}
                  align="center"
                >
                  <Text className="truncate">Henrik</Text>
                  <Text>
                    <EditDocumentIcon
                      size={22}
                      fill="#083C50"
                      className="cursor-pointer"
                      onClick={() => {}}
                    />
                    <DeleteDocumentIcon
                      fill="#F31260"
                      className="cursor-pointer"
                      onClick={() => {}}
                    />
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </div>
        </Card.Body>
        <Card.Divider />
        <Card.Body>
          <div className="flex flex-col gap-4">
            <Input bordered label="Navn" placeholder="Navn" color="default" />
            <Input bordered label="Role" placeholder="Role" color="default" />
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="w-[40%]">
                <Button
                  flat
                  className="text-black w-full"
                  css={{ background: '#F1F3F5'}}
                  auto
                  onClick={() => selectedFileRef.current?.click()}
                  width=""
                >
                  <Text>Upload billede</Text>
                  <IoMdCloudUpload className="text-xl ml-3" />
                </Button>
              </div>
              <div className="w-auto">
                <Button color="primary">
                  Gem
                </Button>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Team