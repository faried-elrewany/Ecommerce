import React from "react";
import { Select, Option } from "@material-tailwind/react";

function DynamicSelect({ label, options }) {
  return (
    <Select dir="ltr" variant="outlined" label={label} color="red">
      {options.map((option) => (
        <Option key={option}>{option}</Option>
      ))}
    </Select>
  );
}

export default function SelectOptions() {
  const versionOptions = [
    "Material Tailwind HTML",
    "Material Tailwind React",
    "Material Tailwind Vue",
    "Material Tailwind Angular",
    "Material Tailwind Svelte",
  ];

  return (
    <div className="flex flex-col w-56 ">
      <DynamicSelect label="Select Version" options={versionOptions} />
    </div>
  );
}
