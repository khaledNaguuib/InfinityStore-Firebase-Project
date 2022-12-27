import styles from "./FeaturedIn.module.css";
import SectionTitle from "../UI/SectionTitle";
import logo1 from "../../asstes-optimized/techcrunch.webp";
import logo2 from "../../asstes-optimized/usa-today.webp";
import logo3 from "../../asstes-optimized/forbes.webp";
import logo4 from "../../asstes-optimized/the-new-york-times.webp";
import logo5 from "../../asstes-optimized/business-insider.webp";
import logo6 from "../../asstes-optimized/NikeLogo444.webp";
import Fade from "react-reveal/Fade";

const FeaturedIn = (props) => {
  return (
    <>
      <section className={styles["section-featured"]}>
        <Fade bottom>
          <div className={styles.container}>
            <SectionTitle desc="Featured In" header="Our Partners" />
            <div className={styles["featured-logos"]}>
              <img
                src={logo1}
                className={styles.imageFilter}
                alt="featured-in-logo"
              />
              <img
                src={logo2}
                className={styles.imageFilter}
                alt="featured-in-logo"
              />
              <img
                src={logo3}
                className={styles.imageFilter}
                alt="featured-in-logo"
              />
              <img
                src={logo4}
                className={styles.imageFilter}
                alt="featured-in-logo"
              />
              <img
                src={logo5}
                className={styles.imageFilter}
                alt="featured-in-logo"
              />
              <img
                src={logo6}
                className={styles.imageFilter}
                alt="featured-in-logo"
              />
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default FeaturedIn;
