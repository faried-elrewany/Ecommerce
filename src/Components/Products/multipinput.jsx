import React, { useState } from "react";
import MultiImageInput from "react-multiple-image-input";
import regeneratorRuntime from "regenerator-runtime";
function Multipinput() {
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };

  const [images, setImages] = useState({});

  return (
    <MultiImageInput
      images={images}
      setImages={setImages}
      cropConfig={{ crop, ruleOfThirds: true }}
    />
  );
}

export default Multipinput;
