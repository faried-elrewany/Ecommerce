import React from "react";
import clothe from "./images/clothe.png";
import CouponInput from "./Coupon";

function ProductCard() {
  return (
    <div className="rounded-lg mb-3 bg-indigo-50 mx-auto lg:w-2/3">
      <div className="flex flex-col gap-4 justify-around p-3 items-center text-sm md:flex-row lg:text-lg">
        {/* <!--  product image box --> */}
        <div>
          <img className="w-24 lg:w-32" src={clothe} alt=" jacket img" />
        </div>
        {/* <!--  product description  box --> */}
        <div className="text-center mb-2">
          {/* <!-- product title --> */}
          <h2 className="font-semibold">Winter Thick Hooded</h2>
          {/* <!-- product seller --> */}
          <p className="text-sm">
            sold by <i className="text-indigo-700">Faried Fouad Elrewany</i>
          </p>
          {/* <!--  number of product in stock  --> */}
          <p className="text-sm font-bold text-red-500">Only 2 left in stock</p>
        </div>
        {/* <!--  product  price  --> */}
        <div className="text-center mb-2">
          <span className="text-2xl font-semibold">
            23,453 <b className="text-slate-800 text-sm">$</b>
          </span>
          <span className="block text-indigo-700">60% OFF </span>
        </div>
      </div>
      {/* <!-- buttons and options  --> */}
      <div className="w-full flex justify-evenly pb-3 items-center">
        <button className="bg-indigo-500 font-bold text-indigo-50 px-4 py-2 rounded-lg text-center transition-colors hover:bg-indigo-600">
          Delete
        </button>
        <div className="font-semibold text-xl">
          <div>
            <label htmlFor="Quantity" className="sr-only">
              Quantity
            </label>

            <div className="flex items-center gap-1">
              <button
                type="button"
                className="w-10 h-10 text-3xl leading-10 text-indigo-600 transition hover:opacity-75"
              >
                -
              </button>

              <input
                type="number"
                id="Quantity"
                value="1"
                className="h-10 w-16 rounded outline-none border-indigo-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
              />

              <button
                type="button"
                className="w-10 h-10 text-3xl leading-10 text-indigo-600 transition hover:opacity-75"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Cart = () => {
  return (
    <>
      <div className="mb-3 text-center mx-auto text-xl p-2 font-semibold bg-indigo-200 lg:w-2/3">
        <i className="fa-solid fa-cart-shopping mr-2"></i>
        Congrats you're eligible for a Coupon Code in this order
      </div>

      <div className="grid grid-cols-1 px-2">
        <p className="mx-auto font-bold lg:w-2/3 mb-2">My Cart Items</p>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      {/* <!-- checkout with coupons  --> */}
      <div className="w-96 text-slate-700 font-semibold text-lg rounded-lg border-4 border-indigo-400 mb-4 mx-auto lg:w-2/3">
        <div className="flex justify-around items-center py-3 bg-indigo-200">
          <p>Amount</p>
          <span className="text-2xl font-semibold">
            250<b className="text-slate-800 text-sm">$</b>
          </span>
        </div>

        <div className="flex justify-center py-3 px-9 items-center ">
          <CouponInput />
        </div>
        <div className="flex justify-around border-t-2 border-slate-500 py-3 items-center bg-indigo-200">
          <p className="text-2xl tracking-wide">Total Amount</p>
          <span className="text-2xl font-semibold">
            228<b className="text-slate-800 text-sm">$</b>
          </span>
        </div>

        <div className="mt-4 text-center mb-3">
          <button className="py-2 rounded px-3 transition-colors bg-indigo-400 hover:bg-indigo-600 text-white mx-auto w-2/3 text-sm md:text-lg">
            CHECKOUT
          </button>
        </div>
      </div>
      {/* <!-- thank you box  --> */}
      <div className="container flex items-center justify-around text-slate-700 font-semibold text-lg rounded-lg mb-4 mx-auto lg:w-2/3">
        <p>
          Thank you <b className="text-indigo-700">reka</b>
        </p>
        <p>
          ORDER <span> #5624</span>
        </p>
      </div>
    </>
  );
};

export default Cart;
