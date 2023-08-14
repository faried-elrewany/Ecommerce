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
        <img src={imageUrl} alt="product menu" />
      </div>
    </div>
  );
};

const NavContainer = () => {
  const [category, loading, pageCount, getPage] = AllCategoryHook();
  let categoryName = [];
  if (category && category.data) {
    categoryName = category.data
      .slice(0, 6)
      .map(({ name }) => ({ name: name }));
    console.log(categoryName);
  }
  const categories = [
    {
      name: "الهواتف الذكية",
    },
    { name: "اثاث منزلي" },
    { name: "الالعاب" },
    { name: "الحوسبة" },
    { name: "العاب الكمبيوتر" },
    { name: "الازياءوالاحذية" },
  ];

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
            {categoryName &&
              categoryName.map((category, index) => (
                <li key={index} className="all-category-list-item">
                  <Link to="/" className="all-category-list-link">
                    {category.name} <i className="fas fa-angle-right"></i>
                  </Link>
                  {category.subCategories && (
                    <SubCategory
                      subCategories={category.subCategories}
                      imageUrl={category.imageUrl}
                    />
                  )}
                </li>
              ))}
          </ul>
        </label>
      </nav>
      <nav className="featured-category">
        <ul className="nav-row">
          {categoryName &&
            categoryName.map((category, index) => (
              <li key={index} className="nav-row-list">
                <Link to="/" className="nav-row-list-link">
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
