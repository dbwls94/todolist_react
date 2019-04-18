import React, { Component } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

class Todo extends Component {
  key = 0; // 유니크한 id???

  constructor(props) {
    super(props);
    this.state = { todos : [] };
  }
  handleSubmit = (todo) => {
    const resultTodo = this.state.todos.concat({id:this.key++ + todo, text:todo});
    this.setState({
      todos : resultTodo
    });
  }
  handleRemove = (id) => {
    const resultTodo = this.state.todos.filter(i => i.id !== id);
    this.setState({
      todos : resultTodo
    });
  }
  handleUpdate = (id, updateTodo) => {
    const foundId = this.state.todos.findIndex(i => i.id === id);
    this.state.todos[foundId].text = updateTodo;
    this.setState({
      // 로 변경
    });
  }
  
  render() {
    return (
      <div>
        <InputTodo onSubmit={this.handleSubmit} />
        <TodoList value={this.state.todos}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate} />
      </div>
    );
  }
}

export default Todo;
