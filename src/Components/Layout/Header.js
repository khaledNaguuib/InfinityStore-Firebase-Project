import { Fragment } from "react";
import FeaturedIn from "./FeaturedIn";
import WowLayout from "./WowLayout";
import Products from "../Products/Products";
import Member from "../UI/Member";
import styles from "./Header.module.css";
import Slide from 'react-reveal/Slide';


const Header = (props) => {
  return (
    <Fragment>
      <section className={styles.sectionHero}>

        <Slide left>
        <div className={styles.rightSide}>
          <h1 className={styles.mainHeading}>
            Regain your confidence on the court.
          </h1>
          <p className={styles.subHeading}>
            A shoe built with purpose and to take your game to the next level.
          </p>
          <svg
            className={styles.downArrow}
            viewBox="0 0 16 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
            className={styles.downArrowPath}
              d="M7.29289 131.707C7.68341 132.098 8.31658 132.098 8.7071 131.707L15.0711 125.343C15.4616 124.953 15.4616 124.319 15.0711 123.929C14.6805 123.538 14.0474 123.538 13.6568 123.929L7.99999 129.586L2.34314 123.929C1.95262 123.538 1.31945 123.538 0.928927 123.929C0.538402 124.319 0.538402 124.953 0.928927 125.343L7.29289 131.707ZM7 -4.37114e-08L6.99999 131L8.99999 131L9 4.37114e-08L7 -4.37114e-08Z"
              fill="black"
            />
          </svg>
        </div>
        </Slide>

        <div className={styles.heroImg}></div>
      </section>
      
        <FeaturedIn />
        <WowLayout />
        <main>
          <Products />
          <Member />
        </main>
    </Fragment>
  );
};
export default Header;
