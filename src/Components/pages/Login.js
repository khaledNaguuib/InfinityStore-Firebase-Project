import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import authContext from "../Store/Auth-Context";
// import { InfinitySpin } from "react-loader-spinner";
import styles from "./login.module.css";
import Fade from "react-reveal/Fade";
const Login = () => {
  // Auth context
  const authCtx = useContext(authContext);

  // Set loading state to true initially
  // const [loading, setLoading] = useState(true);

  // to navigate to another page after successful register
  const navigate = useNavigate();

  // Input Refs
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // Handling overall login submission Error if exists
  const [isThereloginError, setIsThereloginError] = useState(false);
  const [overallLoginError, setOverallLoginError] = useState(null);



  // Sign In with Email URL API
  let URL =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDNDXcfx6jpm5Y_121TikxsU7-Yx2ZrmeQ";

  const onSubmitionHandler = (event) => {
    event.preventDefault();

    // Get the input values
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // Send the data to the server
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          navigate("/home");
          return response.json();
        } else {
          return response.json().then((data) => {
            let errorMessage = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            if (
              errorMessage === "INVALID_PASSWORD" ||
              errorMessage === "EMAIL_NOT_FOUND" ||
              errorMessage === "INVALID_EMAIL" ||
              errorMessage === "MISSING_PASSWORD" ||
              errorMessage === "MISSING_EMAIL"
            ) {
              setIsThereloginError(true);
              errorMessage = "Invalid Credentials";
              setOverallLoginError(errorMessage);
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        data.displayName = authCtx.displayName;
        const userEmail= data.email;
        const userDisplayName = localStorage.getItem("displayName");
         
        // get the email verified status from local storage
        const emailVerified = localStorage.getItem("emailVerified");
        

        authCtx.login(data.idToken, userEmail, userDisplayName, emailVerified);
        console.log("LoginData", data);
      })
      .catch((error) => {
        console.log(error.message);
      });

    // Reset the input fields
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  return (
    <>
      <Fade top>
        <div className={styles.loginWrapper}>
          <div className={styles.loginContainer}>
            <h1 className={styles.title}>Login</h1>

            <form onSubmit={onSubmitionHandler} className={styles.formWrapper}>
              <div className={styles.formControl}>
                <label className={styles.label} htmlFor="email">
                  Email
                </label>
                <input
                  className={styles.formInput}
                  type="email"
                  ref={emailInputRef}
                  id="email"
                  autoCapitalize="off"
                  autoComplete="off"
                />
              </div>
              <div className={styles.formControl}>
                <div className={styles.labelGroup}>
                  <label className={styles.label} htmlFor="password">
                    Password
                  </label>
                  <Link to="/login/forget" className={styles.forgotPassword}>
                    Forgot Password?
                  </Link>
                </div>
                <input
                  className={styles.formInput}
                  type="password"
                  ref={passwordInputRef}
                  id="password"
                  autoCapitalize="off"
                  autoComplete="off"
                />
              </div>

              {/* ERROR MESSAGE HERE */}
              {isThereloginError && (
                <p id="errorMessage" className={styles.errorMessage}>
                  <ul className={styles.errorMsgList}>
                    <li>{overallLoginError}</li>
                  </ul>
                </p>
              )}

              <button className={styles.loginBtn}>Sign in</button>
            </form>
            <Link to="/register" className={styles.registerBtn}>
              Create Account
            </Link>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Login;
