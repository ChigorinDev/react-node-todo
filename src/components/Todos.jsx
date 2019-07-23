import React from 'react';
import Todo from './Todo';

const Todos = ({
  todoList,
  deleteTodo,
  markTodo,
  showActive,
  showCompleted
}) => {
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

  let listContainer;
  if (showActive) {
    listContainer = todoConainer.filter(todo => !todo.props.todo.checked);
  } else if (showCompleted) {
    listContainer = todoConainer.filter(todo => todo.props.todo.checked);
  } else {
    listContainer = todoConainer;
  }

  return <ul className="collection z-depth-2">{listContainer}</ul>;
};

export default Todos;
