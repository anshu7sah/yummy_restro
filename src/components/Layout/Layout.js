import React from "react";
import classes from "./Layout.module.css";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  const renderLayout = () => (
    <div className={classes.layout}>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
  return <>{renderLayout()}</>;
};

export default Layout;
