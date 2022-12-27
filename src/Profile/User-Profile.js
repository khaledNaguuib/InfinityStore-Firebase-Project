import React, { useRef, useState, useContext, useEffect } from "react";
import authContext from "../Components/Store/Auth-Context";
import styles from "./userprofile.module.css";
import { Link } from "react-router-dom";
const UserProfile = () => {
  // use state to store the user data
  const [userData, setUserData] = useState({});
  // get the user token from authContext
  const authCtx = useContext(authContext);
  const userDisplayName = authCtx.displayName;
  const userToken = authCtx.token;
  const isEmailVerfied = userData.emailVerified;

  // get the email from local storage
  const userEmail = localStorage.getItem("email");

  // get the user data from Firebase
  const APIURL =
    "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDNDXcfx6jpm5Y_121TikxsU7-Yx2ZrmeQ";

  // useEffect to get the user data
  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch(APIURL, {
        method: "POST",
        body: JSON.stringify({
          idToken: userToken,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Something went wrong while getting the user data!");
      }
      const data = await response.json();
      if (data) {
        setUserData(data.users[0]);
        // set the user data in the authContext
        authCtx.setUserInfo(data.users[0]);
        // set the user data in the local storage
        localStorage.setItem("userData", JSON.stringify(data.users[0]));
      } else if (!data) {
        console.log("No data Found");
      }
    };
    getUserData();
  }, []);

  console.log("userData", userData);
  console.log("userDisplayName", userDisplayName);

  return (
    <section className={styles.profileWrapper}>
      <div className={styles.profileContainer}>
        <div className={styles.profileHeader}>
          <h1 className={styles.title}>My Account</h1>
          <div className={styles.emailContainer}>
            <div className={styles.emailInfo}>
              {/* <p className={styles.emailTitle}>Email:</p> */}
              {/* <p className={styles.email}>{userData.email}</p> */}
              <p className={styles.email}>{userEmail}</p>

              {/* <p className={styles.email}>khalednaguib15188@gmail.com</p> */}
            </div>
          </div>
        </div>

        {/* ------- display the user data--------- */}

        {/* ------- ORDER HISTORY -------------- */}
        <div className={styles.profileInfoWrapper}>
          <div className={styles.orderHistoryWrapper}>
            <h2 className={styles.orderHistoryTitle}>Order History</h2>
            <p className={styles.orderTitle}>
              You have not placed any orders yet!
            </p>
          </div>
          {/* ------- USER INFO -------------- */}
          <div className={styles.userInfo}>
            <h2 className={styles.userInfoTitle}>Account Details</h2>
            <p className={styles.displayName}> {userDisplayName}</p>

            <div className={styles.isEmailVerfiedContainer}>
              <div className={styles.emailVerficationInfo}>
                <p className={styles.emailTitle}>Email Verfication:</p>
                {!isEmailVerfied && (
                  <p className={styles.emailNotVerfied}>Not Verfied</p>
                )}
                {isEmailVerfied && (
                  <p className={styles.emailVerfied}>Verfied</p>
                )}
              </div>
            </div>

            <div className={styles.emailActions}>
              <div className={styles.changeActionDiv}>
                <Link to="/verifyEmail" className={styles.emailActionBtn}>
                  Verify Email
                </Link>
              </div>
              <div className={styles.changeActionDiv}>
                <Link to="/changeEmail" className={styles.emailActionBtn}>
                  Change Email
                </Link>
              </div>
              <div className={styles.changeActionDiv}>
                <Link to="/changePassword" className={styles.emailActionBtn}>
                  Change Password
                </Link>
              </div>
              <div className={styles.changeActionDiv}>
                <Link to="/addAddress" className={styles.emailActionBtn}>
                  Add Address
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
