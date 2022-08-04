import { Button, Card, Row, Text } from '@nextui-org/react';
import React from 'react'
import { EditDocumentIcon } from '../../../../assets/EditDocumentIcon';
import { DeleteDocumentIcon } from '../../../../assets/DeleteDocumentIcon';
const list = [
    {
      title: "Sangstrup Klint",
      img: "/images/sangstrup.jpg",
      description: "Lorem ipsum dolor sit amet consectet adipisicing elit",
      date: "07/08",
      seats: "10",
      aseats: "8",
      type: "Strand",
      price: "300,- DKK",
    },
    {
      title: "Kreidesse",
      img: "/images/hemmoor.jpg",
      description: "Lorem ipsum dolor sit amet consectet adipisicing elit",
      date: "13/08",
      seats: "10",
      aseats: "9",
      type: "Båd",
      price: "600,- DKK",
    },
    {
      title: "Ebeltoft Bådhavn",
      img: "/images/ebeltoft.jpg",
      description: "Lorem ipsum dolor sit amet consectet adipisicing elit",
      date: "18/08",
      seats: "10",
      aseats: "10",
      type: "Båd",
      price: "600,- DKK",
    },
  ];
const List = () => {
  return (
    <div>
        <div className="flex justify-between gap-5">
            {list.map((item, index) => (
              <div key={index}>
                <Card variant='bordered' className="w-35 sm:w-35 md:w-55 lg:w-80">
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      src={item.img}
                      objectFit="cover"
                      width="100%"
                      height={140}
                      alt={item.title}
                    />
                  </Card.Body>

                  <Card.Header css={{ pb: 2 }}>
                    <Button css={{ opacity: 0.8 }} size="xs">
                      VIDEO
                    </Button>
                  </Card.Header>

                  <Card.Header css={{ justifyItems: "flex-start", py: 0 }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                      <Text
                        h4
                        css={{
                          color: "$accents7",
                          fontWeight: "$semibold",
                          fontSize: "$sm",
                        }}
                      >
                        {item.date}
                      </Text>
                      <Text h4 color="primary">
                        {item.title}
                      </Text>
                    </Row>
                  </Card.Header>

                  <Card.Body css={{ pt: 0 }}>
                    <div>
                      <Text color="primary" className="italic">
                        Lorem ipsum dolor sit amet consectet adip isi cing elit
                        parta idlyrso le mundo pret jkre...
                      </Text>
                      <hr />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between">
                        <Text b color="primary">
                          Antal Pladser:
                        </Text>
                        <Text color="primary">{item.seats}</Text>
                      </div>
                      <div className="flex justify-between">
                        <Text b color="primary">
                          Ledige Pladser:
                        </Text>
                        <Text color="primary">{item.aseats}</Text>
                      </div>
                      <div className="flex justify-between">
                        <Text b color="primary">
                          Type:
                        </Text>
                        <Text color="primary">{item.type}</Text>
                      </div>
                      <div className="flex justify-between">
                        <Text b color="primary">
                          Pris:
                        </Text>
                        <Text color="primary">{item.price}</Text>
                      </div>
                    </div>
                  </Card.Body>
                  <Card.Divider />
                  <Card.Footer className='flex justify-between'>
                    <Text className='text-gray-500 text-sm'>Oprettet: 23/07/2022</Text>
                        <div className='flex gap-1'>
                        <EditDocumentIcon
                          size={22}
                          fill="#083C50"
                          className="cursor-pointer"
/*                           onClick={() =>
                            handleChange(
                              menu.title,
                              menu.link,
                              menu.sort,
                              menu.id
                            )
                          } */
                        />
                        <DeleteDocumentIcon
                          size={22}
                          fill="#F31260"
                          className="cursor-pointer"
/*                           onClick={() => {
                            handleDelete(menu.id), setUpdate(!update);
                          }} */
                        />
                        </div>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
    </div>
  )
}

export default List