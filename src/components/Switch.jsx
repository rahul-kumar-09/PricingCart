import classNames from "classnames/bind";
import React, { useState } from "react";
import { toggle } from "../constants";

const Switch = () => {
  const [isSelect, setIsSelect] = useState(true);

  return (
    <div className="flex items-center">
      <div
        onClick={() => setIsSelect(!isSelect)}
        className={classNames(
          "flex w-5 h-[10px] cursor-pointer bg-gray-700 rounded-full",
          {
            "bg-slate-300": isSelect,
          }
        )}
      >
        <span
          className={classNames("h-2 w-2 mt-[1px] bg-slate-200 rounded-full", {
            "ml-[10px] bg-black ": isSelect,
          })}
        />
      </div>
      <div className="ml-2">{toggle}</div>
    </div>
  );
};

export default Switch;
