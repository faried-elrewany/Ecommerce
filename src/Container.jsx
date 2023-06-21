import React from "react";

const Container = (props) => {
  return (
    <div className="mx-auto  sm:px-6 md:px-8  bg-slate-100">
      {props.children}
    </div>
  );
};

export default Container;
