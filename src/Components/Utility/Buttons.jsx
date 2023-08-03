import { Button } from "@material-tailwind/react";

export function ButtonOutlined({ title, href }) {
  return (
    <a href={href} className="">
      <Button color="red" variant="outlined">
        {title}
      </Button>
    </a>
  );
}
export function ButtonFilled({ title }) {
  return (
    <a href="#buttons-with-link" className="">
      <Button color="red" variant="filled">
        {title}
      </Button>
    </a>
  );
}
