import React, { Component } from "react";
import Todo from "./Todo";

const Todos = ({
  todoList,
  deleteTodo,
  markTodo,
  showActive,
  showCompleted
}) => {
  // console.log(todoList);
  // console.log(showActive);
  const todoConainer = todoList.length ? (
    todoList.map(todo => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          markTodo={markTodo}
        />
      );
    })
  ) : (
    <p className="center grey-text text-darken-1">Wanna add something new?</p>
  );
  const todoActiveContainer = todoList
    .filter(todo => !todo.checked)
    .map(todo => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          markTodo={markTodo}
        />
      );
    });

  const todoCompletedContainer = todoList
    .filter(todo => todo.checked)
    .map(todo => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          markTodo={markTodo}
        />
      );
    });

  let listContainer;
  if (showActive) {
    listContainer = todoActiveContainer;
  } else if (showCompleted) {
    listContainer = todoCompletedContainer;
  } else {
    listContainer = todoConainer;
  }

  return <ul className="collection z-depth-2">{listContainer}</ul>;
};

export default Todos;
