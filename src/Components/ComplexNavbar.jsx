import React from "react";
import { NavLink } from "react-router-dom";
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
      <i className={props.icon}></i>
    </strong>
  );
}

function Search(props) {
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
        />
      </div>
    </label>
  );
}

function NavContent(props) {
  return (
    <nav className="nav-content">
      <ul className="nav-content-list">
        {props.items.map((item, index) => (
          <li className="nav-content-item" key={index}>
            <NavLink className="nav-content-link" to={item.link}>
              <i className={item.icon}></i>
            </NavLink>
          </li>
        ))}
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
              {props.account.text} <strong>{props.account.action}</strong>
            </span>
            <span className="item-arrow"></span>
            <ul className="login-list">
              {props.account.items.map((item, index) => (
                <NavLink to={item.link}>
                  <li className="login-list-item" key={index}>
                    {item.text}
                  </li>
                </NavLink>
              ))}
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
      { text: "الصقحة الشخصية", link: "/" },
      { text: "انشاء حساب", link: "/register" },
      { text: " تسجيل الدخول", link: "/login" },
      { text: "تسجيل الخروج", link: "/" },
    ],
  };

  return (
    <header className="header">
      <ContactInfo info={contactInfo} />
      <Container>
        <Logo icon={logoIcon} />
        <Search icon={searchIcon} placeholder={searchPlaceholder} />
        <NavContent items={navItems} account={accountMenu} />
      </Container>
    </header>
  );
}

function Container(props) {
  return <div className="container-header">{props.children}</div>;
}

export default Header;
