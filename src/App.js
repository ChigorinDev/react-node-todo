import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddForm';
import Navigation from './components/Navigation';
import Footer from './components/TodoFooter';
import Axios from 'axios';

require('dotenv').config();

class App extends Component {
  state = {
    todoList: [],
    showActive: false,
    showCompleted: false
  };

  async componentDidMount() {
    const { data } = await Axios.get(`${process.env.REACT_APP_API}/todos`);
    this.setState({
      todoList: data
    });
  }

  deleteTodo = async id => {
    console.log('deleted');
    const todo_ids = [...this.state.todoList]
      .filter(todo => todo.id === id)
      .map(todo => 'id=' + todo.id)
      .join('&');
    // await Axios.delete(`http://localhost:4040/todo/${id}`);
    await Axios.delete(`http://localhost:4040/todo?${todo_ids}`);
    const todoList = this.state.todoList.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todoList
    });
  };

  clearCompleted = async () => {
    const todo_ids = [...this.state.todoList]
      .filter(todo => todo.checked === true)
      .map(todo => 'id=' + todo.id)
      .join('&');

    await Axios.delete(`http://localhost:4040/todo?${todo_ids}`);

    const todoList = [...this.state.todoList].filter(
      todo => todo.checked !== true
    );

    this.setState({
      todoList
    });
    console.log('clear completed');
  };

  addTodo = async todo => {
    todo.checked = false;
    const { data } = await Axios.post('http://localhost:4040/todo/add', todo);
    console.log('response from API POST:' + data);
    this.setState({
      todoList: data
    });
  };

  markTodo = async id => {
    console.log(id);
    const todoList = [...this.state.todoList];
    const todo = todoList.filter(todo => todo.id === id);

    await Axios.put(`http://localhost:4040/todo/${id}`, todo);

    todoList.map(todo => {
      if (todo.id === id) {
        return (todo.checked = !todo.checked);
      }
      return todo;
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
    console.log('show active');
  };

  showCompleted = () => {
    this.setState({
      showCompleted: true,
      showActive: false
    });
    console.log('show completed');
  };

  showAll = () => {
    this.setState({
      showActive: false,
      showCompleted: false
    });
    console.log('show all');
  };

  render() {
    return (
      <div className="container-fluid">
        <Navigation />
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
      </div>
    );
  }
}

export default App;
