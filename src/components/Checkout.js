import { useHistory } from "react-router-dom";
import classes from "./Checkout.module.css";
import RegForm from "./RegForm";

const Checkout = (props) => {
  const history = useHistory();

  return (
    <div className={classes.formContainer}>
      <button
        onClick={() => props.onRemove()}
        type="button"
        className={classes.closeBtn}
      >
        X
      </button>
      <RegForm>
        <div className={classes.btnContainer}>
          <button className={classes.confirm} type="submit">
            Confirm
          </button>
          <p>
            <b>or</b>
          </p>
          <button
            className={classes.signIn}
            onClick={() => history.push("/auth")}
          >
            Sign In
          </button>
        </div>
      </RegForm>
    </div>
  );
};

export default Checkout;
