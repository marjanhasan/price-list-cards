import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-amber-100 mt-4 rounded-md p-4 flex flex-col">
      <div className="text-center">
        <h2>
          <span className="text-5xl font-extrabold text-blue-700">
            {price.price}
          </span>
          <span className="text-2xl">/month</span>
        </h2>
        <h2 className="text-2xl font-bold"> {price.name} </h2>
      </div>
      <p className="text-lg font-semibold">Features: </p>
      {price.features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
      <button className="bg-blue-500 hover:bg-blue-700 w-full py-2 rounded-md mt-auto text-white font-bold">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
