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
import { ToastContainer } from "react-toastify";
import ProductCardHook from "../../hook/products/product-card-hook";
export default function CardElement({ item, favProd }) {
  const [removeToWishListData, addToWishListData, handelFav, favImg] =
    ProductCardHook(item, favProd);
  return (
    <>
      <Card className="w-64 shadow-xl mt-6 ">
        <Link to={`/products/${item._id}`}>
          <CardHeader floated={true} color="blue-gray" className="shadow-2xl ">
            <img
              loading="lazy"
              className="w-60 h-60 object-contain  transition duration-500 group-hover:scale-105"
              src={item.imageCover}
              alt="ui/ux review check"
            />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
          </CardHeader>
        </Link>
        <CardBody className=" relative px-6 pt-4 pb-2">
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
              className="font-light text-sm whitespace-break-spaces"
            >
              {item.description.length > 60
                ? item.description.slice(0, 60) + "..."
                : item.description}
            </Typography>
            <div className=" flex justify-between items-cente w-full ">
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
              <IconButton
                size="sm"
                color="red"
                variant="text"
                className=" !absolute top-4 end-4 rounded-full z-40"
                onClick={handelFav}
              >
                {favImg && favImg == "HeartIcon" ? (
                  <HeartIcon className="h-6 w-6 text-red-400" />
                ) : (
                  <HeartIconOutline className="h-6 w-6 text-red-400" />
                )}
              </IconButton>
            </div>
          </div>
        </CardBody>

        <ToastContainer />
      </Card>
    </>
  );
}
