import React, { useRef, useState, useContext, useEffect } from "react";
import authContext from "../Components/Store/Auth-Context";
import styles from "./userprofile.module.css";
import { Link } from "react-router-dom";
 
const UserProfile = () => {
  // use state to store the user data
  const [userData, setUserData] = useState({});
  // get the user token from authContext
  const authCtx = useContext(authContext);
  // const userDisplayName = authCtx.displayName;
  const userToken = authCtx.token;


  // get the email from local storage
  const [emailVerificationStatus, setEmailVerificationStatus] = useState(false);
  console.log('emailVerificationStatus',emailVerificationStatus)
  const [VerficationStatusMessage, setVerficationStatusMessage] = useState("");
  console.log('VerficationStatusMessage',VerficationStatusMessage)



 

  // get user display name from realtime database and set it in the user data state
  // condition if the userdata email is equal to the email from user
  const [loadedUsers, setLoadedUsers] = useState([]);
  const getUserAPiURL =
    " https://react-http-products-default-rtdb.firebaseio.com/users.json";
  useEffect(() => {
    const getUserData = async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong while getting the user data!");
      }
      const data = await response.json();
      const loadedUsers = [];
      for (const key in data) {
        loadedUsers.push({
          id: key,
          email: data[key].email,
          firstName: data[key].firstName,
          lastName: data[key].lastName,
          emailVerified: data[key].emailVerified,
        });
      }
      setLoadedUsers(loadedUsers);
    };
    getUserData(getUserAPiURL);
  }, []);
  console.log("loaded users from real time database", loadedUsers);

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
        // set the user data in the state
        setUserData(data.users[0]);

        authCtx.setUserInfo(data.users[0]);
        // set the user data in the local storage
        localStorage.setItem("userData", JSON.stringify(data.users[0]));
        // override emailVerifed property in Localstorage
        localStorage.setItem("emailVerified", data.users[0].emailVerified);
        setEmailVerificationStatus(data?.users[0]?.emailVerified);
      } else if (!data) {
        console.log("No data Found");
      }
    };
    getUserData();
  }, []);

  // function handler to send email verification link
  let emailVerificationAPILink =
    "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDNDXcfx6jpm5Y_121TikxsU7-Yx2ZrmeQ";
  const sendEmailVerificationLink = async () => {
    const response = await fetch(emailVerificationAPILink, {
      method: "POST",
      body: JSON.stringify({
        requestType: "VERIFY_EMAIL",
        idToken: userToken,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("Email Verfication Response", response);
    if (!response.ok) {
      throw new Error(
        "Something went wrong while sending the email Verification! Plaease try again later"
      );
    }
    const data = await response.json();
    console.log("Email Verfication Data", data);
  };

  console.log("userData", userData);
  return (
    <section className={styles.profileWrapper}>
      <div className={styles.profileContainer}>
        <div className={styles.profileHeader}>
          <h1 className={styles.title}>My Account</h1>
          <div className={styles.emailContainer}>
            <div className={styles.emailInfo}>
              <p className={styles.email}>{userData.email}</p>
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
            <p className={styles.displayName}> {userData.displayName}</p>

            <div className={styles.isEmailVerfiedContainer}>
              <div className={styles.emailVerficationInfo}>
                <p className={styles.emailTitle}>Email Verfication:</p>

                
                {!emailVerificationStatus && (
                  <p className={styles.emailNotVerfied}>Not Verfied</p>
                )}
                {emailVerificationStatus && (
                  <p className={styles.emailVerfied}>Verfied</p>
                )}
              </div>
            </div>

            <div className={styles.emailActions}>
              {/* Show Verify Email Button only if the email is not verified */}
              {!emailVerificationStatus && (
                <div className={styles.changeActionDiv}>
                  <Link
                    onClick={sendEmailVerificationLink}
                    to="/verifyEmail"
                    className={styles.emailActionBtn}
                  >
                    Verify Email
                  </Link>
                </div>
              )}
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
