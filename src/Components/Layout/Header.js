import React, { Fragment } from "react";
import mealsimg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
const Header = (props) => {
    
  return (
    <Fragment>
      <header className={classes.header}>
      <h1 >Arabian Knghts</h1>
      <button >Cart</button>
      </header>
      <div>
        <img src={mealsimg} className={classes['main-image']} alt="table full of Happiness" />
      </div>
    </Fragment>
  );
};

export default Header;
