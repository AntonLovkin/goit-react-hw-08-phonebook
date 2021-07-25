import { Switch, Route } from 'react-router-dom';
import AppBar from './UserMenu/AppBar';
import ContactsView from './views/ContactsView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import { Component } from 'react';
import { render } from '@testing-library/react';
import authOperations from './redux/auth/auth-operations';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.onGetCurrentUser();
}

  render() {
    return (
      <>
        <AppBar />
        <Switch>
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>
      </>
    );
  }
}
  
const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser
}

export default connect(null, mapDispatchToProps)(App);