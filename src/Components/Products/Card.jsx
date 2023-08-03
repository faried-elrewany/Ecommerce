import labtop from "../../images/labtop.png";
import clothe from "../../images/clothe.png";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";

export default function CardElement() {
  const navigate = useNavigate();

  return (
    <Card className=" w-64 shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          className="w-60 h-52   object-contain object-center transition duration-500 group-hover:scale-105 "
          src={labtop}
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 end-4 rounded-full"
        >
          <HeartIcon className="h-6 w-6" />
        </IconButton>
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            Wooden House, Florida
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
            5.0
          </Typography>
        </div>
        <Typography color="gray">
          Enter a freshly updated and thoughtfully furnished peaceful home
        </Typography>
      </CardBody>
      <CardFooter className="pt-1">
        <Button
          onClick={() => navigate("/products/:id")}
          size="md"
          color="red"
          fullWidth={true}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
