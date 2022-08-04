import React from "react";
import Godkendt from "./Godkendt";
import IkkeGodkendt from "./IkkeGodkendt";

const Tilmelding = () => {
  return (
    <div className="flex flex-col gap-5">
      <IkkeGodkendt />
      <Godkendt />
    </div>
  );
};

export default Tilmelding;
