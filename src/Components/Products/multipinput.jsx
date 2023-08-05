import React, { useState } from "react";
import MultiImageInput from "react-multiple-image-input";
import regeneratorRuntime from "regenerator-runtime";
function Multipinput({ images, setImages }) {
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };

  return <MultiImageInput images={images} setImages={setImages} />;
}

export default Multipinput;
