import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productsAction";
import { getAllProductsPage } from "./../../redux/actions/productsAction";

const ViewProductAdminHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts(12));
  }, []);

  const onPress = async (page) => {
    await dispatch(getAllProductsPage(page, 12));
  };
  let items = [];
  let pagination = [];
  const allProducts = useSelector((state) => state.allproducts.allProducts);
  const loading = useSelector((state) => state.allproducts.loading);
  try {
    if (allProducts.data) items = allProducts.data;
    else items = [];

    if (allProducts.paginationResult)
      pagination = allProducts.paginationResult.numberOfPages;
    else pagination = [];
  } catch (e) {}
  return [loading, items, pagination, onPress];
};

export default ViewProductAdminHook;
