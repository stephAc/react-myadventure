import React from 'react';

import mapImg from '../../assets/img/map/map_1920.jpg';

const styles = {
  background: {
    height: '100vh',
    background: `url(${mapImg}) no-repeat center`,
    WebkitBackgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    backgroundSize: 'cover',
    position: 'relative',
    overflow: 'hidden',
  },
};

const HomeFooter = () => {
  return <div style={{ ...styles.background, height: 400 }}>foot</div>;
};

export default HomeFooter;
