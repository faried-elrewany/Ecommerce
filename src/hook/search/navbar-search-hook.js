import React, { useState, useEffect } from "react";
import ViewSearchProductsHook from "./../products/view-search-products-hook";
import { useNavigate } from "react-router-dom";
const NavbarSearchHook = () => {
  const [items, pagination, onPress, getProduct] = ViewSearchProductsHook();
  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState("");

  //when user type search word
  const OnChangeSearch = (e) => {
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);

    const path = window.location.pathname;
    if (path != "/products") {
      // but i use react routing
      //   window.location.href = "/products";
      navigate("/products");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [searchWord]);
  return [OnChangeSearch, searchWord];
};

export default NavbarSearchHook;
