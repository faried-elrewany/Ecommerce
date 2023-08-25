import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsByCategory } from "./../../redux/actions/productsAction";
const ViewAllProductsCategoryHook = (catID) => {
  let limit = 8;
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const getProduct = async () => {
    setLoading(true);

    await dispatch(getAllProductsByCategory("", limit, catID));
    setLoading(false);
  };
  useEffect(() => {
    getProduct();
  }, [catID]);

  //when click pagination
  const onPress = async (page) => {
    await dispatch(getAllProductsByCategory(page, limit, catID));
  };

  const allProducts = useSelector((state) => state.allproducts.allProductCat);

  let items = [];
  let pagination = [];
  try {
    if (allProducts && allProducts.data) items = allProducts.data;
    else items = [];
  } catch (e) {}
  try {
    if (allProducts && allProducts.paginationResult)
      pagination = allProducts.paginationResult.numberOfPages;
    else pagination = [];
  } catch (e) {}

  return [items, pagination, onPress, loading];
};

export default ViewAllProductsCategoryHook;
