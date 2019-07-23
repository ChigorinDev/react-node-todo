import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    content: ''
  };

  handleChange = e => {
    const content = e.target.value;
    console.log(content);
    this.setState({
      content: e.target.value.trim()
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.content);

    if (this.state.content.length) {
      this.props.addTodo(this.state);
    }

    this.setState({
      content: ''
    });

    // e.target.reset();
  };

  render() {
    return (
      <div>
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <label>Add Amazing todo:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
