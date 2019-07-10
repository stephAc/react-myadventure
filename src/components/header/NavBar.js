import React, { Component } from 'react';
import Radium from 'radium';

import { NAVBAR_HEIGHT } from '../../template';

const styles = {
  navBar: {
    height: `${NAVBAR_HEIGHT}`,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    transition: 'background-image 1s',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  navBarBtn: {
    backgroundColor: 'inherit',
    border: 'none',
    fontWeight: 'bold',
    fontSize: 15,
    ':hover': {
      cursor: 'pointer',
    },
  },
};

class NavBar extends Component {
  componentDidMount() {
    window.onscroll = function() {
      let navBar = document.getElementById('navBar');

      if (window.pageYOffset === 0) {
        navBar.style.boxShadow = null;
        navBar.style.backgroundImage = 'inherit';
      } else if (window.pageYOffset > 200) {
        navBar.style.boxShadow = '0px 3px 5px black';
        navBar.style.backgroundImage =
          'linear-gradient(to right, white, #bce0ee)';
      }
    };
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    return (
      <nav id="navBar" style={styles.navBar}>
        <span
          style={{
            alignSelf: 'center',
            marginLeft: 10,
            userSelect: 'none',
            MozUserSelect: 'none',
          }}
        >
          MyAdventure
        </span>
        <button style={styles.navBarBtn}>Mon Compte</button>
      </nav>
    );
  }
}

export default Radium(NavBar);
