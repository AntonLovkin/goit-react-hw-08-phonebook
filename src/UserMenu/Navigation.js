import React from 'react';
import { NavLink } from 'react-router-dom';
// import authSelectors from '../redux/auth/auth-selectors';
// import { connect } from 'react-redux';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => (
  <nav>
    <NavLink
      to="/contacts"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Контакты
    </NavLink>
      
  </nav>
);

// const mapStateToProps = state => {
//   isAuthenticated: authSelectors.getIsAuthenticated(state)
// }

export default Navigation;