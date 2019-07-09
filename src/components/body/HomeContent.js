import React, { Fragment } from 'react';

import { NAVBAR_HEIGHT } from '../../template';
import mapImg from '../../assets/img/map/map_1920.jpg';
import luggageImg from '../../assets/img/luggage/luggage_1920.jpg';

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
    background: `url(${mapImg}) no-repeat center fixed`,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtPresentation: {
    height: 'auto',
    minHeight: 300,
    minWidth: 300,
    width: '50%',
    boxShadow: '5px 4px 3px black',
    opacity: 0.8,
    backgroundColor: 'white',
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 5,
  },
};

const HomeContent = () => {
  return (
    <Fragment>
      <section
        style={{
          ...styles.background,
          ...styles.sectionOne,
          ...styles.container,
        }}
      >
        <div
          style={{
            ...styles.txtPresentation,
            ...styles.container,
          }}
        >
          <p>
            Him boisterous invitation dispatched had connection inhabiting
            projection. By mutual an mr danger garret edward an. Diverted as
            strictly exertion addition no disposal by stanhill. This call wife
            do so sigh no gate felt. You and abode spite order get. Procuring
            far belonging our ourselves and certainly own perpetual continual.
            It elsewhere of sometimes or my certainty. Lain no as five or at
            high. Everything travelling set how law literature. Consider now
            provided laughter boy landlord dashwood. Often voice and the spoke.
            No shewing fertile village equally prepare up females as an. That do
            an case an what plan hour of paid. Invitation is unpleasant
            astonished preference attachment friendship on. Did sentiments
            increasing particular nay. Mr he recurred received prospect in.
            Wishing cheered parlors adapted am at amongst matters.
          </p>
        </div>
      </section>
      <section style={{ ...styles.background, ...styles.sectionTwo }}>
        Section 2
      </section>
    </Fragment>
  );
};

export default HomeContent;
