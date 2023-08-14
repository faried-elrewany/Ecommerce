import React, { useEffect, useState } from "react";
import { getAllSubCategory } from "../../redux/actions/subcategoryAction";
import { useSelector, useDispatch } from "react-redux";
import notify from "../../hook/useNotifaction";
import { async } from "@babel/runtime/helpers/regeneratorRuntime";

const getAllSubcategoriesHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!navigator.onLine) {
      notify("هناك مشكله فى الاتصال بالانترنت", "warn");
      return;
    }
    const get = async () => {
      await dispatch(getAllSubCategory());
    };
    get();
  }, []);

  //get last sub catgeory state from redux
  let subcategory = [];
  subcategory = useSelector((state) => state.subCategory.subcategory);

  //on save data

  return [subcategory];
};

export default getAllSubcategoriesHook;
