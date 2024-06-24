import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={classes.content}>
      <img
        className={classes.background}
        src="https://img.freepik.com/premium-photo/abstract-floral-watercolor-background-paper_949459-3814.jpg"
      ></img>

      <div>ava</div>

      <MyPosts />

    </div>
  );
};

export default Profile;
