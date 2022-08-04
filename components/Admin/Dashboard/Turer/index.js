import {
  Button,
  Card,
  Checkbox,
  Dropdown,
  Input,
  Row,
  Text,
  Textarea,
} from "@nextui-org/react";
import React, { useMemo, useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import List from "./List";

const Turer = () => {
  //Dropdown
  const [selected, setSelected] = useState(new Set(["Strand"]));

  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <div>
      <Card variant="bordered">
        <Card.Header>
          <Text h4>Turer</Text>
        </Card.Header>

        <Card.Divider />
    
        <Card.Body>
          <Card variant="bordered">
            <Card.Body>
            <Text className="mb-2 font-semibold">Ny menu</Text>
              <div className="flex justify-between gap-8 flex-col md:flex-row">
                <div className="flex flex-col gap-2 w-full">
                  <Input
                    bordered
                    label="Sted"
                    placeholder="Navn på stedet"
                    color="default"
                  />
                  <Textarea
                    bordered
                    label="Beskrivelse"
                    placeholder="Beskrivelse om stedet"
                  />
                  <Input label="Dato" type="date" />
                  <Input label="Tidspunkt" type="time" />
                </div>
                <div className="flex flex-col gap-2 w-full mt-[-20px] md:mt-0">
                  <Input
                    bordered
                    label="Antal pladser"
                    placeholder="0"
                    color="default"
                    type="number"
                  />
                  <Input
                    bordered
                    label="Pris"
                    placeholder="0"
                    color="default"
                    type="number"
                  />
                  <div className="flex items-center justify-between my-1 gap-2">
                    <Text>Type</Text>
                    <Dropdown>
                      <Dropdown.Button
                        flat
                        color="currentColor"
                        css={{ tt: "capitalize", w: "85%" }}
                      >
                        {selectedValue}
                      </Dropdown.Button>
                      <Dropdown.Menu
                        aria-label="Single selection actions"
                        color="secondary"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selected}
                        onSelectionChange={setSelected}
                      >
                        <Dropdown.Item key="Strand">Strand</Dropdown.Item>
                        <Dropdown.Item key="Båd">Båd</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <input
                    type="file"
                    placeholder="Upload billede..."
                    onChange={() => {}}
                    className="w-full"
                    hidden
                    ref={() => {}}
                  />
                  <Input
                    bordered
                    label="Video link"
                    placeholder="https://www.youtube.com/watch?v=#########"
                    color="default"
                  />
                  <Button
                    flat
                    className="text-black w-full mt-2"
                    css={{ background: '#F1F3F5'}}
                    auto
                    onClick={() => {}}
                    width=""
                  >
                    <Text>Upload billede</Text>
                    <IoMdCloudUpload className="text-xl ml-3" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-between items-center gap-3 flex-col md:flex-row sm:flex-row md:gap-[20%] mt-4">
                <div className="w-full">
                  <Checkbox defaultSelected={true}>
                    <Text>Synligt på forsiden</Text>
                  </Checkbox>
                  ;
                </div>
                <div className="w-full">
                  <Button className="w-full" color="primary" onClick={() => {}} >
                    Opret
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card.Divider className="my-5" />
          <List />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Turer;
