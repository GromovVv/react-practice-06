import { connect } from 'react-redux';
import todosOperations from '../../redux/todos/todos-operations';
import TodoList from './TodoList';

import { todosSelectors } from '../../redux/todos';


const mapStateToProps = (state) => ({
  todos: todosSelectors.getVisibleTodos(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todosOperations.deleteTodo(id)),
  onToggleCompleted: id => dispatch(todosOperations.toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
