import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewUser,
  forgetPassword,
  loginUser,
} from "../../redux/actions/authAction";
import { useNavigate, useParams } from "react-router-dom";
import notify from "../useNotifaction";
import {
  createReview,
  deleteReviewOnProduct,
} from "./../../redux/actions/reviewAction";
import { allReviewProduct } from "./../../redux/actions/reviewAction";

const DeleteRateHook = (review) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isUser, setIsUser] = useState(false);
  const [loading, setLoading] = useState(true);

  const [showDelete, setShowDelete] = useState(false);
  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);

  let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    try {
      if (review.user._id === user._id) {
        setIsUser(true);
      }
    } catch (e) {}
  }, []);

  const handelDelete = async () => {
    setLoading(true);
    await dispatch(deleteReviewOnProduct(review._id));
    setLoading(false);
    handleClose();
  };
  const res = useSelector((state) => state.reviewReducer.deleteReview);

  useEffect(() => {
    if (loading === false) {
      if (res === "") {
        notify("تم حذف التقييم بنجاح", "success");
        setTimeout(() => {
          dispatch(allReviewProduct(id, 1, 5));
        }, 1000);
      } else notify("هناك مشكله فى عملية المسح", "error");
    }
  }, [loading]);

  return [isUser, handelDelete, handleShow, handleClose, showDelete];
};

export default DeleteRateHook;
