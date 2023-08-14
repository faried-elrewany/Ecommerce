import React from "react";

const ProductOptions = () => {
  return (
    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
      <div className="flex">
        <span className="me-3">Color</span>
        <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
        <button className="border-2 border-gray-300 ms-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
        <button className="border-2 border-gray-300 ms-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
      </div>
    </div>
  );
};

export default ProductOptions;
// ده الكومبوونت الي فيه اللون والحجم والتقييم
// برضو خليه دايناميك
