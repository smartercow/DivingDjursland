import React from "react";
import { Button, Card, Collapse, Table, Text } from "@nextui-org/react";

const Godkendt = () => {
  return (
    <div>
      <Card variant="bordered">
        <Card.Body>
          <Text className="font-semibold uppercase text-green-700">
            Godkendt
          </Text>
          <Collapse.Group bordered className="mt-2">
            <Collapse
              title={
                <Text b>
                  Jeppe Kjærgaard
                </Text>
              }
            >
              <Table
                striped
                shadow={false}
                aria-label="Example table with dynamic content & infinity pagination"
                css={{ minWidth: "100%", height: "auto" }}
                color="secondary"
              >
                <Table.Header>
                  <Table.Column>Fuld navn</Table.Column>
                  <Table.Column>Telefon</Table.Column>
                  <Table.Column>Email</Table.Column>
                  <Table.Column>Adresse</Table.Column>
                </Table.Header>
                <Table.Body>
                  <Table.Row key="1">
                    <Table.Cell>Tony Reichert</Table.Cell>
                    <Table.Cell>88888888</Table.Cell>
                    <Table.Cell>tony@gmail.com</Table.Cell>
                    <Table.Cell>Langevej 6, 8500 Grenå</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              <Table
                striped
                shadow={false}
                aria-label="Example table with dynamic content & infinity pagination"
                css={{ minWidth: "100%", height: "auto" }}
                color="secondary"
              >
                <Table.Header>
                  <Table.Column>Højde</Table.Column>
                  <Table.Column>Vægt</Table.Column>
                  <Table.Column>Skostørrelse</Table.Column>
                  <Table.Column>Grill</Table.Column>
                </Table.Header>
                <Table.Body>
                  <Table.Row key="1">
                    <Table.Cell>180cm</Table.Cell>
                    <Table.Cell>120kg</Table.Cell>
                    <Table.Cell>40</Table.Cell>
                    <Table.Cell>Ja tak</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Collapse>
            <Collapse
              title={
                <Text b>
                  Hanne Larsen
                </Text>
              }
            >
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Collapse>
            <Collapse
              title={
                <Text b>
                  Øjum Tranbjerg
                </Text>
              }
            >
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Collapse>
          </Collapse.Group>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Godkendt;
