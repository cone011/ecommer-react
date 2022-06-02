import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <main className={classes.main}>
      <div className={classes.spinner}></div>
    </main>
  );
};

export default LoadingSpinner;
