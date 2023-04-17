// BaseLayout.js
import Footer from 'components/Common/Footer';
import IndexNavbar from 'components/Common/IndexNavbar';
import React from 'react';

const BaseLayout = ({ children }) => {
  return (
    <>
      <IndexNavbar />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
