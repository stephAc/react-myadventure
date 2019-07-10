import React, { Fragment } from 'react';

import NavBar from '../components/header/NavBar';
import HomeContent from '../components/body/HomeContent';
import Footer from '../components/footer/HomeFooter';

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <HomeContent />
      <Footer />
    </Fragment>
  );
};

export default Home;
