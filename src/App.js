import React, { Suspense } from "react";
import { useState, useEffect, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./Components/Layout/NavBar";
import CartProvider from "./Components/Store/CartProvider";
import Footer from "./Components/Layout/Footer";
import { InfinitySpin } from "react-loader-spinner";
import { WavyContainer } from "react-wavy-transitions";
import authContext from "./Components/Store/Auth-Context";
import AnimatedCursor from "react-animated-cursor";
/* OLD NORMAL IMPORTS WITHOUT LAZY LOADING
    import Cart from "./Components/Cart/Cart";
    import Header from "./Components/Layout/Header";
    import About from "./Components/pages/About";
    import Shop from "./Components/pages/Shop";
    import Register from "./Components/pages/Register";
    import Login from "./Components/pages/Login";
    import Contact from "./Components/pages/Contact";
    import UserProfile from "./Profile/User-Profile";
    import ForgetPassword from "./Components/pages/ForgetPassword";
    import PasswordReset from "./Profile/PasswordReset";
    import ConfirmEmail from "./Components/pages/ConfirmEmail";
    import Actions from "./Components/pages/actions";
    import NotFound from "./Components/pages/NotFound";
    import Main from "./Components/Layout/Main";
    import FAQ from "./Components/pages/FAQ";
    import Success from "./Components/pages/Success";
    import Cancel from "./Components/pages/Cancel";
    import ChangeEmail from "./Profile/ChangeEmail";

*/

// adding lazy loading to load the  components only when the user clicks on the link

const Cart = React.lazy(() => import("./Components/Cart/Cart"));
const Header = React.lazy(() => import("./Components/Layout/Header"));
const About = React.lazy(() => import("./Components/pages/About"));
const Shop = React.lazy(() => import("./Components/pages/Shop"));
const Register = React.lazy(() => import("./Components/pages/Register"));
const Login = React.lazy(() => import("./Components/pages/Login"));
const Contact = React.lazy(() => import("./Components/pages/Contact"));
const UserProfile = React.lazy(() => import("./Profile/User-Profile"));
const ForgetPassword = React.lazy(() =>
  import("./Components/pages/ForgetPassword")
);
const PasswordReset = React.lazy(() => import("./Profile/PasswordReset"));
const ConfirmEmail = React.lazy(() =>
  import("./Components/pages/ConfirmEmail")
);
const Actions = React.lazy(() => import("./Components/pages/actions"));
const NotFound = React.lazy(() => import("./Components/pages/NotFound"));
const Main = React.lazy(() => import("./Components/Layout/Main"));
const FAQ = React.lazy(() => import("./Components/pages/FAQ"));
const Success = React.lazy(() => import("./Components/pages/Success"));
const Cancel = React.lazy(() => import("./Components/pages/Cancel"));
const ChangeEmail = React.lazy(() => import("./Profile/ChangeEmail"));
const ChangePassword = React.lazy(() => import("./Profile/ChangePassword"));
const VerifyEmail = React.lazy(() => import("./Profile/VerifyEmail"));

function App() {
  const authCtx = useContext(authContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const [cartIsShown, setCartIsShown] = useState(false);

  console.log("Auth Context From APP.js", authCtx);


  // to preserve the login state when the user refreshes the page
  useEffect(() => {
    if (isLoggedIn) {
      const displayName = localStorage.getItem("displayName");
      const email = localStorage.getItem("email");
      const token = localStorage.getItem("token");
      const emailVerified = localStorage.getItem("emailVerified");
      authCtx.login(token, email, displayName, emailVerified);
    }
  }, [authCtx, isLoggedIn]);

  // to preserve the cart state when the user refreshes the page

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  // Set loading state to true initially
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };

    loadData();
  }, []);

  // If page is in loading state, display
  // loading message. Modify it as per your
  // requirement.
  if (loading) {
    return (
      <div className="loader">
        <InfinitySpin width="200" color="white" />
      </div>
    );
  } else {
    return (
      <>
        {/* Suspense fallback is needed to specifiy a ui to be shown untill the component is loaded */}
        <Suspense
          fallback={
            <div className="loader2">
              <InfinitySpin width="200" color="#4fa94d" />
            </div>
          }
        >
          <AnimatedCursor
            innerSize={20}
            outerSize={15}
            color="000, 000, 000"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
              "h1",
              "p",
            ]}
          />
          <CartProvider>
            <NavBar onShowCart={showCartHandler} />
            {cartIsShown && <Cart onClose={hideCartHandler} />}

            <WavyContainer />

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Navigate replace to="/home">
                      {" "}
                      <Header /> <Main />{" "}
                    </Navigate>
                  </>
                }
              />
              <Route index element={<Header />} />
              <Route path="/home" element={<Header />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/login"
                element={isLoggedIn ? <Navigate to="/home" /> : <Login />}
              />
              <Route path="/login/forget" element={<ForgetPassword />} />
              <Route
                path="/register"
                element={!isLoggedIn ? <Register /> : <Navigate to="/home" />}
              />
              <Route
                path="/profile"
                element={
                  isLoggedIn ? <UserProfile /> : <Navigate to="/login" />
                }
              />
              <Route path="/reset" element={<PasswordReset />} />
              <Route path="/verfiy" element={<ConfirmEmail />} />
              <Route path="/actions" element={<Actions />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />
              <Route path="/changeEmail" element={<ChangeEmail />} />
              <Route path="/changePassword" element={<ChangePassword />} />
              <Route path="/verifyEmail" element={<VerifyEmail />} />
              <Route path="*" element={<NotFound />} />

            </Routes>
          </CartProvider>

          <Footer />
        </Suspense>
      </>
    );
  }
}

export default App;
