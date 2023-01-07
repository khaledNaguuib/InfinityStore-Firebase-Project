import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// this component is used to redirect the user to the correct page after clicking on the link in the email
// the link contains the mode and the oobCode which is used to verify the email or reset the password
// the mode is used to determine which page to redirect the user to
// the oobCode is used to verify the email or reset the password

const Actions = () => {
  const navigate = useNavigate();
  // URL Search Params  => To get the oobCode from the URL
  const params = new URLSearchParams(window.location.search);
  const oobCode = params.get("oobCode");
  const mode = params.get("mode");
  console.log(mode);
  // go to the correct page based on the mode in the URL
  // if the mode is verifyEmail then go to the verify page
  // if the mode is resetPassword then go to the reset page
  // if mode is not verifyEmail or resetPassword then go to change Email page
  useEffect(() => {
    if (mode === "verifyEmail") {
      navigate(`/verfiy?oobCode=${oobCode}`);
    } else if (mode === "resetPassword") {
      navigate(`/reset?oobCode=${oobCode}`);
    } else {
      navigate(`/changeEmail`);
    }
  }, [mode, navigate, oobCode]);
  return null;
};

export default Actions;
