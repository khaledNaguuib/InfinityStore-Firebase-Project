import layoutShoes1 from "../../asstes-optimized/layoutshoe1.webp";
import layoutShoes2 from "../../asstes-optimized/layoutshoes2.webp";
import layoutShoes3 from "../../asstes-optimized/layoutshoe3.webp";
import SectionTitle from "../UI/SectionTitle";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import styles from "./WowLayout.module.css";


const WowLayout = (props) => {
  return (
    <>
    <Fade bottom>
      <SectionTitle
        desc="Shop our WOW Collection"
        header="Find out our latest collection"
        className={styles.textStart}
      />
      <div className={styles["layout-wrapper"]}>
        <svg
          className={styles["layout-bigArrow"]}
          viewBox="0 0 68 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_114_5)">
            <path d="M5 64V1L11.5972 56.1658L63 64H5Z" fill="#424242" />
            <path d="M5 64V1L11.5972 56.1658L63 64H5Z" stroke="black" />
          </g>
          <defs>
            <filter
              id="filter0_d_114_5"
              x="0.5"
              y="0.940643"
              width="66.5753"
              height="71.5594"
              filterUnits="userSpaceOnUse"
            >
              <feFlood result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_114_5"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_114_5"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <section className={styles["layout-section"]}>
          <img
            src={layoutShoes3}
            className={`${styles.airforce} ${styles.imageClass} `}
            alt="Air Force Shoes"
          />
          <h1 className={styles["layout-title"]}>Get Fashion</h1>
          <img
            src={layoutShoes2}
            className={`${styles["airforce-orange"]}  ${styles.imageClass}  `}
            alt="Air force orange SHoes"
          />
          <div className={styles.content}>
            <p className={styles["content-desc"]}>
              Shop the new fall collection of wow appareal. The hottest trends,
              the latest vibes, and the best eco-friendly quality.
            </p>
            <Link className={styles["content-link"]} to='/shop'>
              <span>Shop wow</span>
              <svg
                className={styles["content-arrow"]}
                width="258"
                height="8"
                viewBox="0 0 258 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M257.354 4.35355C257.549 4.15829 257.549 3.84171 257.354 3.64645L254.172 0.464466C253.976 0.269204 253.66 0.269204 253.464 0.464466C253.269 0.659728 253.269 0.976311 253.464 1.17157L256.293 4L253.464 6.82843C253.269 7.02369 253.269 7.34027 253.464 7.53553C253.66 7.7308 253.976 7.7308 254.172 7.53553L257.354 4.35355ZM0 4.5H257V3.5H0V4.5Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
          <img
            src={layoutShoes1}
            className={`${styles["air-jordan"]}  ${styles.imageClass} `}
            alt="Air Jordan Shoes"
          />
        </section>
      </div>
      </Fade>
    </>
  );
};

export default WowLayout;
