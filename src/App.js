import { Switch, Route } from 'react-router-dom';
// import Filter from "./components/Filter";
// import ContactsList from "./components/Contacts/Contacts-list";
// import ContactForm from "./components/Contact-form/Contact-form";
// import UserMenu from "./UserMenu/UserMenu";
import AppBar from './UserMenu/AppBar';
import ContactsView from './views/ContactsView';
// import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';

const App = () => (
  <>
     <AppBar />
        <Switch>
          {/* <Route exact path="/" component={HomeView} /> */}
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>
    
    {/* <h1>User menu</h1>
    <UserMenu />
    
    <h1>Phonebook</h1>
    <ContactForm />

    <h2>Contacts</h2>
    <Filter />

    <ContactsList /> */}
 </>
);

export default App;