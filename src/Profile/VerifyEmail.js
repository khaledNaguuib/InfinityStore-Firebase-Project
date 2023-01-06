import React from "react";
import styles from "./verifyEmail.module.css";

function VerifyEmail() {
  return (
    <>
      <div className={styles.verifyEmailWrapper}>
        <div className={styles.verifyEmailContainer}>
          <img className={styles.emailIcon}  src="https://img.icons8.com/ios-filled/50/null/gmail.png"/>
          <h1 className={styles.verifyEmailTitle}>Email Verification</h1>
          <p className={styles.verifyEmailInfo}>
            We have sent you an email with a link to verify your email address.
            Please check your inbox and click on the link to verify your email
            address.
          </p>
        </div>
      </div>
    </>
  );
}

export default VerifyEmail;
