import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

// For Portal containers
const backdrop = document.getElementById("backdrop-root");
const overlay = document.getElementById("overlay-root");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, backdrop)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlay
      )}
    </>
  );
};



export default Modal;
