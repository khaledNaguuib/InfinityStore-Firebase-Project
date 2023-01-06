import pic from "../../asstes-optimized/aboutPic.webp";
import svg from "../../assets/three-circles-svgrepo-com.svg";
import arrow from "../../asstes-optimized/arrowPNG.webp";
import avatar1 from "../../asstes-optimized/Avatar1.webp";
import avatar2 from "../../asstes-optimized/Avatar2.webp";
import avatar3 from "../../asstes-optimized/Avatar3.webp";
import avatar4 from "../../asstes-optimized/avatar4.webp";
import avatar5 from "../../asstes-optimized/Avatar5.webp";
import avatar6 from "../../asstes-optimized/Avatar6.webp";
import styles from "./about.module.css";
import Fade from "react-reveal/Fade";


const About = () => {
  return (
    <>
      <Fade top>
        <div className={styles.aboutWrapper}>
          <svg
            className={styles.waves}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              className={styles.waveFill}
              d="M0,64L26.7,101.3C53.3,139,107,213,160,218.7C213.3,224,267,160,320,122.7C373.3,85,427,75,480,90.7C533.3,107,587,149,640,160C693.3,171,747,149,800,154.7C853.3,160,907,192,960,176C1013.3,160,1067,96,1120,96C1173.3,96,1227,160,1280,170.7C1333.3,181,1387,139,1413,117.3L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
            ></path>
          </svg>
          <div className={styles.aboutHeader}>
            <h2 className={styles.titlePrimary}>The InfinityStore Team</h2>
            <h5 className={styles.clarify}>
              Behind every small and mid-size business are great people. Meet
              the people behind ours.
            </h5>
          </div>

          <img src={pic} fetchpriority="high" className={styles.pic} alt='illustration about People standing together' />
        </div>
      </Fade>

      <Fade bottom>
        <div className={styles.missionWrapper}>
          <div className={styles.missionContent2}>
            <h2 className={styles.missionTitle2}>Our Mission</h2>
            <div className={styles.line2}></div>
            <p className={styles.missionDesc2}>
              The entrepreneurs and employees in small and mid-size businesses
              power the American economy. Their tenacity, perseverance and
              dreams represent the backbone of our workforce. But these
              businesses face challenges disproportionate to their size and
              resources. And technology providers largely focus on the needs of
              large businesses creating services out of touch and out of reach
              for small and mid-size businesses. At Zenefits, our mission is to
              level the playing field for the other 99.7% — the underserved
              small businesses that fuel our economy. We provide innovative and
              intuitive HR and payroll software and services purpose-built for
              these small and mid-siz e companies.
            </p>
          </div>
        </div>

        <div className={styles.teamWrapper}>
          <div className={styles.teamRight}>
            <h2 className={styles.teamTitle}>
              Meet our team of{" "}
              <em className={styles.italicTitle}>Creators, Designers</em> and
              world-class
              <em className={styles.italicTitle}> problem solvers</em>
            </h2>
            <p className={styles.teamDesc}>
              To be the company our customers want us to be, it takes an
              eclectic group of passionate operators. Get to know the people
              leading the way at Infinity.
            </p>
          </div>
          <div className={styles.teamLeft}>
            <img src={svg} className={styles.svgIcon} alt="svg circle" />
            <img src={arrow} className={styles.svgArrow} alt="svg arrow" />
          </div>
        </div>

        <div className={styles.teamMembersWrapper}>
          <div className={styles.teamMember}>
            <div className={styles.imageContainer}>
              <img
                src={avatar1}
                className={styles.imageAvatar}
                alt="Mia ward, our CEO and Founder of the store"
              />
            </div>
            <div className={styles.memberInfo}>
              <h3 className={styles.memberName}>Mia Ward</h3>
              <h5 className={styles.memberTitle}>Founder & CEO</h5>
            </div>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.imageContainer}>
              <img
                src={avatar2}
                className={styles.imageAvatar}
                alt="Lana Steiner, our Chief Operating Officer"
              />
            </div>
            <div className={styles.memberInfo}>
              <h3 className={styles.memberName}>Lana Steiner</h3>
              <h5 className={styles.memberTitle}>Chief Operating Officer</h5>
            </div>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.imageContainer}>
              <img
                src={avatar3}
                className={styles.imageAvatar}
                alt="Phoenix Baker, our HR Specialist"
              />
            </div>
            <div className={styles.memberInfo}>
              <h3 className={styles.memberName}>Phoenix Baker</h3>
              <h5 className={styles.memberTitle}>HR Specialist</h5>
            </div>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.imageContainer}>
              <img
                src={avatar4}
                className={styles.imageAvatar}
                alt="Abby Klassen, our Chief Marketing Officer"
              />
            </div>
            <div className={styles.memberInfo}>
              <h3 className={styles.memberName}>Abby Klassen</h3>
              <h5 className={styles.memberTitle}>Chief Marketing Officer</h5>
            </div>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.imageContainer}>
              <img
                src={avatar5}
                className={styles.imageAvatar}
                alt="Phoenix Baker, our Chief Financial Officer"
              />
            </div>
            <div className={styles.memberInfo}>
              <h3 className={styles.memberName}>Thomas Kleisner</h3>
              <h5 className={styles.memberTitle}>Chief Financial Officer</h5>
            </div>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.imageContainer}>
              <img
                src={avatar6}
                className={styles.imageAvatar}
                alt="Clay Johnson, our Product Manager"
              />
            </div>
            <div className={styles.memberInfo}>
              <h3 className={styles.memberName}>Clay Johnson</h3>
              <h5 className={styles.memberTitle}>Product Manager</h5>
            </div>
          </div>
        </div>
      </Fade>

      
    </>
  );
};

export default About;
