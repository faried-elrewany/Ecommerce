import React from "react";

const Container = (props) => {
  return (
    <div className="mx-auto mt-0  sm:px-6 md:px-8  bg-slate-100 overflow-hidden">
      {props.children}
    </div>
  );
};

export default Container;
