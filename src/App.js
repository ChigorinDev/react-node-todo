import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddForm";
import Footer from "./components/TodoFooter";

class App extends Component {
  state = {
    todoList: [
      {
        id: 1,
        content: "Set up basic structure of Reactjs ToDo",
        checked: true
      },
      { id: 2, content: "Add some HTML and styles", checked: true },
      {
        id: 3,
        content: "add states and give it some fake todos",
        checked: true
      },
      { id: 4, content: "build logic to add/delete/mark todos", checked: false }
    ],
    showActive: false,
    showCompleted: false
  };

  deleteTodo = id => {
    console.log("deleted");
    console.log(id);
    const todoList = this.state.todoList.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todoList
    });
  };

  addTodo = todo => {
    todo.id = Math.random();
    todo.checked = false;
    const todoList = [...this.state.todoList, todo];
    this.setState({
      todoList
    });
  };

  markTodo = id => {
    console.log(id);
    const todoList = [...this.state.todoList];
    todoList.map(todo => {
      if (todo.id === id) todo.checked = !todo.checked;
    });
    this.setState({
      todoList
    });
  };

  showActive = () => {
    this.setState({
      showActive: true,
      showCompleted: false
    });
    console.log("show active");
  };

  showCompleted = () => {
    this.setState({
      showCompleted: true,
      showActive: false
    });
    console.log("show completed");
  };

  showAll = () => {
    this.setState({
      showActive: false,
      showCompleted: false
    });
    console.log("show all");
  };

  clearCompleted = () => {
    const todoList = [...this.state.todoList].filter(
      todo => todo.checked !== true
    );
    this.setState({
      todoList
    });
    console.log("clear completed");
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center grey-text text-lighten-1">Amazing Todo List</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todoList={this.state.todoList}
          deleteTodo={this.deleteTodo}
          markTodo={this.markTodo}
          showActive={this.state.showActive}
          showCompleted={this.state.showCompleted}
        />
        {this.state.todoList.length ? (
          <Footer
            todoList={this.state.todoList}
            showActive={this.showActive}
            showAll={this.showAll}
            showCompleted={this.showCompleted}
            clearCompleted={this.clearCompleted}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
