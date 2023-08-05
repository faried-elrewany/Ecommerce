import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { AiTwotoneDelete, AiFillStar } from "react-icons/ai";

export function ProductModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <IconButton
        size="sm"
        color="red"
        variant="text"
        className="rounded-full"
        onClick={handleOpen}
      >
        <AiTwotoneDelete className="h-6 w-6 text-red-400" />
      </IconButton>
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
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>حذف</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
