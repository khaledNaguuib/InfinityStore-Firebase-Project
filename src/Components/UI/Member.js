import styles from "./member.module.css";
import NikeLogo from "../../assets/nike-4-logo-png-transparent.png";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Member = () => {
  return (
    <>
      <Fade bottom>
        <div className={styles["banner-wrapper"]}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles["content-left"]}>
                <h2 className={styles["header-title"]}>Become a member</h2>
                <p className={styles.desc}>
                  Sign up for free. Join the community.
                </p>
                <Link to="/login" className={styles["btn-join"]}>
                  Join us
                </Link>
              </div>
              <div className={styles["content-right"]}>
                <img
                  className={styles["image-logo"]}
                  src={NikeLogo}
                  alt="Nike Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Member;
