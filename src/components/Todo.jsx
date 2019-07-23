import React from 'react';

const Todo = ({ todo, deleteTodo, markTodo }) => (
  <li className="collection-item" key={todo.id} value={todo.checked}>
    <span className="todo-circle" onClick={() => markTodo(todo.id)}>
      {todo.checked ? <i className="material-icons">check</i> : <i />}
    </span>
    <span className="todo-line grey-text text-darken-1">
      {todo.content}
      <a
        href="#!"
        className="secondary-content"
        onClick={() => deleteTodo(todo.id)}
      >
        <i className="material-icons delete-icon">delete</i>
      </a>
    </span>
  </li>
);

export default Todo;
