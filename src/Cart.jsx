import React, { useState } from "react";
import clothe from "./images/clothe.png";
import { Input } from "@material-tailwind/react";

function ProductCard({
  id,
  name,
  price,
  quantity,
  totalPrice,
  onDelete,
  onQuantityChange,
}) {
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    onQuantityChange(id, newQuantity);
  };

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
          <h2 className="font-semibold">{name}</h2>
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
            {price.toLocaleString()} <b className="text-slate-800 text-sm">$</b>
          </span>
          <span className="block text-indigo-700">60% OFF </span>
        </div>
      </div>
      {/* <!-- buttons and options  --> */}
      <div className="w-full flex justify-evenly pb-3 items-center">
        <button
          className="bg-indigo-500 font-bold text-indigo-50 px-4 py-2 rounded-lg text-center transition-colors hover:bg-indigo-600"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
        <div className="font-semibold text-xl">
          <div>
            <label htmlFor={`Quantity-${id}`} className="sr-only">
              Quantity
            </label>

            <div className="flex items-center gap-1">
              <button
                type="button"
                className="w-10 h-10 text-3xl leading-10 text-indigo-600 transition hover:opacity-75"
                onClick={() => {
                  if (quantity > 1) {
                    onQuantityChange(id, quantity - 1);
                  }
                }}
              >
                -
              </button>

              <input
                type="number"
                id={`Quantity-${id}`}
                value={quantity}
                className="h-10 w-16 rounded outline-none border-indigo-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none text-black"
                onChange={handleQuantityChange}
              />

              <button
                type="button"
                className="w-10 h-10 text-3xl leading-10 text-indigo-600 transition hover:opacity-75"
                onClick={() => {
                  onQuantityChange(id, quantity + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center font-semibold">
        Total price: {totalPrice.toLocaleString()}{" "}
        <b className="text-slate-800 text-sm">$</b>
      </div>
    </div>
  );
}

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Winter Thick Hooded", price: 23453, quantity: 1 },
    { id: 2, name: "Summer Cotton T-shirt", price: 1500, quantity: 2 },
    { id: 3, name: "Leather Boots", price: 7899, quantity: 1 },
  ]);
  const [totalPrice, setTotalPrice] = useState(
    cart.reduce((total, item) => total + item.price * item.quantity, 0)
  );

  const handleDelete = (id) => {
    const itemToRemove = cart.find((item) => item.id === id);
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - itemToRemove.price * itemToRemove.quantity
    );
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    setTotalPrice((prevTotalPrice) => {
      const itemToUpdate = cart.find((item) => item.id === id);
      const priceDiff =
        itemToUpdate.price * (newQuantity - itemToUpdate.quantity);
      return prevTotalPrice + priceDiff;
    });
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg mb-4">Your cart is empty</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              totalPrice={item.price * item.quantity}
              onDelete={handleDelete}
              onQuantityChange={handleQuantityChange}
            />
          ))}
          <div className="text-center font-semibold">
            Total price: {totalPrice.toLocaleString()}{" "}
            <b className="text-slate-800 text-sm">$</b>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
