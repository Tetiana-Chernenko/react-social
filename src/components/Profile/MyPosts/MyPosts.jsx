import React from "react";
import classes from "../MyPosts/MyPosts.module.css"

const MyPosts = () => {
    return (
        <div className={classes.post}>
            My posts
            <div className={classes.item}>post 1</div>
            <div className={classes.item}>Patriot ET 1255</div>
        </div>
    );
};

export default MyPosts;
