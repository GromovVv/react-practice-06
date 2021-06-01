import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '../Components/Container';
import TodoList from '../Components/TodoList';
import TodoEditor from '../Components/TodoEditor';
import Filter from '../Components/TodoFilter';
import Stats from '../Components/Stats';
import Modal from '../Components/Modal';
import IconButton from '../Components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
import todosOperations from '../redux/todos/todos-operations';
// eslint-disable-next-line no-unused-vars

// import todosApi from '../services/todos-api';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

class TodosView extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    this.props.fetchTodos();

  }


  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <Container>
        <div style={barStyles}>
          <Filter />
          <Stats />
          <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
            <AddIcon width="40" height="40" fill="#fff" />
          </IconButton>
          {this.props.isLoadingTodos && <h1>Loading...</h1>}
        </div>

        <TodoList />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSave={this.toggleModal} />
          </Modal>
        )}
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoadingTodos: state.todos.loading,
})


const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(todosOperations.fetchTodo())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosView);
