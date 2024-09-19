import React from "react";
import { heading } from "../constants";

const Heading = () => {
  return (
    <h1 className="heading text-4xl tracking-widest lg:text-9xl lg:mb-[-60px] font-bold ">
      {heading}
    </h1>
  );
};

export default Heading;
