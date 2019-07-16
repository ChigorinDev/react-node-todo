import React, { Component } from "react";

const Footer = ({ todoList, showActive, showAll }) => {
  console.log(todoList);
  return (
    <div className="todos-footer">
      <div className="todos-count grey-text">
        <span>{todoList.length}</span>
        <span>{todoList.length > 1 ? "items left" : "item left"}</span>
      </div>
      <div className="todo-filters grey-text text-darken-2">
        <span onClick={() => showAll()} className="filter-btn">
          All
        </span>
        <span onClick={() => showActive()} className="filter-btn">
          Active
        </span>
        <span className="filter-btn">Completed</span>
      </div>
      <div className="todos-clear grey-text text-darken-2">
        <span className="filter-btn">Clear Completed</span>
      </div>
    </div>
  );
};

export default Footer;
