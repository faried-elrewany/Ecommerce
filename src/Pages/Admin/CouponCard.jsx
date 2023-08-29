import CouponCardHook from "../../hook/coupon/coupon-card-hook";
import { Link } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";

export default function CouponCard({ coupon }) {
  const [formatDate, dateString, show, handleClose, handleShow, handelDelete] =
    CouponCardHook(coupon);

  return (
    <>
      <Dialog
        open={show}
        handler={handleShow}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>تاكيد الحذف</DialogHeader>
        <DialogBody divider>هل انت متاكد من عملية الحذف للمنتج</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1 outline-none"
          >
            <span>تراجع</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handelDelete}>
            <span>حذف</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <div className="w-11/12  flex flex-col bg-gray-200 rounded-lg gap-4 p-4 justify-content">
        <div className="flex items-center justify-between">
          <p></p>
          <div className="flex justify-center items-center gap-2">
            <a href="#" className="flex justify-center items-center gap-2">
              <AiTwotoneDelete
                onClick={handleShow}
                className="h-6 w-6 text-red-500"
              />
            </a>
            <Link
              to={`/admin/editcoupon/${coupon._id}`}
              className="flex justify-center items-center gap-2"
            >
              <AiFillEdit className="h-6 w-6 text-red-500" />
            </Link>
          </div>
        </div>
        <p className="text-xl bold">
          اسم الكوبون : <span className="text-lg">{coupon.name}</span>
        </p>
        <p className="text-xl bold">
          تاريخ الانتهاء :{" "}
          <span className="text-lg">{formatDate(dateString)}</span>
        </p>
        <p className="text-xl bold">
          نسبة الخصم : <span className="text-lg"> {coupon.discount} %</span>
        </p>
      </div>
    </>
  );
}
