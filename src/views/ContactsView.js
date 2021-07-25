import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../components/Contact-form';
import Filter from '../components/Filter';
import ContactsList from '../components/Contacts';
// import Container from '../components/Container';
// import TodoList from '../components/TodoList';
// import TodoEditor from '../components/TodoEditor';
// import Filter from '../components/TodoFilter';
// import Stats from '../components/Stats';
// import Modal from '../components/Modal';
// import IconButton from '../components/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
// import { todosOperations, todosSelectors } from '../redux/todos';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

class ContactsView extends Component {
  state = {
    showModal: true,
  };

  // componentDidMount() {
  //   this.props.fetchTodos();
  // }

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  render() {
    // const { showModal } = this.state;

    return (
      <>
        {/* <div style={barStyles}> */}
          {/* <Filter />
          <Stats /> */}
          {/* <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
            <AddIcon width="40" height="40" fill="#fff" />
          </IconButton> */}

          {/* {this.props.isLoadingTodos && <h1>Загружаем...</h1>}
        </div> */}

        {/* <TodoList /> */}

        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Filter</h2>
        <Filter />

        <h2>Contacts</h2>
        <ContactsList />

        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSave={this.toggleModal} />
          </Modal>
        )} */}
      </>
    );
  }
}

// const mapStateToProps = state => ({
//   isLoadingTodos: todosSelectors.getLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchTodos: () => dispatch(todosOperations.fetchTodos()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
export default ContactsView;