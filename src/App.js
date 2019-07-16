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
        checked: false
      },
      { id: 4, content: "build logic to add/delete/mark todos", checked: false }
    ]
  };

  deleteTodo = id => {
    console.log("deleted");
    console.log(id);
    let todoList = this.state.todoList.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todoList
    });
  };

  addTodo = todo => {
    todo.id = Math.random();
    let todoList = [...this.state.todoList, todo];
    this.setState({
      todoList
    });
  };

  markTodo = id => {
    console.log(id);

    let todoList = [...this.state.todoList];
    todoList.map(todo => (todo.id === id ? (todo.checked = true) : null));

    this.setState({
      todoList
    });
  };

  showActive = () => {
    let todoList = this.state.todoList.filter(todo => todo.checked !== true);
    console.log("show active");
    this.setState({
      todoList
    });
  };

  showAll = () => {
    let todoList = [...this.state.todoList];
    console.log("show all");
    this.setState({
      todoList
    });
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
        />
        {this.state.todoList.length ? (
          <Footer
            todoList={this.state.todoList}
            showActive={this.showActive}
            showAll={this.showAll}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
