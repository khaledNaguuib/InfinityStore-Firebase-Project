import React from "react";
import { useRef, useState, useContext } from "react";

import authContext from "../Components/Store/Auth-Context";
import { useNavigate } from "react-router-dom";
import styles from "./passwordreset.module.css";

const PasswordReset = () => {
  // Context
  const authCtx = useContext(authContext);
  // URL Search Params  => To get the oobCode from the URL
  const params = new URLSearchParams(window.location.search);
  const oobCode = params.get("oobCode");
  const mode = params.get("mode");
  console.log(mode);

  console.log("oobCode", oobCode);
  // Navigation
  const navigate = useNavigate();
  // Input Refs
  const passwordInputRef = useRef();
  const passwordInputRef2 = useRef();

  //Handling Errors
  const [isThereError, setIsThereError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  // handling Success
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  // URL for password reset
  let URL =
    "https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=AIzaSyDNDXcfx6jpm5Y_121TikxsU7-Yx2ZrmeQ";
  // on submit handler for the form
  const onSubmitHanlder = (event) => {
    event.preventDefault();
    // Getting the values from the input fields
    const enteredPassword = passwordInputRef.current.value;
    const enteredPassword2 = passwordInputRef2.current.value;

    // Checking if the passwords match
    if (enteredPassword !== enteredPassword2) {
      setIsThereError(true);
      setErrorMessage("Passwords do not match");
      return;
    }

    console.log(enteredPassword);
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        oobCode: oobCode,
        newPassword: enteredPassword,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (response.ok) {
        setIsSuccess(true);
        setIsThereError(false);
        setSuccessMessage("Password Reset Successfully");
        console.log(response);
        // Navigate to login page after 3 seconds

        authCtx.isOobCode(oobCode);
        setTimeout(() => {
          navigate("/login");
        }, 8000);
      } else {
        return response.json().then((data) => {
          setIsSuccess(false);
          setIsThereError(true);
          let errorMessage = "Authentication Failed";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          if (
            errorMessage === "INVALID_OOB_CODE" ||
            errorMessage === "INVALID_PASSWORD" ||
            errorMessage === "MISSING_PASSWORD" ||
            errorMessage === "MISSING_OOB_CODE" ||
            errorMessage === "EXPIRED_OOB_CODE"
          ) {
            errorMessage =
              "Invalid Password Reset Link, Please Try Again Later";
            setErrorMessage(errorMessage);
          }

          alert(errorMessage);
        });
      }
    });
    // Clearing the form
    passwordInputRef.current.value = "";
    passwordInputRef2.current.value = "";
  };

  return (
    <div className={styles.PasswordResetWrapper}>
      <div className={styles.PasswordResetContainer}>
        <h1 className={styles.titleSecondary}>Reset account password</h1>
        <p className={styles.clarify}>
          Enter a new password for your account <br />
        </p>

        <form onSubmit={onSubmitHanlder}>
          <div className={styles.formControl}>
            <label className={styles.inputLabel} htmlFor="password">
              Password
            </label>
            <input
              className={styles.inputField}
              type="password"
              id="password"
              ref={passwordInputRef}
            />
          </div>
          <div className={styles.formControl}>
            <label className={styles.inputLabel} htmlFor="password2">
              Confirm Password
            </label>
            <input
              className={styles.inputField}
              type="password"
              id="password2"
              ref={passwordInputRef2}
            />
          </div>

          {/* HANDLING FEEDBACKS */}
          {isThereError && (
            <div className={styles.errorMessage}>
              <ul className={styles.errorMsgList}>
                <li> {errorMessage} </li>
              </ul>
            </div>
          )}
          {isSuccess && (
            <div className={styles.successMessage}>
              <ul className={styles.successMsgList}>
                <li> {successMessage} </li>
              </ul>
            </div>
          )}

          <button className={styles.btnSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
