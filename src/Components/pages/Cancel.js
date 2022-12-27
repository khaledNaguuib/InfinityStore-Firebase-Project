import React from "react";
import styles from "./cancel.module.css";
import FailureIcon from "../UI/FailureIcon";

function Cancel() {
  return (
    <>
      <div className={styles.failureContainer2}>
        <div className={styles.cancelLeftBox}>
          {/* <img src="https://img.icons8.com/color/48/null/card-in-use.png" /> */}
          {/* <img src="https://img.icons8.com/ios-filled/100/null/card-in-use.png" /> */}
          {/* <img src="https://img.icons8.com/ios-filled/75/null/card-in-use.png"/> */}
          <img src="https://img.icons8.com/officel/72/null/card-in-use.png"/>
        </div>
        <div className={styles.cancelRightBox}>
          <h4 className={styles.cancelTitle}>Payment Declined</h4>
          <p className={styles.cancelDesc}>Oh snap! The credit card information was declined</p>
        </div>
      </div>

      {/* <div className={styles.failureContainer}>
        <FailureIcon />
        <div className={styles.failureContent}>
          <h1 >Payment Failed</h1>
          <h3>
            Sorry, The payment was declined. Please make sure to update your
            billing information and try again?
          </h3>
        </div>
      </div> */}
    </>
  );
}

export default Cancel;
