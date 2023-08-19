import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductWishList } from "./../../redux/actions/wishListAction";

const CardContainerHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [favProd, setFavProd] = useState([]);
  let res = [];
  res = useSelector((state) => state.addToWishListReducer.allWishList);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getProductWishList());
      setLoading(false);
    };

    get();
  }, []);

  useEffect(() => {
    if (loading === false) {
      if (res && res.data.length >= 1) {
        setFavProd(res.data.map((item) => item._id));
      } else setFavProd([]);
    }
  }, [loading]);

  return [favProd];
};

export default CardContainerHook;
