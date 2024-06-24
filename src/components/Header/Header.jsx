import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://cdn.dribbble.com/users/5214489/screenshots/20191915/media/fee5c1bccd6150bf85cef3e447e79fd8.jpg?resize=400x300&vertical=center"
        alt="logo"
      ></img>
    </header>
  );
};

export default Header;
