import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import RegForm from "../components/RegForm";
import SignInForm from "../components/SignInForm";
import classes from "../components/Checkout.module.css";

const Auth = () => {
  const [authMode, setAuthMode] = useState("signIn");
  const [feedBack, setFeedback] = useState(null);
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const accountCreationHandler = (email, pass) => {
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password: pass,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json().then((data) => {
            authCtx.login(data.idToken);
            history.replace("/home");
          });
        } else {
          return res.json().then((data) => {
            setFeedback(<h1 style={{ color: "red" }}>{data.error.message}</h1>);
          });
        }
      })
      .catch((error) => {
        setFeedback(
          <h1 style={{ color: "red" }}>
            {error.message || "Authentication Failed"}
          </h1>
        );
      });
  };
  return (
    <div style={{ left: "30px" }} className={classes.formContainer}>
      {authMode === "signUp" && (
        <>
          <h1>Register New Account</h1>
          {feedBack}
          <RegForm onSubmit={accountCreationHandler} isSignUp={true}>
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
