import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

import {
  Coupon,
  InputDisabled,
  ButtonAction,
  Colors,
  Quantity,
} from "../../Components/Products/Coupon.jsx";
import labtop from "../../images/labtop.png";

export function ProductCard({
  image,
  category,
  description,
  brand,
  colors,
  price,
}) {
  return (
    <div className="flex rounded-lg flex-col md:flex-row p-2 mb-2 bg-red-50 min-w-[250px]">
      <div className="w-full flex md:w-64 justify-center items-center">
        <img
          className="md:w-3/4 object-contain object-center"
          src={image}
          alt={`${brand} ${category}`}
        />
      </div>
      <div className="w-full flex-col gap-y-4">
        <div className="flex justify-between items-center mb-2">
          <div className="font-semibold">{category}</div>
          <button>
            <TrashIcon className="h-8 w-8 text-red-400" />
          </button>
        </div>
        <p className="text-small mb-2">{description}</p>
        <p>
          الماركة: <span>{brand}</span>
        </p>
        <Colors colors={colors} />
        <div className="flex justify-between items-center">
          <Quantity />
          <p>
            <span>{price}</span>جنية
          </p>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
};
const CartPage = () => {
  return (
    <div>
      <h2 className="text-red-400 mt-4 text-2xl font-bold ">عربة التسوق </h2>
      {/* layout conatiner */}

      <div className=" overflow-hidden flex items-center justify-center flex-col md:flex-row w-full gap-4  p-4 ">
        {/* right side */}
        <div className="flex-col w-full ">
          {/*  start component */}

          <ProductCard
            image={labtop}
            category="اجهزة الكترونية"
            brand="سامسونج"
            colors={["red"]}
            price={3000}
          />
          <ProductCard
            image={labtop}
            category="اجهزة الكترونية"
            brand="سامسونج"
            colors={["red"]}
            price={3000}
          />
          {/*  end component */}
        </div>

        {/* left side */}
        <div className=" md:self-start w-64 rounded-md p-2 flex flex-col justify-center items-center gap-2 ">
          <Coupon />
          <InputDisabled value={15020} className="w-full" />
          <ButtonAction className="w-full" title="اتمام الشراء" />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
