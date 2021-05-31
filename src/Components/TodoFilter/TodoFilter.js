import React from 'react';
import { connect } from 'react-redux';

import todosActions from '../../redux/todos/todos-actions';
import './TodoFilter.scss';

const TodoFilter = ({ value, onChange }) => (
  <div className="TodoFilter">
    <p className="TodoFilter__label">Фильтр по содержимому</p>
    <input
      type="text"
      className="TodoFilter__input"
      value={value}
      onChange={onChange}
    />
  </div>
);

// const mapStateToProps = (state) => {
//   const { filter, items } = state.todos;

//   const visibleTodos = getVisibleTodos( items, filter )
//   return {
//     todos: visibleTodos,
//   }
// }
const getVisibleTodos = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allTodos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter),
  );
};

// const mapStateToProps = state => ({
const mapStateToProps = ({ todos: {items, filter}}) => ({
  todos: getVisibleTodos(items, filter)
  // todos: getVisibleTodos(state.todos.items, state.todos.filter)
 });

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(todosActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
