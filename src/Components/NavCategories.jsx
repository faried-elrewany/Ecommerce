import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AllCategoryHook from "../hook/category/all-category-page-hook";

const SubCategory = ({ subCategories, imageUrl }) => {
  return (
    <div className="category-second-list">
      <ul className="category-second-list-ul">
        {subCategories.map((subCategory, index) => (
          <li key={index} className="category-second-item">
            <Link to="/">{subCategory}</Link>
          </li>
        ))}
      </ul>
      <div className="img-product-menu">
        <img loading="lazy" src={imageUrl} alt="product menu" />
      </div>
    </div>
  );
};

const NavContainer = () => {
  const [category, loading, pageCount, getPage] = AllCategoryHook();
  const [cat, setCat] = useState([]);
  useEffect(() => {
    if (category && category.data) {
      setCat(category.data.slice(0, 6));
      //
    }
    // cat.map(({ _id, name }) => ({ name: name, id: _id }));
    console.log("ahhhhhh", cat);
  }, [category]);

  return (
    <div className="nav-container">
      <nav className="all-category-nav">
        <label className="open-menu-all" htmlFor="open-menu-all">
          <input
            className="input-menu-all"
            id="open-menu-all"
            type="checkbox"
            name="menu-open"
          />
          <span className="all-navigator">
            <i className="fas fa-bars"></i> <span>كل الفئات</span>{" "}
            <i className="fas fa-angle-down"></i>
            <i className="fas fa-angle-up"></i>
          </span>
          <ul className="all-category-list">
            {cat &&
              cat.map((category) => (
                <li key={category._id} className="all-category-list-item">
                  <Link
                    to={`/products/category/${category._id}`}
                    className="all-category-list-link"
                  >
                    {category.name} <i className="fas fa-angle-right"></i>
                  </Link>
                </li>
              ))}
          </ul>
        </label>
      </nav>
      <nav className="featured-category">
        <ul className="nav-row">
          {cat &&
            cat.map((category) => (
              <li key={category._id} className="nav-row-list">
                <Link
                  to={`/products/category/${category._id}`}
                  className="nav-row-list-link"
                >
                  {category.name}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};
function NavCategories() {
  return (
    <>
      <NavContainer />
    </>
  );
}

export default NavCategories;
