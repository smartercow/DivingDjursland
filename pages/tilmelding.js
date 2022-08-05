import { Button, Checkbox, Dropdown, Input } from "@nextui-org/react";
import React, { useMemo, useState } from "react";

const Tilmelding = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [shoeSize, setShoeSize] = useState(0);
  const [grill, setGrill] = useState(false);

  const [selectedTour, setSelectedTour] = useState(new Set(["Valg turer"]));
  const [selectedPayment, setSelectedPayment] = useState(
    new Set(["Betalingsmetode"])
  );

  const selectedTourValue = useMemo(
    () => Array.from(selectedTour).join(", ").replaceAll("_", " "),
    [selectedTour]
  );

  const selectedPaymentValue = useMemo(
    () => Array.from(selectedPayment).join(", ").replaceAll("_", " "),
    [selectedPayment]
  );

  return (
    <div className="max-w-5xl mx-5 lg:mx-auto">
      <form action="">
        <div className="flex flex-col gap-4 bg-[#CFF0F8] p-4 md:p-8 rounded-2xl w-full">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col gap-3 w-full">
              <Input
                flat
                label="Navn"
                placeholder="Fulde navn"
                color="default"
                width="100%"
                aria-label="Title"
                size="lg"
                onChange={(event) => setName(event.target.value)}
              />
              <Input
                flat
                label="Adresse"
                placeholder="Vej, Nr, Postnr, By"
                color="default"
                width="100%"
                aria-label="Adresse"
                size="lg"
                onChange={(event) => setAddress(event.target.value)}
              />
              <Input
                flat
                label="Email"
                placeholder="E-mailadresse"
                color="default"
                width="100%"
                aria-label="Email"
                size="lg"
                onChange={(event) => setEmail(event.target.value)}
              />
              <Input
                flat
                label="Telefon"
                placeholder="Telefon nummer"
                color="default"
                width="100%"
                aria-label="Telefon"
                size="lg"
                onChange={(event) => setTel(event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <Input
                flat
                label="Højde"
                placeholder="Højde i cm"
                color="default"
                width="100%"
                aria-label="Højde"
                size="lg"
                onChange={(event) => setHeight(event.target.value)}
              />
              <Input
                flat
                label="Vægt"
                placeholder="Vægt i kg"
                color="default"
                width="100%"
                aria-label="Vægt"
                size="lg"
                onChange={(event) => setWeight(event.target.value)}
              />
              <Input
                flat
                label="Skostørrelse"
                placeholder="Skostørrelse i EU standard"
                color="default"
                width="100%"
                aria-label="Email"
                size="lg"
                onChange={(event) => setShoeSize(event.target.value)}
              />
              <Checkbox color="primary" defaultSelected={true} size="sm">
                Skal du være med til at grille?
              </Checkbox>
              <Dropdown>
                <Dropdown.Button flat color="white" css={{ tt: "capitalize" }}>
                  {selectedTourValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="primary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedTour}
                  onSelectionChange={setSelectedTour}
                >
                  <Dropdown.Item key="07/08 Sangstrup Klint">
                    07/08 Sangstrup Klint
                  </Dropdown.Item>
                  <Dropdown.Item key="number">
                    07/08 Sangstrup Klint
                  </Dropdown.Item>
                  <Dropdown.Item key="date">Date</Dropdown.Item>
                  <Dropdown.Item key="single_date">Single Date</Dropdown.Item>
                  <Dropdown.Item key="iteration">Iteration</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="w-full">
              <Dropdown>
                <Dropdown.Button flat color="white" css={{ tt: "capitalize", width: '100%' }}>
                  {selectedPaymentValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="primary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedPayment}
                  onSelectionChange={setSelectedPayment}
                >
                  <Dropdown.Item key="MobilePay">MobilePay</Dropdown.Item>
                  <Dropdown.Item key="number">Number</Dropdown.Item>
                  <Dropdown.Item key="date">Date</Dropdown.Item>
                  <Dropdown.Item key="single_date">Single Date</Dropdown.Item>
                  <Dropdown.Item key="iteration">Iteration</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="w-full flex md:justify-end">
              <Button>TILMELD</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Tilmelding;
