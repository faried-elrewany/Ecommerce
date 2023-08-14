import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function CardElement({ item }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <Card className="w-64 shadow-xl mt-6 ">
        <CardHeader floated={true} color="blue-gray" className="shadow-2xl ">
          <img
            className="w-60 h-60 object-contain  transition duration-500 group-hover:scale-105"
            src={item.imageCover}
            alt="ui/ux review check"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
          <IconButton
            size="sm"
            color="red"
            variant="text"
            className="!absolute top-4 end-4 rounded-full z-10"
            onClick={handleLikeClick}
          >
            {isLiked ? (
              <HeartIcon className="h-6 w-6" />
            ) : (
              <HeartIconOutline className="h-6 w-6" />
            )}
          </IconButton>
        </CardHeader>
        <CardBody className="px-6 pt-4 pb-2">
          <div className="mb-0 flex flex-col  ">
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-bold m-0 p-0"
            >
              {item.title}
            </Typography>
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-light text-sm"
            >
              {item.description.length > 60
                ? item.description.slice(0, 60) + "..."
                : item.description}
            </Typography>
            <div className="flex justify-between items-cente w-full ">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium text-red-900 m-2"
              >
                {item.price + " جنية "}
              </Typography>
              <Typography
                color="blue-gray"
                className="flex items-center gap-1 font-normal"
              >
                <AiFillStar className="-mt-0.5 h-5 w-5 text-yellow-700" />
                {item.ratingsQuantity}
              </Typography>
            </div>
          </div>
        </CardBody>
        <CardFooter className="pt-0 m-0">
          <Link to={`/products/${item._id}`}>
            <Button size="md" color="red" fullWidth={true}>
              Buy Now
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
