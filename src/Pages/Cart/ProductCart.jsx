import React from "react";
import { AiTwotoneDelete, AiFillStar } from "react-icons/ai";

import { Button } from "@material-tailwind/react";
import DeleteCartHook from "../../hook/cart/delete-cart-hook";
import baseUrl from "../../Api/baseURL";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
export default function ProductCard({ item }) {
  const [
    handelDeleteCart,
    show,
    handleClose,
    handleShow,
    handelDeleteItem,
    itemCount,
    onChangeCount,
    handeleUpdateCart,
  ] = DeleteCartHook(item);
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
        <DialogBody divider>هل انتا متاكد من عملية الحذف للمنتج</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>تراجع</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handelDeleteItem}>
            <span>حذف</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <div className="flex rounded-lg flex-col md:flex-row p-2 mb-2 bg-red-50 min-w-[250px]">
        <div className="w-full flex md:w-64 justify-center items-center">
          <img
            loading="lazy"
            className="md:w-3/4 object-contain object-center"
            src={baseUrl.getUri() + "/products/" + item.product.imageCover}
            alt={item.title}
          />
        </div>
        <div className="w-full flex-col gap-y-4">
          <div className="flex justify-between items-center mb-2 mt-4">
            <div className="font-semibold">
              {item.product.category.name || ""}
            </div>
            <button onClick={handleShow}>
              <AiTwotoneDelete className="h-8 w-8 text-red-400" />
            </button>
          </div>
          <p className="text-small mb-2"> {item.product.title || ""}</p>
          <div className="flex gap-4 items-center">
            <p>
              الماركة: <span>{item.product.brand.name || ""}</span>
            </p>
            {item && item.color === "" ? null : (
              <div
                className="color ms-2  border"
                style={{ backgroundColor: `${item.color}` }}
              ></div>
            )}
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center  gap-4  ">
                <p>الكمية</p>
                <input
                  type="number"
                  id="Quantity"
                  value={itemCount}
                  onChange={onChangeCount}
                  className="h-10 outline-none  w-12 border-transparent text-center "
                />

                <Button onClick={handeleUpdateCart} size="sm" color="red">
                  تاكيد
                </Button>
              </div>
            </div>{" "}
            <p>
              <span>{item.price || 0}</span>جنية
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
