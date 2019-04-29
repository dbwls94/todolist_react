import React, { Component } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

class Todo extends Component {
  key = 0; 

  constructor(props) {
    console.log('constructor');
    super(props);
    //this.state = { todos : [], count: 0 };
    this.state = { todos : [] };
  }
  handleSubmit = (todo) => {
    const resultTodo = [{id:this.key++ + todo, text:todo}, ...this.state.todos];
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
    //console.log(id, updateTodo)
    const foundId = this.state.todos.findIndex(i => i.id === id);
    // this.state.todos[foundId].text = updateTodo;
    
    const todos = [...this.state.todos]
    todos[foundId].text = updateTodo
    this.setState({
      todos
    });
  }
  static getDerivedStateFromProps(props, state) {
    console.log('Todo getDerivedStateFromProps, props : ', props, ' state : ', state);
    return null;
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Todo shouldComponentUpdate, nextProps : ', nextProps, ' nextState : ', nextState);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate, prevProps : ', prevProps, ' prevState : ', prevState);
    return null; 
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  // h = () => {
  //   this.setState((state, props) => ({
  //     count: state.count + 10
  //   }))
  //   this.setState((state) => ({
  //     count: state.count + 5
  //   }))
  // }
  
  render() {
    console.log('render');
    return (
      <div>
        {/* {this.state.count}
        <button onClick={this.h}>asdf</button> */}
        <InputTodo onSubmit={this.handleSubmit} />
        <TodoList value={this.state.todos}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate} />
      </div>
    );
  }
}

export default Todo;
