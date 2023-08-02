import React from "react";

const Row = (props) => {
  return (
    <div className=" flex flex-wrap justify-center py-4  px-8 items-center mb-10  gap-x-7 gap-y-16 ">
      {props.children}
    </div>
  );
};

export default Row;
