import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToWishList,
  removeProductToWishList,
} from "./../../redux/actions/wishListAction";
import notify from "../../hook/useNotifaction";
const ProductCardHook = (item, favProd) => {
  const dispatch = useDispatch();
  const [favImg, setFavImg] = useState("HeartIconOutline");
  let Fav = false;
  if (favProd) Fav = favProd.some((fitem) => fitem === item._id);
  const [loadingAdd, setLoadingAdd] = useState(true);
  const [loadingRemove, setLoadingRemove] = useState(true);
  const [isFav, setIsFav] = useState(Fav);

  useEffect(() => {
    if (favProd) setIsFav(favProd.some((fitem) => fitem === item._id));
  }, [favProd]);

  const handelFav = () => {
    if (isFav) {
      removeToWishListData();
    } else {
      addToWishListData();
    }
  };

  useEffect(() => {
    if (isFav === true) {
      setFavImg("HeartIcon");
    } else {
      setFavImg("HeartIconOutline");
    }
  }, [isFav]);

  const resAdd = useSelector((state) => state.addToWishListReducer.addWishList);
  const resRemove = useSelector(
    (state) => state.addToWishListReducer.removeWishList
  );

  const addToWishListData = async () => {
    console.log("add");
    setIsFav(true);
    setFavImg("HeartIcon");
    setLoadingAdd(true);
    await dispatch(
      addProductToWishList({
        productId: item._id,
      })
    );
    setLoadingAdd(false);
  };

  const removeToWishListData = async () => {
    setIsFav(false);
    setFavImg("HeartIconOutline");
    setLoadingRemove(true);
    await dispatch(removeProductToWishList(item._id));
    setLoadingRemove(false);
  };

  useEffect(() => {
    console.log("loading add", "add");

    if (loadingAdd === false) {
      if (resAdd && resAdd.status === 200) {
        notify("تمت اضافة المنتج للمفضلة بنجاح", "success");
      } else if (resAdd && resAdd.status === 401) {
        notify("انتا غير مسجل", "error");
      }
    }
  }, [loadingAdd]);

  useEffect(() => {
    console.log("loading remove", "add");

    if (loadingRemove === false) {
      if (resRemove && resRemove.status === "success") {
        notify("تمت حذف المنتج من المفضلة بنجاح", "warn");
      } else if (resAdd && resAdd.status === 401) {
        notify("انتا غير مسجل", "error");
      }
    }
  }, [loadingRemove]);

  return [removeToWishListData, addToWishListData, handelFav, favImg];
};

export default ProductCardHook;
