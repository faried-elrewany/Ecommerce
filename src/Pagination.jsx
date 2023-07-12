import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [active, setActive] = React.useState(1);

  const next = () => {
    if (active === 10) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className=" flex justify-center  mb-4">
      <div dir="ltr" className="flex items-center gap-8 ">
        <IconButton
          size="sm"
          variant="outlined"
          color="blue-gray"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
        <Typography color="gray" className="font-normal">
          Page <strong className="text-blue-gray-900">{active}</strong> of{" "}
          <strong className="text-blue-gray-900">10</strong>
        </Typography>
        <IconButton
          size="sm"
          variant="outlined"
          color="blue-gray"
          onClick={next}
          disabled={active === 10}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </div>
    </div>
  );
}
