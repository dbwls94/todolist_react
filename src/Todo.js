import React, { Component } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

class Todo extends Component {
  key = 0; // key를 이렇게 하는 방법밖에 없는걸까???

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
  
  render() {
    return (
      <div>
        <InputTodo onSubmit={this.handleSubmit} />
        <TodoList value={this.state.todos}
          onRemove={this.handleRemove} />
      </div>
    );
  }
}

export default Todo;
