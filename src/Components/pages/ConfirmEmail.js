import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import authContext from "../Store/Auth-Context";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import styles from "./confirmEmail.module.css";

const ConfirmEmail = () => {
  // Context
  const authCtx = useContext(authContext);
  // URL Search Params  => To get the oobCode from the URL
  const params = new URLSearchParams(window.location.search);
  const oobCode = params.get("oobCode");

  // state for the users from the database => to get the user id to update the emailVerified property in the database
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);

  // state for the error and success messages
  const [isThereError, setIsThereError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // URL To get the users from the database
  const getUsersURL =
    "https://react-http-products-default-rtdb.firebaseio.com/users.json";

  // use UseEffect to get all the users from the database
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(getUsersURL);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const loadedUsers = [];
      for (const key in data) {
        loadedUsers.push({
          id: key,
          email: data[key].email,
          firstName: data[key].firstName,
          lastName: data[key].lastName,
          password: data[key].password,
          emailVerified: data[key].emailVerified,
        });
      }
      setUsers(loadedUsers);
    };
    getUsers();
  }, []);
  // Confirm Email rest API URL
  let EmailVerficationURL =
    "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDNDXcfx6jpm5Y_121TikxsU7-Yx2ZrmeQ";

  // use Effect to confirm the email and update the emailVerified property in the database to true
  useEffect(() => {
    const ConfirmEmail = async (URL, oobCode) => {
      const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({
          oobCode: oobCode,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        setIsThereError(true);
        setErrorMessage("Email Verification Failed");
      }
      const data = await response.json();
      setEmailAddress(data.email);
      if (data.emailVerified) {
        setEmailVerified(data.emailVerified);
        authCtx.isEmailVerfied(data.emailVerified, data.email);
        authCtx.isOobCode(oobCode);
        setIsThereError(false);
        setSuccessMessage("Email Verified Successfully");
      }
      if (data.error) {
        setIsThereError(true);
        setErrorMessage("Email Verification Failed");
      }
    };
    ConfirmEmail(EmailVerficationURL, oobCode);
  }, []);

  // get the user who has the same email address as the email address in the response from the confirm email rest API
  useEffect(() => {
    const getUserKey = async (users, emailAddress) => {
      const user = users.find((user) => user.email === emailAddress);
      setUser(user);

      console.log("user", user);
      if (user) {
        setUserId(user.id);
      }
    };
    getUserKey(users, emailAddress);
    // filter the users to get all the users except the user who has the same email address as the email address in the response from the confirm email rest API
    const filteredUsers = users.filter((user) => user.email !== emailAddress);
    // update the emailVerified property in the database to true
    const updateEmailVerified = async (userId) => {
      const response = await fetch(
        `https://react-http-products-default-rtdb.firebaseio.com/users.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            ...filteredUsers,
            [userId]: {
              ID: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              password: user.password,
              emailVerified: emailVerified,
            },
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Respone from updateEmailVerified", response);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log("Data from updateEmailVerified", data);
    };
    updateEmailVerified(userId);
  }, [emailAddress, users, user, userId, emailVerified]);

  console.log("users", users);

  return (
    <div className={styles.confirmEmailWrapper}>
      {!isThereError && (
        <div className={styles.confirmEmaiContainer}>
          <div className={styles.badgeContainer}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className={styles.iconCheck}
            />
          </div>
          <h1 className={styles.titleSecondary}>{successMessage}</h1>
          <p className={styles.clarifyEmail}>for {authCtx.email} </p>
          <p className={styles.clarify}>
            You can now sign in with your new account
            <br />
          </p>
        </div>
      )}
      {isThereError && (
        <div className={styles.confirmEmaiContainer}>
          <div className={styles.badgeContainer}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className={styles.iconCheck}
            />
          </div>
          <h1 className={styles.titleSecondary}>{errorMessage}</h1>
          <p className={styles.clarify}>
            Try Again or Contact Support!
            <br />
          </p>
        </div>
      )}
    </div>
  );
};

export default ConfirmEmail;
