import useInput from "../../hooks/Use-Input";
import { useState, useRef, useContext } from "react";
// import { InfinitySpin } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import authContext from "../Store/Auth-Context";
import styles from "./register.module.css";
import { Fade } from "react-reveal";

const Register = (props) => {
    // Auth context
  const authCtx = useContext(authContext);
  // Set loading state to true initially to load the page with a loader
  // const [loading, setLoading] = useState(true);

  // state to store user display name
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [updatedProfileData, setUpdatedProfileData] = useState({});

  // to navigate to another page after successful register
  const navigate = useNavigate();

  // Input Refs
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  // Inputs values state
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(firstNameIsValid);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(lastNameIsValid);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(emailIsValid);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(passwordIsValid);

  // Checking validity of inputs
  function firstNameIsValid(enteredFirstName) {
    return enteredFirstName.trim() !== "";
  }
  function lastNameIsValid(enteredLastName) {
    return enteredLastName.trim() !== "";
  }
  function emailIsValid(enteredEmail) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(enteredEmail);
  }
  function passwordIsValid(enteredPassword) {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(
      enteredPassword
    );
  }
  /*  CHECKING FORM VALIDITY 
Checking overall validity of form
  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid
  ) {
    formIsValid = true;
  }

  verfying email Function
  Handling Email Verfication Message*/

  const verfiyEmail = async (url, token) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log("verfiy email Data", data);
    } catch (error) {
      console.log(error);
    }
  };

  //Handling all possible Errors:
  // If Faliure =>
  const [isThereError, setIsThereError] = useState(false);
  const [errorText, setErrorText] = useState("");
  // If Success =>
  const [isThereSuccess, setIsThereSuccess] = useState(false);
  const [successText, setSuccessText] = useState("");

  // SEND USERS DATA TO FIREBASE REALTIME DATABASE SERVER
  const userDataURL =
    "https://react-http-products-default-rtdb.firebaseio.com/users.json";
  const sendUserData = async (url) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          id: Math.random().toString(),
          firstName: enteredFirstName,
          lastName: enteredLastName,
          email: enteredEmail,
          emailVerified: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log("sendUserData Data", data);
    } catch (error) {
      console.log(error);
    }
  };

  // You can update a user's profile (display name / photo URL) by issuing an HTTP
  //  POST request to the Auth setAccountInfo endpoint.

  // Update Profile to set Display Name and Profile Photo in the future.
  const updateProfileURL =
    "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDNDXcfx6jpm5Y_121TikxsU7-Yx2ZrmeQ";
  const updateProfileURLHandler = async (url, token, displayName) => {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        idToken: token,
        displayName: displayName,
        photoUrl: null,
        deleteAttribute: ["PHOTO_URL"],
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response to update profile user", response);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();
    if (data.error) {
      console.log(data.error.message);
    } else if (data) {
      console.log(data);
      setUpdatedProfileData(data);
    }
  };

  // Sign Up with Email URL API
  const URL =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDNDXcfx6jpm5Y_121TikxsU7-Yx2ZrmeQ";

  const verifyEmailURL =
    "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDNDXcfx6jpm5Y_121TikxsU7-Yx2ZrmeQ";

  // Checking validity of inputs and sending data to server when submit button is clicked
  const onSubmitionHandler = (event) => {
    event.preventDefault();

    if (
      !enteredFirstNameIsValid ||
      !enteredLastNameIsValid ||
      !enteredEmailIsValid ||
      !enteredPasswordIsValid
    ) {
      return;
    }
    // getting the data from the inputs
    const enteredFirstName = firstNameRef.current.value;
    const enteredLastName = lastNameRef.current.value;
    const userDisplayName = enteredFirstName + " " + enteredLastName;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // sending the data to the server
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
          console.log("if respone is ok", response);
          return response.json();
        } else if (!response.ok) {
          setIsThereSuccess(false);
          setIsThereError(true);
          return response.json().then((data) => {
            let errorMessage = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
              setErrorText(errorMessage);
            }
            if (errorMessage === "EMAIL_EXISTS") {
              errorMessage =
                "This email address is already associated with an account.";

              setErrorText(errorMessage);
            }

            // console.log(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log("registerData", data);

        if (data.error) {
          setIsThereSuccess(false);
          setSuccessText(null);
          setIsThereError(true);
          setErrorText(data.error.message);
          return;
        } else if (data) {
          // sending the data to the firebase realtime database
          sendUserData(userDataURL);
          setIsThereError(false);
          setErrorText(null);
          setIsThereSuccess(true);
          setSuccessText(
            "Account Created Successfully, Please Verify Your Email"
          );
          // setting the token in the context
          // authCtx.login(data.idToken);
          setToken(data.idToken);
          setEmail(data.email);
          authCtx.register(userDisplayName, data.email, data.idToken);

          // updating the profile of the user
          if (data.idToken)
            updateProfileURLHandler(
              updateProfileURL,
              data.idToken,
              userDisplayName
            );
          else console.log("data.idToken is null");

          // sending the email verfication request
          verfiyEmail(verifyEmailURL, data.idToken);

          // navigating to the home page after auto login success
          setTimeout(() => {
            navigate("/home");
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });

    authCtx.setUserName(userDisplayName);

    // resetting the inputs
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetPasswordInput();
  };

  console.log("updateProfileURLHandler Data", updatedProfileData);
  console.log("SuccessMSg", successText);
  console.log("ErrorMSg", errorText);
  console.log("isThereError", isThereError);
  console.log("isThereSuccess", isThereSuccess);

  return (
    <>
      <Fade bottom>
        <section className={styles["section-form"]}>
          <h1 className={styles.title}> Create Account</h1>

          <div className={styles["form-wrapper"]}>
            <div className={styles["form-content"]}>
              <form className={styles.form} onSubmit={onSubmitionHandler}>
                {/* ---------  Name Inputs --------- */}

                <div
                  className={`${styles["form-control"]} ${
                    firstNameInputHasError && styles.invalid
                  }`}
                >
                  <label className={styles["input-label"]} htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className={
                      styles["input-field"] + " " + styles["input-name-first"]
                    }
                    ref={firstNameRef}
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    value={enteredFirstName}
                    onBlur={firstNameBlurHandler}
                    onChange={firstNameChangeHandler}
                    autoComplete="off"
                    autoCapitalize="off"
                  />
                  {enteredFirstNameIsValid && (
                    <FontAwesomeIcon
                      className={styles.checkIcon}
                      icon={faCheck}
                    />
                  )}
                  {firstNameInputHasError && (
                    <FontAwesomeIcon
                      className={styles.xmarkIcon}
                      icon={faXmark}
                    />
                  )}

                  {firstNameInputHasError && (
                    <p className={styles["error-msg-small"]}>
                      First name must not be empty.
                    </p>
                  )}
                </div>
                <div
                  className={`${styles["form-control"]} ${
                    lastNameInputHasError && styles.invalid
                  }`}
                >
                  <label className={styles["input-label"]} htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className={
                      styles["input-field"] + " " + styles["input-name-last"]
                    }
                    ref={lastNameRef}
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    value={enteredLastName}
                    onBlur={lastNameBlurHandler}
                    onChange={lastNameChangeHandler}
                    autoComplete="off"
                    autoCapitalize="off"
                  />
                  {enteredLastNameIsValid && (
                    <FontAwesomeIcon
                      className={styles.checkIcon}
                      icon={faCheck}
                    />
                  )}
                  {lastNameInputHasError && (
                    <FontAwesomeIcon
                      className={styles.xmarkIcon}
                      icon={faXmark}
                    />
                  )}

                  {lastNameInputHasError && (
                    <p className={styles["error-msg-small"]}>
                      Last name must not be empty.
                    </p>
                  )}
                </div>

                {/*--------- Email Input -------------- */}

                <div
                  className={`${styles["form-control"]} ${
                    emailInputHasError && styles.invalid
                  }`}
                >
                  <label className={styles["input-label"]} htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className={styles["input-field"]}
                    type="email"
                    ref={emailInputRef}
                    id="email"
                    value={enteredEmail}
                    placeholder="Email"
                    onBlur={emailBlurHandler}
                    onChange={emailChangeHandler}
                    autoComplete="off"
                    autoCapitalize="off"
                  />
                  {enteredEmailIsValid && (
                    <FontAwesomeIcon
                      className={styles.checkIcon}
                      icon={faCheck}
                    />
                  )}
                  {emailInputHasError && (
                    <FontAwesomeIcon
                      className={styles.xmarkIcon}
                      icon={faXmark}
                    />
                  )}
                  {emailInputHasError && (
                    <p className={styles["error-text"]}>Enter a valid email.</p>
                  )}
                </div>

                {/*--------- Password Input -------------- */}

                <div
                  className={`${styles["form-control"]} ${
                    passwordInputHasError && styles.invalid
                  }`}
                >
                  <label className={styles["input-label"]} htmlFor="password">
                    Password
                  </label>
                  <input
                    className={styles["input-field"]}
                    type="password"
                    ref={passwordInputRef}
                    id="password"
                    value={enteredPassword}
                    placeholder="Password"
                    onChange={passwordChangeHandler}
                    onBlur={passwordBlurHandler}
                    autoComplete="off"
                    autoCapitalize="off"
                  />
                  {enteredPasswordIsValid && (
                    <FontAwesomeIcon
                      className={styles.checkIcon}
                      icon={faCheck}
                    />
                  )}
                  {passwordInputHasError && (
                    <FontAwesomeIcon
                      className={styles.xmarkIcon}
                      icon={faXmark}
                    />
                  )}

                  <span className={styles["span-clarify"]}>
                    Minimum eight characters, at least one upper case English
                    letter, one lower case English letter, one number and one
                    special character.
                  </span>

                  {passwordInputHasError && (
                    <p className={styles["error-text"]}>
                      Enter a valid password.
                    </p>
                  )}
                </div>

                {/* ERROR MESSAGE AFTER SUBMITION */}
                {/* HANDLING FEEDBACKS */}
                {isThereError && !isThereSuccess && (
                  <div className={styles.errorMessage}>
                    <ul className={styles.errorMsgList}>
                      <li> {errorText} </li>
                    </ul>
                  </div>
                )}
                {isThereSuccess && !isThereError && (
                  <div className={styles.successMessage}>
                    <ul className={styles.successMsgList}>
                      <li> {successText} </li>
                    </ul>
                  </div>
                )}

                {/*--------- Submition Button -------------- */}

                <button
                  type="submit"
                  className={styles["btn-submit"]}
                  // disabled={!formIsValid}
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </section>
      </Fade>
    </>
  );
};

export default Register;

/* Original return code 

  return (
    <section className={styles["section-form"]}>
      <h1 className={styles.title}> Create Account</h1>

      <div className={styles["form-wrapper"]}>
        <div className={styles["form-content"]}>
          <form className={styles.form} onSubmit={onSubmitionHandler}>
             ---------  Name Inputs --------- 

            <div
              className={`${styles["form-control"]} ${
                firstNameInputHasError && styles.invalid
              }`}
            >
              <label className={styles["input-label"]} htmlFor="firstName">
                First Name
              </label>
              <input
                className={
                  styles["input-field"] + " " + styles["input-name-first"]
                }
                type="text"
                id="firstName"
                placeholder="First Name"
                value={enteredFirstName}
                onBlur={firstNameBlurHandler}
                onChange={firstNameChangeHandler}
                autoComplete="off"
                autoCapitalize="off"
              />
              {enteredFirstNameIsValid && (
                <FontAwesomeIcon className={styles.checkIcon} icon={faCheck} />
              )}
              {firstNameInputHasError && (
                <FontAwesomeIcon className={styles.xmarkIcon} icon={faXmark} />
              )}

              {firstNameInputHasError && (
                <p className={styles["error-msg-small"]}>
                  First name must not be empty.
                </p>
              )}
            </div>
            <div
              className={`${styles["form-control"]} ${
                lastNameInputHasError && styles.invalid
              }`}
            >
              <label className={styles["input-label"]} htmlFor="lastName">
                Last Name
              </label>
              <input
                className={
                  styles["input-field"] + " " + styles["input-name-last"]
                }
                type="text"
                id="lastName"
                placeholder="Last Name"
                value={enteredLastName}
                onBlur={lastNameBlurHandler}
                onChange={lastNameChangeHandler}
                autoComplete="off"
                autoCapitalize="off"
              />
              {enteredLastNameIsValid && (
                <FontAwesomeIcon className={styles.checkIcon} icon={faCheck} />
              )}
              {lastNameInputHasError && (
                <FontAwesomeIcon className={styles.xmarkIcon} icon={faXmark} />
              )}

              {lastNameInputHasError && (
                <p className={styles["error-msg-small"]}>
                  Last name must not be empty.
                </p>
              )}
            </div>

            --------- Email Input -------------- *

            <div
              className={`${styles["form-control"]} ${
                emailInputHasError && styles.invalid
              }`}
            >
              <label className={styles["input-label"]} htmlFor="email">
                Email Address
              </label>
              <input
                className={styles["input-field"]}
                type="email"
                id="email"
                value={enteredEmail}
                placeholder="Email"
                onBlur={emailBlurHandler}
                onChange={emailChangeHandler}
                autoComplete="off"
                autoCapitalize="off"
              />
              {enteredEmailIsValid && (
                <FontAwesomeIcon className={styles.checkIcon} icon={faCheck} />
              )}
              {emailInputHasError && (
                <FontAwesomeIcon className={styles.xmarkIcon} icon={faXmark} />
              )}
              {emailInputHasError && (
                <p className={styles["error-text"]}>Enter a valid email.</p>
              )}
            </div>

            --------- Password Input -------------- 

            <div
              className={`${styles["form-control"]} ${
                passwordInputHasError && styles.invalid
              }`}
            >
              <label className={styles["input-label"]} htmlFor="password">
                Password
              </label>
              <input
                className={styles["input-field"]}
                type="password"
                id="password"
                value={enteredPassword}
                placeholder="Password"
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                autoComplete="off"
                autoCapitalize="off"
              />
              {enteredPasswordIsValid && (
                <FontAwesomeIcon className={styles.checkIcon} icon={faCheck} />
              )}
              {passwordInputHasError && (
                <FontAwesomeIcon className={styles.xmarkIcon} icon={faXmark} />
              )}
              {!passwordInputHasError && (
                <span className={styles["span-clarify"]}>
                  Minimum eight characters, at least one upper case English
                  letter, one lower case English letter, one number and one
                  special character.
                </span>
              )}
              {passwordInputHasError && (
                <p className={styles["error-text"]}>Enter a valid password.</p>
              )}
            </div>

            --------- Submition Button -------------- 

            <button
              type="submit"
              className={styles["btn-submit"]}
               disabled={!formIsValid}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </section>
  );
  */
