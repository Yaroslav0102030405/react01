import React from 'react';
import AppBar from '../AppBar/AppBar';
import Container from '../Container/Container';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Container> {children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
