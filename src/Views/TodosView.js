import React, { Component } from 'react';

import Container from '../Components/Container';
import TodoList from '../Components/TodoList';
import TodoEditor from '../Components/TodoEditor';
import Filter from '../Components/TodoFilter';
import Stats from '../Components/Stats';
import Modal from '../Components/Modal';
import IconButton from '../Components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
// eslint-disable-next-line no-unused-vars
import todosApi from '../services/todos-api';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

class TodosView extends Component {
  state = {
    // todos: [],
    // filter: '',
    showModal: false,
  };

  // componentDidMount() {
  //   todosApi
  //     .fetchTodos()
  //     .then(todos => this.setState({ todos }))
  //     .catch(error => console.log(error));
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const nextTodos = this.state.todos;
  //   const prevTodos = prevState.todos;

  //   if (nextTodos !== prevTodos) {
  //     localStorage.setItem('todos', JSON.stringify(nextTodos));
  //   }
  // }

  // addTodo = text => {
  //   const todoData = {
  //     text,
  //     completed: false,
  //   };

  //   todosApi.addTodo(todoData).then(todo => {
  //     this.setState(({ todos }) => ({ todos: [...todos, todo] }));
  //     this.toggleModal();
  //   });
  // };

  // deleteTodo = todoId => {
  //   todosApi.deleteTodo(todoId).then(() => {
  //     this.setState(({ todos }) => ({
  //       todos: todos.filter(({ id }) => id !== todoId),
  //     }));
  //   });
  // };

  // toggleCompleted = todoId => {
  //   const todo = this.state.todos.find(({ id }) => id === todoId);
  //   const { completed } = todo;
  //   const update = { completed: !completed };

  //   todosApi.updateTodo(todoId, update).then(updatedTodo => {
  //     this.setState(({ todos }) => ({
  //       todos: todos.map(todo =>
  //         todo.id === updatedTodo.id ? updatedTodo : todo,
  //       ),
  //     }));
  //   });
  // };

  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getVisibleTodos = () => {
  //   const { filter, todos } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return todos.filter(({ text }) =>
  //     text.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // calculateCompletedTodos = () => {
  //   const { todos } = this.state;

  //   return todos.reduce(
  //     (total, todo) => (todo.completed ? total + 1 : total),
  //     0,
  //   );
  // };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    // const totalTodoCount = todos.length;
    // const completedTodoCount = this.calculateCompletedTodos();
    // const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <div style={barStyles}>
          <Filter />
          <Stats />
          <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
            <AddIcon width="40" height="40" fill="#fff" />
          </IconButton>
        </div>

        <TodoList />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSave={this.toggleModal}/>
          </Modal>
        )}
      </Container>
    );
  }
}

export default TodosView;
