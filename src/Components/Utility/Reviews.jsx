import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { HiStar, HiOutlineStar } from "react-icons/hi";
import { TbStarHalfFilled } from "react-icons/tb";
import { Textarea, Button } from "@material-tailwind/react";
import ReviewPost from "./ReviewPost";
import AddRateHook from "../../hook/review/add-rate-hook";
import { useParams } from "react-router-dom";

const Reviews = ({ rateNum, userName, rateAvg }) => {
  const { id } = useParams();
  const [
    OnChangeRateText,
    OnChangeRateValue,
    rateText,
    rateValue,
    user,
    onSubmit,
  ] = AddRateHook(id);

  let name = "";
  if (user) name = user.name;
  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: 5,
    a11y: true,
    isHalf: true,
    emptyIcon: <HiOutlineStar />,
    halfIcon: <TbStarHalfFilled />,
    filledIcon: <HiStar />,
    onChange: (newValue) => {
      OnChangeRateValue(newValue);
    },
  };
  return (
    <>
      <div className="flex flex-col gap-2   bg-gray-50 w-3/4 p-4 ">
        <div className="flex gap-2  items-center">
          <h2 className="font-bold text-xl">التقييمات</h2>
          <div className="flex gap-2 items-center">
            {rateAvg}
            <HiStar className="text-yellow-700" />
          </div>
          <div>({rateNum}) تقييم</div>
        </div>
        <div className="flex gap-4 items-center ">
          <div>{userName}</div>
          <ReactStars {...setting} />
        </div>
        <div className="w-full px-">
          <Textarea
            onChange={OnChangeRateText}
            value={rateText}
            label="تقييمك"
            color="red"
          />
        </div>
        <div className="w-64">
          <Button color="red" onClick={onSubmit}>
            اضف تقييم
          </Button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
