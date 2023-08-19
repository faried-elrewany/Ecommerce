import React, { useState } from "react";
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";
import { HiStar } from "react-icons/hi";
import { ToastContainer } from "react-toastify";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import DeleteRateHook from "../../hook/review/delete-rate-hook";
import EditRateHook from "../../hook/review/edit-rate-hook";
import ReactStars from "react-rating-stars-component";
const ReviewPost = ({ review }) => {
  const [isUser, handelDelete, handleShow, handleClose, showDelete] =
    DeleteRateHook(review);
  const [
    showEdit,
    handleCloseEdit,
    handleShowEdit,
    handelEdit,
    onChangeRateText,
    newRateText,
    OnChangeRateValue,
    newRateValue,
  ] = EditRateHook(review);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((prev) => !prev);

  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: newRateValue,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      OnChangeRateValue(newValue);
    },
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
            className="mr-1 outline-none"
          >
            <span>تراجع</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handelDelete}>
            <span>حذف</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <Dialog
        open={showEdit}
        handler={handleShowEdit}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader> تعديل التقييم</DialogHeader>

        <DialogBody divider className=" flex flex-col gap-4">
          <ReactStars {...setting} outline="none" className="outline-none" />

          <Input
            color="red"
            label="اسم المنتج"
            value={newRateText}
            onChange={onChangeRateText}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleCloseEdit}
            className="mr-1 outline-none"
          >
            <span>تراجع</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handelEdit}>
            <span>تاكيد التعديل</span>
          </Button>
        </DialogFooter>
      </Dialog>

      <div className="flex flex-col gap-2 p-4 border border-t-red-200 border-b-red-200">
        <div className="flex gap-2 items-center">
          {review && review.user.name}
          <HiStar className="text-yellow-700" />
          {review && review.rating}
        </div>
        <p className="">{review && review.review}</p>
        <div className="flex justify-end gap-4  ">
          {isUser === true ? (
            <>
              <AiTwotoneDelete
                onClick={handleOpen}
                className="cursor-pointer text-gray-600"
              />
              <AiFillEdit
                onClick={handleShowEdit}
                className="cursor-pointer text-gray-600"
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ReviewPost;
