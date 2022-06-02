import { Fragment } from "react";

import classes from "./Header.module.css";

import ecommerceImage from "../../assets/imgClothes.png";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Ecommerce React</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={ecommerceImage} alt="Ecommerce React" />
      </div>
    </Fragment>
  );
};

export default Header;
