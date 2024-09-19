import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Heading from "./components/Heading";
import Switch from "./components/Switch";
import PlansButton from "./components/PlansButton";
import BottomStyle from "./components/BottomStyle";

function App() {
  return (
    <div className="px-8 h-screen relative m-0 p-0 overflow-hidden">
      <div className="justify-center flex">
        <Heading />
      </div>
      <div className="flex flex-wrap justify-center">
        <Cart />
        <Cart />
        <Cart />
      </div>
      <div className="ml-20 mt-2">
        <Switch />
      </div>
      <div className="flex justify-center">
        <PlansButton />
      </div>
      <div className="flex justify-center flex-col items-center absolute bottom-0 w-full ">
        <BottomStyle />
      </div>
    </div>
  );
}

export default App;
