import React from "react";

const Cart = () => {
  return (
    <div className="cart w-72 backdrop-blur rounded-2xl mx-2">
      <div className="header px-4 py-4">
        <p className="text-lg">Free Plan</p>
        <h2 className="text-6xl font-bold">Free</h2>
      </div>
      <hr className="" />
      <div className="bottom px-4 py-4">
        <p className="pb-2">Send up to 2 transfers per month</p>
        <p className="pb-2">Send up to 2 transfers per month</p>
        <p className="pb-2">Send up to 2 transfers per month</p>
        <p className="pb-2">Send up to 2 transfers per month</p>
        <p className="pb-2">Send up to 2 transfers per month</p>
        <p className="pb-2">Send up to 2 transfers per month</p>
        
      </div>

      <div className="flex justify-center pb-10 pt-16">
        <button className="bg-black py-2 text-white rounded-3xl px-20">Get Started</button>
      </div>
    </div>
  );
};

export default Cart;
