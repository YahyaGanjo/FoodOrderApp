import { useState } from "react";
import RegForm from "../components/RegForm";
import SignInForm from "../components/SignInForm";
import classes from "../components/Checkout.module.css";

const Auth = () => {
  const [authMode, setAuthMode] = useState("signIn");
  return (
    <div style={{ left: "30px" }} className={classes.formContainer}>
      {authMode === "signUp" && (
        <>
          <h1>Register New Account</h1>
          <RegForm isSignUp={true}>
            <div className={classes.btnContainer}>
              <button className={classes.confirm} type="submit">
                Create Account
              </button>
              <p>
                {`If you already have an account please   `}
                <span onClick={() => setAuthMode("signIn")}>Sign In</span>
              </p>
            </div>
          </RegForm>
        </>
      )}
      {authMode === "signIn" && (
        <SignInForm>
          <div className={classes.btnContainer}>
            <button className={classes.confirm} type="submit">
              Sign In
            </button>
            <p>
              {`If you don't have an account please   `}
              <span onClick={() => setAuthMode("signUp")}>Sign Up</span>
            </p>
          </div>
        </SignInForm>
      )}
    </div>
  );
};

export default Auth;
