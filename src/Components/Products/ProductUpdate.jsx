import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { deleteProducts } from "../../redux/actions/productsAction";
import { Link } from "react-router-dom";
import { AiTwotoneDelete, AiFillStar } from "react-icons/ai";
import { getAllProducts } from "../../redux/actions/productsAction";
const ProductUpdate = ({ item }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((prev) => !prev);
  const handelDelete = async () => {
    await dispatch(deleteProducts(item._id));
    setOpen(!open);
    // window.location.reload();
    await dispatch(getAllProducts(2));
  };

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>تاكيد الحذف</DialogHeader>
        <DialogBody divider>هل انتا متاكد من عملية الحذف للمنتج</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>تراجع</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handelDelete}>
            <span>حذف</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <Card className="w-64 shadow-xl ">
        <div className="flex justify-between items-center px-4">
          <IconButton
            size="sm"
            color="red"
            variant="text"
            className="rounded-full"
            onClick={handleOpen}
          >
            <AiTwotoneDelete className="h-6 w-6 text-red-400" />
          </IconButton>
          <Link to={`/admin/editproduct/${item._id}`}>تعديل</Link>
        </div>
        <CardHeader floated={false} color="blue-gray">
          <img
            className="w-60 h-60 object-contain  transition duration-500 group-hover:scale-105"
            src={item.imageCover}
            alt="product image"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
        </CardHeader>
        <CardBody>
          <div className="mb-1 flex flex-col gap-4 ">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              {item.title}
            </Typography>
            <div className="flex justify-between items-cente w-full ">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
              >
                {item.price}
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
          {/* <Typography color="gray">{description}</Typography> */}
        </CardBody>
      </Card>
    </>
  );
};

export default ProductUpdate;
