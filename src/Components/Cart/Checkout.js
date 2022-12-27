import { useRef, useState } from "react";
import styles from "./../Cart/checkout.module.css";


const isEmpty = (value) => value.trim() === "";


const Checkout = (props) => {
 
  const [formValidity, setFormValidity] = useState({
    firstName: true,
    lastName: true,
    address: true,
    city: true,
    country: true,
  });

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const countryInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;

    const enteredFirstNameIsValid = !isEmpty(enteredFirstName);
    const enteredLastNameIsValid = !isEmpty(enteredLastName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredCountryIsValid = !isEmpty(enteredCountry);

    setFormValidity({
      firstName: enteredFirstNameIsValid,
      lastName: enteredLastNameIsValid,
      address: enteredAddressIsValid,
      city: enteredCityIsValid,
      country: enteredCountryIsValid,
    });

    const formIsValid =
      enteredFirstNameIsValid &&
      enteredLastNameIsValid &&
      enteredAddressIsValid &&
      enteredCityIsValid &&
      enteredCountryIsValid;

    if (!formIsValid) {
      return;
    }

    // submit data
    props.onConfirm({
      firstName: enteredFirstName,
      lastName: enteredLastName,
      address: enteredAddress,
      city: enteredCity,
      country: enteredCountry,
    });
  };

  return (
    <form className={styles.formWrapper} onSubmit={confirmHandler}>
      <div className={styles.formGroup}>
        <div className={styles.formControlInfo}>
          <label
            className={
              formValidity.firstName ? styles.inputLabel : styles.labelError
            }
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className={!formValidity.firstName && styles.inputError}
            id="firstName"
            type="text"
            ref={firstNameInputRef}
          />
          {!formValidity.firstName && (
            <span className={styles.errorMsg}>First name is required!</span>
          )}
        </div>
        <div className={styles.formControlInfo}>
          <label
            className={
              formValidity.lastName ? styles.inputLabel : styles.labelError
            }
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className={!formValidity.lastName && styles.inputError}
            id="lastName"
            type="text"
            ref={lastNameInputRef}
          />
          {!formValidity.lastName && (
            <span className={styles.errorMsg}>Last name is required!</span>
          )}
        </div>
      </div>

      <div className={styles.formControl}>
        <label
          className={
            formValidity.address ? styles.inputLabel : styles.labelError
          }
          htmlFor="address"
        >
          Address
        </label>
        <input
          className={!formValidity.address && styles.inputError}
          id="address"
          type="text"
          ref={addressInputRef}
        />
        {!formValidity.firstName && (
          <span className={styles.errorMsg}>Address is required!</span>
        )}
      </div>
      <div className={styles.formControl}>
        <label
          className={formValidity.city ? styles.inputLabel : styles.labelError}
          htmlFor="city"
        >
          City
        </label>
        <input
          className={!formValidity.city && styles.inputError}
          id="city"
          type="text"
          ref={cityInputRef}
        />
        {!formValidity.city && (
          <span className={styles.errorMsg}> City is required!</span>
        )}
      </div>
      <div className={styles.formControl}>
        <label
          className={
            formValidity.country ? styles.inputLabel : styles.labelError
          }
          htmlFor="country"
        >
          Country
        </label>
        <input
          className={!formValidity.country && styles.inputError}
          id="country"
          type="text"
          ref={countryInputRef}
        />
        {!formValidity.country && (
          <span className={styles.errorMsg}>Country is required!</span>
        )}
      </div>

      <div className={styles.buttonGroup}>
        <button
          className={styles.btnCancel}
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button className={styles.btnConfirm}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
