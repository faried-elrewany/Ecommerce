import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
function ProductCard({ productName, productPrice, productImage }) {
  const [quantity, setQuantity] = useState(2);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src={productImage}
        alt="product-image"
        className="w-full rounded-lg sm:w-40"
      />
      <div className="sm:ms-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{productName}</h2>
          <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
        </div>
        <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
              -
            </span>
            <input
              className="h-8 w-8 border bg-white text-center text-xs outline-none"
              type="number"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
            />
            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
              +
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-sm">259.000 ₭</p>
            <XMarkIcon className="h-6 w-6 text-gray-900" />
          </div>
        </div>
      </div>
    </div>
  );
}
function CartSummary() {
  return (
    <div className="bg-white shadow-md rounded-lg px-4 py-6">
      <h2 className="text-lg font-bold mb-4">Cart Summary</h2>
      <div className="flex justify-between mb-2">
        <p className="text-gray-600">Subtotal</p>
        <p className="text-gray-800 font-bold">518.000 ₭</p>
      </div>
      <div className="flex justify-between mb-2">
        <p className="text-gray-600">Shipping</p>
        <p className="text-gray-800 font-bold">50.000 ₭</p>
      </div>
      <div className="flex justify-between mb-2">
        <p className="text-gray-600">Tax</p>
        <p className="text-gray-800 font-bold">77.700 ₭</p>
      </div>
      <div className="border-t border-gray-400 my-4"></div>
      <div className="flex justify-between">
        <p className="text-gray-600 font-bold">Total</p>
        <p className="text-gray-800 font-bold">645.700 ₭</p>
      </div>
      <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-6 w-full hover:bg-blue-600 transition duration-150 ease-in-out">
        Checkout
      </button>
    </div>
  );
}

function CartItems() {
  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center gap-2 px-6 md:flex gap-5 xl:px-0">
        <div className="rounded-lg mb-2 md:w-2/3">
          <ProductCard
            productName="Nike Air Max 2019"
            productPrice="259.000 ₭"
            productImage="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <ProductCard
            productName="Adidas Yeezy Boost 350 V2"
            productPrice="220.000 ₭"
            productImage="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
          />
        </div>

        <div className="w-full md:w-1/3">
          <CartSummary />
        </div>
      </div>
    </div>
  );
}

export default CartItems;
