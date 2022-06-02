import { Fragment } from "react";
import classes from "./AvailableItems.module.css";
import ItemDetail from "./ItemDetail";
const AvailableItems = (props) => {
  return (
    <Fragment>
      <main className={classes.main}>
        <div className={classes.sorting}>
          <button>Search</button>
        </div>
      </main>
      <ul className={classes.list}>
        {/*props.items.map((item) => (
          <ItemDetail />
        ))*/}
      </ul>
    </Fragment>
  );
};

export default AvailableItems;
