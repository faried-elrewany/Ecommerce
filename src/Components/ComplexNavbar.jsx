import React, { useEffect, useState, useCallback } from "react";
import { NavLink, Link } from "react-router-dom";
import NavbarSearchHook from "../hook/search/navbar-search-hook";
import GetAllUserCartHook from "../hook/cart/get-all-user-cart-hook";
import { Badge, Button } from "@material-tailwind/react";
function ContactInfo(props) {
  return (
    <div className="header-content-top">
      <div className="content">
        {props.info.map((item, index) => (
          <span key={index}>
            <i className={item.icon}></i> {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}

function Logo(props) {
  return (
    <strong className="logo">
      <NavLink to="/">
        <i className="fa-solid fa-f"></i>
      </NavLink>
    </strong>
  );
}

function Search(props) {
  const [OnChangeSearch, searchWord] = NavbarSearchHook();

  return (
    <label className="open-search" htmlFor="open-search">
      <i className={props.icon}></i>
      <input
        className="input-open-search"
        id="open-search"
        type="checkbox"
        name="menu"
      />
      <div className="search">
        <button className="button-search">
          <i className={props.icon}></i>
        </button>
        <input
          type="text"
          placeholder={props.placeholder}
          className="input-search"
          onChange={OnChangeSearch}
          value={searchWord}
        />
      </div>
    </label>
  );
}

function NavContent(props) {
  const [itemsNum] = GetAllUserCartHook();

  const getUser = useCallback(() => {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    }
    return "";
  }, []);

  const [user, setUser] = useState(getUser);

  useEffect(() => {
    setUser(getUser());
  }, [getUser]);
  let showIcons = false;
  let accountMenu = {};
  if (user == "") {
    showIcons = false;
    accountMenu = {
      text: "مرحبا, تسجيل الدخول",
      action: "انشاء حساب",
      items: [
        { text: " تسجيل الدخول", link: "/login" },
        { text: "انشاء حساب", link: "/register" },
      ],
    };
  } else {
    showIcons = true;

    accountMenu = {
      text: user ? "" + user.name : "",
      items: [
        user.role === "admin"
          ? { text: " لوحة التحكم", link: "/admin/all-orders" }
          : { text: "الصفحة الشخصية", link: "/user/wishlist" },
      ],
    };
  }

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
  };
  return (
    <nav className="nav-content">
      <ul className="nav-content-list">
        {showIcons && (
          <>
            <li className="nav-content-item">
              <NavLink className="nav-content-link" to="user/wishlist">
                <i className="fa fa-heart"></i>
              </NavLink>
            </li>
            <li className="nav-content-item">
              <Badge
                content={itemsNum ? itemsNum : 0}
                placement="top-start"
                color="gray"
              >
                <NavLink className="nav-content-link" to="/cart">
                  <i className="fa fa-shopping-cart"></i>
                </NavLink>
              </Badge>
            </li>
          </>
        )}
        <li className="nav-content-item account-login">
          <label
            className="open-menu-login-account"
            htmlFor="open-menu-login-account"
          >
            <input
              className="input-menu"
              id="open-menu-login-account"
              type="checkbox"
              name="menu"
            />
            <i className="fa fa-user-circle"></i>
            <span className="login-text">
              {accountMenu.text} <strong>{accountMenu.action}</strong>
            </span>
            <span className="item-arrow"></span>
            <ul className="login-list">
              {accountMenu.items.map((item, index) => (
                <NavLink to={item.link} key={index}>
                  <li className="login-list-item">{item.text}</li>
                </NavLink>
              ))}
              {user !== "" ? (
                <NavLink to={"/"}>
                  <li onClick={logOut} className="login-list-item">
                    تسجيل الخروج
                  </li>
                </NavLink>
              ) : (
                ""
              )}
            </ul>
          </label>
        </li>
      </ul>
    </nav>
  );
}

function Header() {
  const contactInfo = [
    { icon: "fas fa-phone-square-alt", text: "+201552805430" },
    { icon: "fas fa-envelope-square", text: "fariedelrewany@email.com" },
  ];

  const logoIcon = "fa fa-heart";
  const searchIcon = "fa fa-search";
  const searchPlaceholder = " م الذي تبحث عنه";

  const navItems = [
    { icon: "fa fa-heart", link: "user/wishlist" },
    { icon: "fa fa-shopping-cart", link: "/cart" },
  ];
  const accountMenu = {
    text: "مرحبا, تسجيل الدخول",
    action: "انشاء حساب",
    items: [
      { text: "انشاء حساب", link: "/register" },
      { text: " تسجيل الدخول", link: "/login" },
    ],
  };

  return (
    <header className="header">
      <ContactInfo info={contactInfo} />
      <Container>
        <Logo />
        <Search icon={searchIcon} placeholder={searchPlaceholder} />
        <NavContent items={navItems} />
      </Container>
    </header>
  );
}

function Container(props) {
  return <div className="container-header">{props.children}</div>;
}

export default Header;
