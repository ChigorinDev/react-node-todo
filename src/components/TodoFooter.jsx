import React from 'react';

const Footer = ({
  todoList,
  showActive,
  showAll,
  showCompleted,
  clearCompleted
}) => {
  return (
    <div className="todos-footer">
      <div className="todos-count grey-text">
        <span>{todoList.length}</span>
        <span>{todoList.length > 1 ? 'items left' : 'item left'}</span>
      </div>
      <div className="todo-filters grey-text text-darken-2">
        <span onClick={() => showAll()} className="filter-btn">
          All
        </span>
        <span onClick={() => showActive()} className="filter-btn">
          Active
        </span>
        <span onClick={() => showCompleted()} className="filter-btn">
          Completed
        </span>
      </div>
      <div className="todos-clear grey-text text-darken-2">
        <span onClick={() => clearCompleted()} className="filter-btn">
          Clear Completed
        </span>
      </div>
    </div>
  );
};

export default Footer;
