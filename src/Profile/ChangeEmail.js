import React, { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./changeEmail.module.css";
import authContext from "../Components/Store/Auth-Context";

function ChangeEmail() {
  const navigate = useNavigate();
  // Auth Context
  const authCtx = useContext(authContext);
  const userToken = authCtx.token;
  console.log("userToken", userToken);

  // Handling feedbacks
  const [isThereError, setIsThereError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  // New Email Value

  // Getting the input values
  const emailInputRef1 = useRef();
  const emailInputRef2 = useRef();

  // use useEffect hook to change the Email
  const changeEmailApiURL =
    " https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDNDXcfx6jpm5Y_121TikxsU7-Yx2ZrmeQ";

  // Function to change the email
  const changeEmail = async (apiURL, newEmail) => {
    try {
      const response = await fetch(apiURL, {
        method: "POST",
        body: JSON.stringify({
          idToken: userToken,
          email: newEmail,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("response to change Email", response);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      console.log("data", data);
      if (data) {
        setIsThereError(false);
        setIsSuccess(true);
        setSuccessMessage("Email Changed Successfully");
        authCtx.updateEmail(newEmail);
      } else if (data.error) {
        console.log("data Error ", data.error);
        setIsThereError(true);
        setIsSuccess(false);
        setErrorMessage(data.error.message);
      }
    } catch (error) {
      setIsThereError(true);
      setIsSuccess(false);
      setErrorMessage(error.message);
    }
  };

  // Handling the form submission
  const onSubmitHanlder = async (event) => {
    event.preventDefault();

    // Getting the input values
    const enteredEmail1 = emailInputRef1.current.value;
    const enteredEmail2 = emailInputRef2.current.value;
    console.log(enteredEmail1);
    console.log(enteredEmail2);

    // Checking if the email is valid
    if (enteredEmail1 !== enteredEmail2) {
      setIsThereError(true);
      setIsSuccess(false);
      setErrorMessage("Emails do not match");
      return;
    }

    // Calling the change email function
    if (userToken) changeEmail(changeEmailApiURL, enteredEmail1);

    // Resetting the form
    emailInputRef1.current.value = "";
    emailInputRef2.current.value = "";

    // Logging the user out and navigate to login page
    authCtx.logout();
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  console.log("is There error", isThereError);
  console.log("is Success", isSuccess);
  console.log("error message", errorMessage);
  console.log("success message", successMessage);
  console.log(userToken);

  return (
    <>
      <div className={styles.changeEmailContainer}>
        <h1 className={styles.changeEmailTitle}>Change Email</h1>

        <form onSubmit={onSubmitHanlder}>
          <div className={styles.formControl}>
            <label className={styles.inputLabel} htmlFor="email1">
              New Email
            </label>
            <input
              className={styles.inputField}
              type="email"
              id="email1"
              ref={emailInputRef1}
            />
          </div>
          <div className={styles.formControl}>
            <label className={styles.inputLabel} htmlFor="email2">
              Confirm New Email
            </label>
            <input
              className={styles.inputField}
              type="email"
              id="email2"
              ref={emailInputRef2}
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
    </>
  );
}

export default ChangeEmail;
