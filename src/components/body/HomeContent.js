import React, { Fragment } from 'react';

import { NAVBAR_HEIGHT } from '../../template';
import destinationImg from '../../assets/img/destination.jpg';
import luggageImg from '../../assets/img/luggage/luggage_1920.jpg';
import avionImg from '../../assets/img/avion.jpg';
import groupImg from '../../assets/img/group.jpg';
import aloneImg from '../../assets/img/alone.jpg';

const styles = {
  background: {
    height: '100vh',
    WebkitBackgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    position: 'relative',
    overflow: 'hidden',
  },
  sectionOne: {
    // marginTop: `${NAVBAR_HEIGHT}`,
    //height: `calc(100vh - ${NAVBAR_HEIGHT}) `,
    background: `url(${luggageImg}) no-repeat center fixed`,
  },
  sectionTwo: {
    background: `url(${destinationImg}) no-repeat center`,
    backgroundSize: 'cover',
  },
  containerCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSectionTwo: {
    height: '100vh',
    display: 'flex',
  },
  txtSectionOne: {
    height: 'auto',
    minHeight: 250,
    minWidth: 300,
    opacity: 0.9,
    boxShadow: '5px 4px 3px black',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 5,
    background: `url(${avionImg}) no-repeat right `,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  txtSectionTwo: {
    width: 'fit-content',
    minWidth: 200,
    maxWidth: 400,
    padding: 20,
    margin: '50% auto',
    boxShadow: '0px 0px 5px burlywood',
  },
  img: {
    width: '50%',
    padding: 5,
  },
};

const HomeContent = () => {
  return (
    <Fragment>
      <section
        style={{
          ...styles.background,
          ...styles.sectionOne,
          ...styles.containerCenter,
        }}
      >
        <div
          style={{
            ...styles.txtSectionOne,
            textAlign: 'center',
          }}
        >
          <h1>My Adventure</h1>
          <br />
          <p>Start to plan your dream trip</p>
        </div>
      </section>
      <section style={styles.containerSectionTwo}>
        <div style={styles.img}>
          <p style={styles.txtSectionTwo}>
            Choisir litinéraire que vous préférez
            <br />
            Partir seul ou Accompagné
            <br />
            Gérer votre budget
            <br />
            Enregistrer vos billets et réservations
          </p>
        </div>
        <img src={destinationImg} alt="Destination names" style={styles.img} />
      </section>
      <section>
        <div style={{ display: 'flex', marginTop: 'auto' }}>
          <img src={groupImg} alt="Group" style={styles.img} />
          <img src={aloneImg} alt="Alone" style={styles.img} />
        </div>
      </section>
    </Fragment>
  );
};

export default HomeContent;
