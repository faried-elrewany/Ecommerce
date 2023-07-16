import React from "react";
import { FilterMenu } from "../../Components/FiltersComponents";
import FiltersDrawer from "../../Components/FiltersDrawer";
import Row from "../../Components/Row";
import CardElement from "../../Components/Card";
import Pagination from "../../Components/Pagination";
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
      <Pagination />
    </>
  );
};

export default ShopProductsPage;
