import styles from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';



const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef()
  const numberRef = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasSuccess, setHasSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmitionHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    const number = numberRef.current.value;
    const data = { name, email, number, message };

    if(!name || !email || !message || !number){
      setHasError(true);
      setErrorMessage("All fields are required, please fill them all.");
      setIsSubmitting(false);
      return;
    }

    const response = await fetch(
      "https://react-http-products-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      setHasError(true);
      setErrorMessage("Something went wrong, please try again later.");
      setIsSubmitting(false);
      return;
    } else {
      setHasError(false);
      setErrorMessage("");
      setHasSuccess(true);
      setSuccessMessage("Your message has been sent successfully. We will get in touch with you soon. Thank you.");
      console.log(response);
    }

    setIsSubmitting(false);
    setDidSubmit(true);

    // reset the form
    nameRef.current.value = "";
    emailRef.current.value = "";
    numberRef.current.value = "";
    messageRef.current.value = "";
  };
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactContainer}>
        <Slide left>
        <h1 id="title" className={styles.titlePrimary}>
          LET'S TALK
        </h1>
        <p className={styles.titleSecondary}>
          or swing with us for a cup of coffee
        </p>

        <div className={styles.line}></div>
        </Slide>

<Fade bottom>
        <div className={styles.formContainer}>
          <p className={styles.clarifyBold}>
            InfinityStore's Team is always there to support you, highly
            responsive to your Inquiries and suggestions. Don’t Ever Hesitate to
            contact Our Team, we will be extremely happy to provide our full
            support through the below contact details:
          </p>

          <ul>
            <li className={styles.listItem}>
              <FontAwesomeIcon className={styles.icon} icon={faPhone} /> +20
              1551881810
            </li>
            <li className={styles.listItem}>
              <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
              customercare@InfinityStore.com
            </li>
            <li className={styles.listItem}>
              <FontAwesomeIcon className={styles.icon} icon={faMessage} />
              'Contact Us' form
            </li>
          </ul>
        </div>
        <form onSubmit={onSubmitionHandler} className={styles.formContainer}>
          <div className={styles.formControlGroup}>
            <div className={styles.formFlex}>
              <label className={styles.inputLabel} htmlFor="name">
                Name
              </label>
              <input
                className={styles.formInput}
                ref={nameRef}
                type="text"
                id="name"
                autoCapitalize="off"
                autoComplete="on"
              />
            </div>
            <div className={styles.formFlex}>
              <label className={styles.inputLabel} htmlFor="email">
                Email
              </label>
              <input
                className={styles.formInput}
                ref={emailRef}
                type="email"
                id="email"
                autoCapitalize="off"
                autoComplete="on"
              />
            </div>
          </div>
          <div className={styles.formControl}>
            <label className={styles.inputLabel} htmlFor="number">
              Phone Number <br />
              <span className={styles.inputClarify}> (Enter your phone number followed by your country code at first)</span>
            </label>
            <input
              type="text"
              className={styles.formInput}
              ref={numberRef}
              id="number"
            />
          </div>

          <div className={styles.formControl}>
            <label className={styles.inputLabel} htmlFor="message">
              Message
            </label>
            <textarea
              className={styles.formInputTextArea}
              ref={messageRef}
              id="message"
            />
          </div>

          {/* HANDLING FEEDBACKS */}
          {hasError && (
            <div className={styles.errorMessage}>
              <ul className={styles.errorMsgList}>
                <li> {errorMessage} </li>
              </ul>
            </div>
          )}
          {hasSuccess && (
            <div className={styles.successMessage}>
              <ul className={styles.successMsgList}>
                <li> {successMessage} </li>
              </ul>
            </div>
          )}

          {/* <img  className={styles.imageMap} src={map} alt="contact" /> */}
          <div className="center">
            <button className={styles.btnSubmit}>Send</button>
          </div>
        </form>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
