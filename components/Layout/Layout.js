import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ModalContainer from "./ModalContainer";

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <ModalContainer>
          {children}
      </ModalContainer>
      <Footer/>
    </>
  );
};

export default Layout;
