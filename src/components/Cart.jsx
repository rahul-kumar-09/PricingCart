import React from "react";
import { cartDesign } from "../constants";
import { FaCheck } from "react-icons/fa6";


const Cart = () => {
  return (
    <div className="flex flex-wrap mt-8 lg:m-1 justify-center">
      {cartDesign.map((item, index) => (
        <div
          key={index}
          className="cart w-[250px] h-[400px] relative pb-8 backdrop-blur rounded-2xl mx-2"
        >
          <div className="header px-4 py-4">
            <p className="text-sm">{item.cartTitle}</p>
            <h2 className="text-4xl font-bold">{item.price}</h2>
          </div>
          <hr />
          <div className="bottom px-4 py-4">
            {item.benefits.map((b, i) => (
              <p key={i} className="text-[10px] text-stone-400 flex items-center m-4">
                <FaCheck className="bg-black mr-2" />
                {b}
              </p>
            ))}{" "}
          </div>

          <div className="flex justify-center pb-10 pt-16 ">
            <button
              className={`${item.btnColor} ${item.btnTxtColor} hover:${item.btnHoverColor} py-1   rounded-3xl px-16 absolute bottom-6`}
            >
              Get Started
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
