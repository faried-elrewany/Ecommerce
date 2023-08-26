import { Spinner } from "@material-tailwind/react";

export default function Loading() {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <Spinner color="red" className="h-6 w-6" />
    </div>
  );
}
