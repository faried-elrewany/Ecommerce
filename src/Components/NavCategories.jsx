import { Link } from "react-router-dom";

const SubCategory = ({ subCategories, imageUrl }) => {
  return (
    <div className="category-second-list">
      <ul className="category-second-list-ul">
        {subCategories.map((subCategory, index) => (
          <li key={index} className="category-second-item">
            <a href="">{subCategory}</a>
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
  const categories = [
    {
      name: "الهواتف الذكية",
      subCategories: [
        "ايفون 10",
        "جالاكسي نوت 10",
        "كوتورولا One",
        "جلاكسي A80",
        "جلاكسي M",
        "هواوي P30",
      ],
      imageUrl: "https://i.ibb.co/Vvndkmy/banner.jpg",
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
            {categories.map((category, index) => (
              <li key={index} className="all-category-list-item">
                <a href="" className="all-category-list-link">
                  {category.name} <i className="fas fa-angle-right"></i>
                </a>
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
          {categories.map((category, index) => (
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
