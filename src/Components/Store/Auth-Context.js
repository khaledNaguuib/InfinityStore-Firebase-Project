import React from "react";
import { useState } from "react";

const authContext = React.createContext({
  // userData:{},
  displayName: "",
  email: "",
  oobCode: "",
  emailVerified: false,
  token: "",
  isLoggedIn: false,
  setUserInfo: (userData) => {},
  getUserData: () => {},
  updateEmail: (email) => {},
  register: (displayName) => {},
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  // manage the state of the context token
  // if there is a token in the local storage, use it as the initial state of the token state
  // otherwise, use null as the initial state of the token state
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [displayName, setDisplayName] = useState(null);
  const [email, setEmail] = useState(null);
  const [oobCode, setOobCode] = useState(null);
  const [emailVerified, setEmailVerified] = useState(false);
  const [userData, setUserData] = useState({});

  // manage the state of the context isLoggedIn by looking at the token state
  // no token => ain't logged in   ||  token => logged in
  const userIsLoggedIn = !!token;

  const isEmailVerfied = (value, email) => {
    setEmailVerified(value);
    setEmail(email);
    localStorage.setItem("email", email);
    localStorage.setItem("emailVerified", value);
  };
  const registerHandler = (displayName, email, token) => {
    setDisplayName(displayName);
    setEmail(email);
    setToken(token);

    localStorage.setItem("displayName", displayName);
    localStorage.setItem("email", email);
    localStorage.setItem("token", token);
    // initial value of emailVerified is false
    localStorage.setItem("emailVerified", false);
  };

  const isOobCode = (oobCode) => {
    setOobCode(oobCode);
    localStorage.setItem("oobCode", oobCode);
  };

  // logout function
  const logoutHandler = () => {
    setToken(null);
    setDisplayName(null);
    setEmail(null);
    setOobCode(null);

    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };
  // login function
  const loginHandler = (token, email = "", displayName, emailVerified) => {
    setToken(token);
    setEmail(email);
    setDisplayName(displayName);
    setEmailVerified(emailVerified);

    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("displayName", displayName);
    localStorage.setItem("emailVerified", emailVerified);
  };

  // update email function
  const updateEmailHandler = (email) => {
    setEmail(email);
    localStorage.setItem("email", email);
  };

  // set user info
  const setUserInfo = (userData) => {
    setUserData(userData);
  };
  // get user info
  const getUserData = () => {
    return userData;
  };

  // return the context provider
  const contextValue = {
    // userData: userData,
    displayName: displayName,
    email: email,
    oobCode: oobCode,
    emailVerified: emailVerified,
    token: token,
    isLoggedIn: userIsLoggedIn,
    updateEmail: updateEmailHandler,
    register: registerHandler,
    login: loginHandler,
    logout: logoutHandler,
    isEmailVerfied: isEmailVerfied,
    setUserInfo: setUserInfo,
    getUserData: getUserData,
    isOobCode: isOobCode,
  };

  return (
    <authContext.Provider value={contextValue}>
      {props.children}
    </authContext.Provider>
  );
};

export default authContext;
