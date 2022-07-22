import React, { useEffect, useState } from "react";
import { Button, Card, Grid, Input, Row, Text } from "@nextui-org/react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { firestore } from "../../../Firebase/clientApp";
import { EditDocumentIcon } from "../../../../assets/EditDocumentIcon";
import { DeleteDocumentIcon } from "../../../../assets/DeleteDocumentIcon";

const NavSettings = ({ user }) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [sort, setSort] = useState(0)

  const [menuList, setMenuList] = useState([]);

  const [update, setUpdate] = useState(false)

  const createMenu = async () => {
    //Sti til SLides collection
    //Opretter en collection med title & link fra useState via onChange
    await addDoc(collection(firestore, "Menu"), {
      adminID: user[0].email,
      title: title,
      link: link,
      sort: sort,
      timestamp: serverTimestamp(),
    });

    setUpdate(!update)
  };

  const menuCollectionRef = collection(firestore, "Menu");

  useEffect(() => {
    const getMenu = async () => {
      const menuData = await getDocs(menuCollectionRef);
      setMenuList(menuData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMenu();
  }, [update]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(firestore, "Menu", id))
  }

  return (
    <div>
      <Text className="mb-3 font-bold">Navigation indstillinger</Text>
      <Grid>
        <Card variant="bordered">
          <Card.Body>
            <Grid className="flex flex-col gap-3">
              {menuList.sort((a,b) => a.sort - b.sort).map((menu, index) => (
                <Card isHoverable variant="bordered" key={index}>
                  <div className="flex justify-between items-center px-3">
                    <div className="p-2">
                      <Text>{menu.title}</Text>
                    </div>
                    <div className="w-14 flex justify-between">
                      <EditDocumentIcon
                        size={22}
                        fill="#083C50"
                        className="cursor-pointer"
                      />
                      <DeleteDocumentIcon
                        size={22}
                        fill="#F31260"
                        className="cursor-pointer"
                        onClick={() => {handleDelete(menu.id), setUpdate(!update)}}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </Grid>
            <Card.Divider className="mt-5" />
            <Text className="my-3 font-semibold">Ny menu</Text>

            <Grid className="flex flex-col gap-4">
              <Input
                bordered
                placeholder="Navn"
                color="default"
                width="100%"
                aria-label="Navn"
                onChange={(event) => setTitle(event.target.value)}
              />
              <Input
                bordered
                labelLeft="https://divingdjursland.dk/"
                placeholder="Link"
                aria-label="Link"
                width="100%"
                onChange={(event) => setLink(event.target.value)}
              />
            </Grid>
            <br />
            <div className="flex justify-between gap-3 sm:flex-row sm:gap-[20%] items-end">
              <Input
                label="Sorter efter"
                type="number"
                placeholder="0"
                width="100%"
                onChange={(event) => setSort(event.target.value)}
              />
              <Button color="primary" onClick={createMenu} className="w-full">
                Tilføj ny menu
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Grid>
    </div>
  );
};

export default NavSettings;
