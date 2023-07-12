import { Input } from "@material-tailwind/react";

export default function InputComponent({ label, width }) {
  return (
    <div className={width}>
      <Input color="red" label={label} />
    </div>
  );
}
