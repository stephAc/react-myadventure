import React, { Fragment } from 'react';

import NavBar from '../components/header/NavBar';
import HomeContent from '../components/body/HomeContent';

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <HomeContent />
    </Fragment>
  );
};

export default Home;
