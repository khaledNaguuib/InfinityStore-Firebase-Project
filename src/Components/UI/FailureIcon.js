import React from "react";
import styles from "./failureIcon.module.css";
function FailureIcon() {
  return (
    <div className={styles["failure-animation"]}>
      <div className={styles["ui-error"]}>
        <svg
          viewBox="0 0 87 87"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="Group-2" transform="translate(2.000000, 2.000000)">
              <circle
                id="Oval-2"
                stroke="rgba(252, 191, 191, .9)"
                stroke-width="4"
                cx="41.5"
                cy="41.5"
                r="41.5"
              ></circle>
              <circle
                className={styles["ui-error-circle"]}
                stroke="#F74444"
                stroke-width="4"
                cx="41.5"
                cy="41.5"
                r="41.5"
              ></circle>
              <path
                className={styles["ui-error-line1"]}
                d="M22.244224,22 L60.4279902,60.1837662"
                id="Line"
                stroke="#F74444"
                stroke-width="3"
                stroke-linecap="square"
              ></path>
              <path
                className={styles["ui-error-line2"]}
                d="M60.755776,21 L23.244224,59.8443492"
                id="Line"
                stroke="#F74444"
                stroke-width="3"
                stroke-linecap="square"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      {/* <svg
        className={styles.checkmark}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 460.775 460.775"
      >
        <circle
          className={styles["checkmark__circle"]}
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />
        <path
          className={styles["checkmark__check"]}
          d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
        ></path>
      </svg> */}
    </div>
  );
}

export default FailureIcon;
