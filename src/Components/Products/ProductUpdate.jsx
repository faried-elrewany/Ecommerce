import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import { AiTwotoneDelete, AiFillStar } from "react-icons/ai";
import { ProductModal } from "./ProductModal";
const ProductUpdate = ({
  imageUrl,
  title,
  rating,
  description,
  navigateUrl,
}) => {
  const navigate = useNavigate();

  return (
    <Card className="w-72 shadow-xl ">
      <div className="flex justify-between items-center px-4">
        <ProductModal />
        <a href="#">تعديل</a>
      </div>
      <CardHeader floated={false} color="blue-gray">
        <img
          className="w-60 h-60 object-contain  transition duration-500 group-hover:scale-105"
          src={imageUrl}
          alt="product image"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
      </CardHeader>
      <CardBody>
        <div className="mb-1 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {title}
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1 font-normal"
          >
            <AiFillStar className="-mt-0.5 h-5 w-5 text-yellow-700" />
            {rating}
          </Typography>
        </div>
        <Typography color="gray">{description}</Typography>
      </CardBody>
    </Card>
  );
};

export default ProductUpdate;
