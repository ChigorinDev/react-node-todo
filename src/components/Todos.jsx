import React, { Component } from "react";

const Todos = ({ todoList, deleteTodo, markTodo }) => {
  const todoConainer = todoList.length ? (
    todoList.map(todo => {
      return (
        <li className="collection-item" key={todo.id}>
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
    })
  ) : (
    <p className="center">Wanna add something new?</p>
  );

  return <ul className="collection z-depth-2">{todoConainer}</ul>;
};

export default Todos;
