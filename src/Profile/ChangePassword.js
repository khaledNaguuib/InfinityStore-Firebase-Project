import React, { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./changePassword.module.css";
import AuthContext from "../Components/Store/Auth-Context";

function ChangePassword() {
  const navigate = useNavigate();
  // Handling feedbacks
  const [isThereError, setIsThereError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Toggle eye icon state
  const [toggleEyeIcon1, setToggleEyeIcon1] = useState(false);
  const [toggleEyeIcon2, setToggleEyeIcon2] = useState(false);

  // Getting the input values
  const passwordInputRef1 = useRef();
  const passwordInputRef2 = useRef();

  // getting the user data from the context
  const authCtx = useContext(AuthContext);
  const oldPasswordHash = authCtx.getUserData().passwordHash;
  const [newPasswordHash, setNewPasswordHash] = useState("");

  // get the old password
  const userData = authCtx.getUserData();
  const token = authCtx.token;
  const displayName = authCtx.displayName;
  const isVerified = authCtx.emailVerified;

  console.log("userData", userData);

  // Function to validate the password
  const validatePassword = (enteredPassword, enteredPassword2) => {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(
      enteredPassword,
      enteredPassword2
    );
  };

  // Function to toggle the password input
  const togglePassword1Input = () => {
    setToggleEyeIcon1(!toggleEyeIcon1);
    const passwordInput = document.getElementById("password1");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else if (passwordInput.type === "text") {
      passwordInput.type = "password";
    }
  };
  const togglePassword2Input = () => {
    setToggleEyeIcon2(!toggleEyeIcon2);
    const passwordInput = document.getElementById("password2");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else if (passwordInput.type === "text") {
      passwordInput.type = "password";
    }
  };

  const changePasswordApiURL =
    "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDNDXcfx6jpm5Y_121TikxsU7-Yx2ZrmeQ";
  // Function to change the password
  /*
  const changePassword = async (apiURL, newPassword) => {
    try {
      const response = await fetch(apiURL, {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          password: newPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Change Password response", response);
      if (!response.ok) {
        setIsThereError(true);
        setIsSuccess(false);
        throw new Error("Password change failed! Please try again");
      }
      const data = await response.json();
      // set the new password hash
      setNewPasswordHash(data.passwordHash);
      // Check if the new password is different from the old password
      if (newPasswordHash === oldPasswordHash) {
        setIsThereError(true);
        setIsSuccess(false);
        setErrorMessage(
          "New password must be different from the old password!"
        );
        return;
      } else if (!data) {
        setIsThereError(true);
        setIsSuccess(false);
        throw new Error("Password change failed! Please try again");
      } else if (data.error) {
        setIsThereError(true);
        setIsSuccess(false);
        setErrorMessage(data.error.message);
      } else if (data) {
        setIsThereError(false);
        setIsSuccess(true);
        setSuccessMessage("Password changed successfully");

        // update the user data in the context
        authCtx.login(data.idToken, data.email, displayName, isVerified);
      }
    } catch (error) {
      console.log("Error", error);
      setIsThereError(true);
      setIsSuccess(false);
      setErrorMessage(error.message);
    }
  };
  */

  const changePassword = async (apiURL, newPassword) => {
    try {
      const response = await fetch(apiURL, {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          password: newPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Change Password response", response);
      if (!response.ok) {
        setIsThereError(true);
        setIsSuccess(false);
        throw new Error("Password change failed! Please try again");
      }
      const data = await response.json();
      if (!data) {
        setIsThereError(true);
        setIsSuccess(false);
        throw new Error("Password change failed! Please try again");
      } else if (data.error) {
        setIsThereError(true);
        setIsSuccess(false);
        throw new Error(data.error.message);
      } else {
        setIsSuccess(true);
        setSuccessMessage("Password changed successfully!");
        setIsThereError(false);
        authCtx.login(data.idToken, data.email, displayName, isVerified);
      }
    } catch (error) {
      console.log(error);
      setIsThereError(true);
      setErrorMessage(error.message);
      setIsSuccess(false);
    }
  };

  // On Submit Handler
  const onSubmitHanlder = async (event) => {
    event.preventDefault();
    // Getting the input values
    const enteredPassword1 = passwordInputRef1.current.value;
    const enteredPassword2 = passwordInputRef2.current.value;

    // Check if the passwords are valid
    if (enteredPassword1 !== enteredPassword2) {
      setIsThereError(true);
      setIsSuccess(false);
      setErrorMessage("Passwords do not match");
      return;
    } else if (
      !validatePassword(
        passwordInputRef1.current.value,
        passwordInputRef2.current.value
      )
    ) {
      setIsThereError(true);
      setErrorMessage(
        "The password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
      return;
    } else {
      setIsThereError(false);
      setIsSuccess(true);
      setSuccessMessage("Password changed successfully");
    }

    // Change the password
    await changePassword(changePasswordApiURL, enteredPassword1);
    // Logging the user out and navigate to login page
    authCtx.logout();
    setTimeout(() => {
      navigate("/login");
    }, 2000);

    // Resetting the form
    passwordInputRef1.current.value = "";
    passwordInputRef2.current.value = "";
  };

  return (
    <div className={styles.changePasswordWrapper}>
      <div className={styles.changePasswordContainer}>
        <div className={styles.changePasswordHeader}>
          <h1 className={styles.title}>Change Password</h1>
          <p className="clarify">
            Your new password must be different from your previous used password
          </p>
        </div>
        <form onSubmit={onSubmitHanlder}>
          <div className="formControl">
            <label className="inputLabel" htmlFor="password1">
              New Password
            </label>
            <div className={styles.inputPass}>
              <input
                className="inputField"
                type="password"
                id="password1"
                ref={passwordInputRef1}
              />
              {toggleEyeIcon1 && (
                <i
                  onClick={togglePassword1Input}
                  className={`fa-solid fa-eye ${styles.eyeIcon}`}
                ></i>
              )}
              {!toggleEyeIcon1 && (
                <i
                  onClick={togglePassword1Input}
                  className={`fa-solid fa-eye-slash  ${styles.eyeIcon}`}
                ></i>
              )}
            </div>
          </div>
          <div className="formControl">
            <label className="inputLabel" htmlFor="password2">
              Confirm New Password
            </label>
            <div className={styles.inputPass}>
              <input
                className="inputField"
                type="password"
                id="password2"
                ref={passwordInputRef2}
              />
              {toggleEyeIcon2 && (
                <i
                  onClick={togglePassword2Input}
                  className={`fa-solid fa-eye ${styles.eyeIcon}`}
                ></i>
              )}
              {!toggleEyeIcon2 && (
                <i
                  onClick={togglePassword2Input}
                  className={`fa-solid fa-eye-slash  ${styles.eyeIcon}`}
                ></i>
              )}

              <span className="span-clarify">
                Minimum eight characters, at least one upper case English
                letter, one lower case English letter, one number and one
                special character.
              </span>
            </div>
          </div>

          {/* HANDLING FEEDBACKS */}
          {isThereError && (
            <div className="errorMessage">
              <ul className="errorMsgList">
                <li> {errorMessage} </li>
              </ul>
            </div>
          )}
          {isSuccess && (
            <div className="successMessage">
              <ul className="successMsgList">
                <li> {successMessage} </li>
              </ul>
            </div>
          )}

          <button className="btnSubmit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
