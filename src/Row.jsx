import React from "react";

const Row = (props) => {
  return (
    <div className=" flex flex-wrap justify-center  p-5 items-center mb-10  gap-x-20 gap-y-16 ">
      {props.children}
    </div>
  );
};

export default Row;
