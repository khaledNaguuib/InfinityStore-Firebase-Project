import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import authContext from "../Components/Store/Auth-Context";
const PrivateRoutes = () => {
  const authCtx = useContext(authContext);
  let authToken = authCtx.isLoggedIn;
  console.log("Auth Context from PrivateRoutes", authCtx);
  return !authToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
