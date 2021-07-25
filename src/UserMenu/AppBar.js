import React from 'react';
// import { connect } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
// import { authSelectors } from '../redux/auth';

const styles = {
  header: {
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

const AppBar = ({ isAuthenticated }) => (
  <header style={styles.header}>
    
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
    
    <Navigation />
    
  </header>
);

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(AppBar);
export default AppBar;