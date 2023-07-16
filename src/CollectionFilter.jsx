import FiltersDrawer from "./FiltersDrawer.jsx";
import React from "react";
import { FilterMenu } from "./FiltersComponents.jsx";
import Header from "./ComplexNavbar.jsx";
import Row from "./Components/Row.jsx";
import Card from "./Components/Card.jsx";
import labtop from "./images/labtop.png";
import Pagination from "./Pagination.jsx";

const CollectionFilter = () => {
  return (
    <>
      <Header />
      <div className="flex my-2 justify-around items-center shadow py-4">
        <FilterMenu />
        <FiltersDrawer />
      </div>
      <Row>
        <Card
          imageSrc={labtop}
          title="السلام عليكم ورحمة الله وبركاته"
          price="150"
          rating={"4.5"}
        />
        <Card
          imageSrc={labtop}
          title="السلام عليكم ورحمة الله وبركاته"
          price="150"
          rating={"4.5"}
        />
        <Card
          imageSrc={labtop}
          title="السلام عليكم ورحمة الله وبركاته"
          price="150"
          rating={"4.5"}
        />
        <Card
          imageSrc={labtop}
          title="السلام عليكم ورحمة الله وبركاته بسم الله الرحمن الرحيم"
          price="150"
          rating={"4.5"}
        />
      </Row>
      <Pagination />
    </>
  );
};

export default CollectionFilter;
