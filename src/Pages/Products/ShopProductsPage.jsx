import React from "react";
import { FilterMenu } from "../../Components/Products/FiltersComponents.jsx";
import FiltersDrawer from "../../Components/Products/FiltersDrawer.jsx";
import Row from "../../Components/Utility/Row";
import CardElement from "../../Components/Products/Card.jsx";
import NavCategories from "../../Components/NavCategories";

const ShopProductsPage = () => {
  return (
    <>
      <NavCategories />
      <div className="flex my-2 justify-around items-center shadow py-4">
        <FilterMenu />
        <FiltersDrawer />
      </div>
      <Row>
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
      </Row>
    </>
  );
};

export default ShopProductsPage;
