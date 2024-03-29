import { Input } from "@material-tailwind/react";

export function InputComponent({ label, width, name, onchange }) {
  return (
    <div className={width}>
      <Input color="red" label={label} value={name} onChange={onchange} />
    </div>
  );
}

import { Textarea } from "@material-tailwind/react";

export function TextArea({ label, width }) {
  return (
    <div className={width}>
      <Textarea color="red" label={label} />
    </div>
  );
}
