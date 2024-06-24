import React from "react";
import classes from "./Navbar.module.css"



// let c1 = "item";
// let c2 = "active";
// // "item active"
// let classes = c1 + " " + c2;
// let classesNew = `${classes.item} ${classes.active}`;

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>Profile</div>
      <div className={classes.item}>Messages</div>
      <div className={classes.item}>News</div>
      <div className={classes.item}>About</div>
      <div className={classes.item}>Contacts</div>
    </nav>
  );
};

export default Navbar;
