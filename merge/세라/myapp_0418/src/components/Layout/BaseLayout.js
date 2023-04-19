// BaseLayout.js
import DemoFooter from "components/Footers/DemoFooter";
import IndexNavbar from "components/Navbars/IndexNavbar";
import React from "react";

const BaseLayout = ({ children }) => {
  return (
    <>
      <IndexNavbar />
      {children}
      <DemoFooter />
    </>
  );
};

export default BaseLayout;
