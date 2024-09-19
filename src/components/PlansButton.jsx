import React from "react";
import { plans } from "../constants";

const PlansButton = () => {
  return (
    <div>
      <button className="bg-slate-900 text-white px-3 py-1 rounded-full ">
        {plans}
      </button>
    </div>
  );
};

export default PlansButton;
