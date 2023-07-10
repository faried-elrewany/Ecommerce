import React from "react";
import { Input, Button } from "@material-tailwind/react";

export function Coupon() {
  const [coupon, setCoupon] = React.useState("");
  const onChange = ({ target }) => setCoupon(target.value);

  return (
    <div className="relative flex  w-56">
      <Input
        type="text"
        value={coupon}
        color="red"
        onChange={onChange}
        className="pr-20"
        placeholder="كود الخصم"
        size="md"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={coupon ? "red" : "red"}
        disabled={!coupon}
        className="!absolute right-1 top-1 rounded"
      >
        Apply
      </Button>
    </div>
  );
}

export function InputDisabled(props) {
  return (
    <div className="w-56">
      <Input
        className="text-center"
        color="red"
        size="sm"
        label="Disabled"
        disabled
        value={props.value}
      />
    </div>
  );
}

export function ButtonAction(props) {
  return (
    <Button
      className="
    w-56
    outline-none"
      color="red"
    >
      {props.title}
    </Button>
  );
}

export function Colors() {
  return (
    <div className="flex gap-2 my-2">
      <button className="rounded-full h-6 w-6 bg-red-400 hover:bg-red-200"></button>
      <button className="rounded-full h-6 w-6 bg-green-400 hover:bg-green-200"></button>
      <button className="rounded-full h-6 w-6 bg-yellow-400 hover:bg-yellow-200"></button>
    </div>
  );
}

export function Quantity() {
  return (
    <div>
      <div class="flex items-center   ">
        <button
          type="button"
          class="w-10 h-10   text-2xl leading-10 text-gray-600 transition hover:opacity-75"
        >
          -
        </button>

        <input
          type="number"
          id="Quantity"
          value="1"
          class="h-10 outline-none  w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
        />

        <button
          type="button"
          class="w-10 text-2xl h-10 leading-10 text-gray-600 transition hover:opacity-75"
        >
          +
        </button>
      </div>
    </div>
  );
}
