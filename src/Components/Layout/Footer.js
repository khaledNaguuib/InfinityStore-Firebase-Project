// import Logo from "../../assets/NikeLogo.png";
import { Link } from "react-router-dom";
import Logo from "../../asstes-optimized/LOGOOOOO.webp";
import styles from "./footer.module.css";

const Footer = () => {
  // get current year
  const year = new Date().getFullYear();

  return (
    <>
      <footer className={styles.footer}>
        <div
          className={
            styles.container + " " + styles.grid + " " + styles["grid-footer"]
          }
        >
          <div className={styles["logo-col"]}>
            <Link to="/" aria-label="Store logo">
              <img src={Logo} alt="Omnifood logo" className={styles.logo} />
            </Link>

            <ul className={styles["social-links"]}>
              <li>
                <a className={styles["footer-link"]} href="#">
                  <ion-icon
                    size="large"
                    className={
                      styles["social-icon"] + " " + styles["footer-link"]
                    }
                    name="logo-instagram"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a className={styles["footer-link"]} href="#">
                  <ion-icon
                    size="large"
                    className={
                      styles["social-icon"] + " " + styles["footer-link"]
                    }
                    name="logo-facebook"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a className={styles["footer-link"]} href="#">
                  <ion-icon
                    size="large"
                    className={
                      styles["social-icon"] + " " + styles["footer-link"]
                    }
                    name="logo-twitter"
                  ></ion-icon>
                </a>
              </li>
            </ul>
            <p className={styles.copyright}>
              Copyright &copy; <span className={styles.year}>{year}</span>, Inc.
              All rights reserved
            </p>
          </div>

          <div className={styles["address-col"]}>
            <p className={styles["footer-heading"]}>Contact Us</p>
            <div className={styles.line}></div>
            <address className={styles.contacts}>
              <p className={styles.address}>
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </p>

              <p className={styles["footer-link"]}>415-201-6370</p>

              <Link
                className={styles["footer-link"]}
                href="customercare@InfinityStore.com
                    "
                aria-label="Email Address"
              >
                customercare@InfinityStore.com
              </Link>
            </address>
          </div>
          <nav className={styles["nav-col"]}>
            <p className={styles["footer-heading"]}>Account</p>
            <div className={styles.line}></div>

            <ul className={styles["footer-nav"]}>
              <li>
                <Link
                  className={styles["footer-link"]}
                  aria-label="Create Account"
                  to="/register"
                >
                  Create Account
                </Link>
              </li>
              <li>
                <Link
                  className={styles["footer-link"]}
                  aria-label="Sign in"
                  to="/login"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  className={styles["footer-link"]}
                  aria-label="FAQ"
                  to="/faq"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  className={styles["footer-link"]}
                  aria-label="Contact"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <nav className={styles["nav-col"]}>
            <p className={styles["footer-heading"]}>Company</p>
            <div className={styles.line}></div>

            <ul className={styles["footer-nav"]}>
              <li>
                <Link
                  className={styles["footer-link"]}
                  aria-label="About US"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className={styles["footer-link"]}
                  aria-label="Shop"
                  to="/shop"
                >
                  Shop
                </Link>
              </li>
            </ul>
          </nav>

          <nav className={styles["nav-col"]}>
            <p className={styles["footer-heading"]}>Resources</p>
            <div className={styles.line}></div>

            <ul className={styles["footer-nav"]}>
              <li>
                <Link
                  className={styles["footer-link"]}
                  aria-label="Help center"
                  to="/help-center"
                >
                  Help center
                </Link>
              </li>
              <li>
                <Link
                  className={styles["footer-link"]}
                  aria-label="Privacy-terms"
                  to="privacy-terms"
                >
                  Privacy & terms
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
