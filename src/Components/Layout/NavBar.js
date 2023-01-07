import { Link } from "react-router-dom";
import { WavyLink } from "react-wavy-transitions";
import HeaderCartButton from "./HeaderCartButton";
import Logo from "../../asstes-optimized/LOGOOOOO.webp";
import authContext from "../Store/Auth-Context";
import { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./navbar.module.css";

const NavBar = (props) => {
  // navigation
  const navigate = useNavigate();
  // ref for the navbar
  const navRef = useRef();
  // state for the navbar sticky
  const [isSticky, setIsSticky] = useState(false);

  const profileNavigateHandler = () => {
    navigate("/profile");
  };
  // to toggle the hamburger menu
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  // toggle the hamburger menu when the user clicks on the links
  const toggleHandlerLinks = () => {
    setToggle(false);
  };

  const authCtx = useContext(authContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  };

  useEffect(() => {
    const header = navRef?.current;
    const observer = new IntersectionObserver(
      ([e]) => {
        setIsSticky(e.isIntersecting);
      },
      { threshold: [0.1] }
    );
    console.log(observer);

    if (header) {
      observer.observe(header);
    }

    // clean up the observer
    return () => {
      observer.unobserve(header);
    };
  }, [navRef]);

  return (
    <header
      ref={navRef}
      className={`${styles.header} ${isSticky ? styles.sticky : ""}`}
    >
      <button
        onClick={toggleHandler}
        className={`${styles["hamburger"]} ${styles["hamburger--squeeze"]} ${
          toggle ? styles["is-active"] : ""
        }`}
      >
        <span className={styles["hamburger-box"]}>
          <span className={styles["hamburger-inner"]}></span>
        </span>
      </button>

      {/* <a href="#" className={styles.logo}>
          Shoe
          <span className={styles.logoSpan}>Brand</span>
        </a> */}
        
      <Link to="/">
        <img src={Logo} alt="Omnifood logo" className={styles.logo} />
      </Link>

      <nav className={`${styles.mainNav} ${toggle ? styles.navActive : ""} `}>
        <ul className={`${styles.mainNavList}  `}>
          <li onClick={toggleHandlerLinks}>
            <WavyLink
              to="/home"
              aria-label="Home"
              color="#000000"
              className={styles.mainNavLink}
            >
              Home
            </WavyLink>
          </li>
          <li onClick={toggleHandlerLinks}>
            <WavyLink
              aria-label="about"
              to="/about"
              color="#000000"
              className={styles.mainNavLink}
            >
              About
            </WavyLink>
          </li>
          <li onClick={toggleHandlerLinks}>
            <WavyLink
              to="/shop"
              aria-label="shop"
              color="#000000"
              className={styles.mainNavLink}
            >
              Shop
            </WavyLink>
          </li>
          <li onClick={toggleHandlerLinks}>
            <WavyLink
              aria-label="contact"
              to="/contact"
              color="#000000"
              className={styles.mainNavLink}
            >
              Contact
            </WavyLink>
          </li>
          <li onClick={toggleHandlerLinks}>
            <WavyLink
              to="/faq"
              aria-label="faq"
              color="#000000"
              className={styles.mainNavLink}
            >
              FAQ
            </WavyLink>
          </li>
        </ul>
      </nav>
      <div className={styles.actionsBTNS}>
        <HeaderCartButton onClick={props.onShowCart} />
        {!isLoggedIn && (
          <Link
            aria-label="login"
            to="/login"
            className={`fa-solid fa-user + ${styles.userIcon}`}
          ></Link>
        )}
        {/* {isLoggedIn && (
          <Link
            aria-label="profile"
            to="/profile"
            className={`fa-solid fa-user  ${styles.userIconProfile}`}
          ></Link>
        )} */}
        {isLoggedIn && (
          <img
            onClick={profileNavigateHandler}
            src="https://img.icons8.com/color/48/null/circled-user-male-skin-type-7--v1.png"
          />
        )}
        {isLoggedIn && (
          <Link
            aria-label="logout"
            onClick={logoutHandler}
            to="/home"
            className={`fa-solid fa-right-from-bracket ${styles.userLogoutIcon}`}
          ></Link>
        )}
      </div>
    </header>
  );
};

export default NavBar;
