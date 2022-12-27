import styles from "./SectionTitle.module.css";

const SectionTitle = (props) => {
  const classes= `${styles["section__title"]} ${props.className}`
  return (
    <div className={classes}>
      <h2 className={styles.section__description}>{props.desc}</h2>
      <h3 className={styles.section__header}>
        {props.header}
      </h3>
    </div>
  );
};

export default SectionTitle;
