import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
const NotFound = () => {
  return (
    <div className={styles.NotFoundWrapper}>
      <div className={styles.NotFoundContainer}>
        <h1 className={styles.titlePrimary}>404 Page Not Found</h1>
        <p className={styles.clarify}>
          The page you were looking for does not exist.
        </p>


        <div className='center'>
        <Link to="/" className={styles.homeLink}>Go to home</Link>
        </div>



      </div>
    </div>
  );
};

export default NotFound;
