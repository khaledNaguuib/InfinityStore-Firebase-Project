import React from "react";
import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import styles from "./forgetpassword.module.css";

const ForgetPassword = () => {
  // Navigation
  // const navigate = useNavigate();
  // Input Refs
  const emailInputRef = useRef();

  // Handling Errors
  const [isThereError, setIsThereError] = useState(false);
  console.log("isThereError", isThereError);
  const [overallError, setOverallError] = useState(null);
  console.log("overallError", overallError);

  // Handling Success
  const [isThereSuccess, setIsThereSuccess] = useState(false);
  const [overallSuccess, setOverallSuccess] = useState(null);

  // Reset Password with Email URL API
  let URL =
    "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDNDXcfx6jpm5Y_121TikxsU7-Yx2ZrmeQ";

  // Reset Password Function On submit handler for the form
  const onSubmitHanlder = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    console.log(enteredEmail);
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        requestType: "PASSWORD_RESET",
        email: enteredEmail,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          setIsThereSuccess(true);
          setIsThereError(false);
          setOverallSuccess(
            "We've sent you an email with a link to update your password."
          );
          console.log(response);

          return response.json();
        } else {
          return response.json().then((data) => {
            setIsThereError(true);
            setIsThereSuccess(false);
            let errorMessage = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
              setOverallError(errorMessage);
            }
            if (data.error.message === "EMAIL_NOT_FOUND") {
              setOverallError("Email not found");
            }
            // alert(errorMessage);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log("ResetPasswordData", data);
        // Navigate to Login Page after 4 seconds 
        // setTimeout(() => {
        //   navigate(-1);
        // }, 4000);
      })
      .catch((error) => {
        console.log(error);
      });

    // Resetting the form
    emailInputRef.current.value = "";
  };
  return (
    <div className={styles.forgetPasswordWrapper}>
      <div className={styles.forgetPasswordContainer}>
        <h1 className={styles.titlePrimary}>Login</h1>
        <h1 className={styles.titleSecondary}>Reset your Password</h1>
        <p className={styles.clarify}>
          We will send you an email to reset your password.
        </p>

        <form onSubmit={onSubmitHanlder}>
          <div className={styles.formControl}>
            <label className={styles.inputLabel} htmlFor="email">
              Email
            </label>
            <input
              className={styles.inputField}
              type="email"
              id="email"
              ref={emailInputRef}
            />
          </div>

          {/* HANDLING FEEDBACKS FOR USERS */}
          {isThereError && (
            <div className={styles.errorMessage}>
              <ul className={styles.errorMsgList}>
                <li> {overallError} </li>
              </ul>
            </div>
          )}
          {isThereSuccess && (
            <div className={styles.successMessage}>
              <ul className={styles.successMsgList}>
                <li> {overallSuccess} </li>
              </ul>
            </div>
          )}

          <button className={styles.btnSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
