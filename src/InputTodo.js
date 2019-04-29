import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { todo : '' };
    this.element = null
  }
  static getDerivedStateFromProps(props, state) {
    console.log('InputTodo getDerivedStateFromProps, props : ', props, ' state : ', state);
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('InputTodo shouldComponentUpdate, nextProps : ', nextProps, ' nextState : ', nextState, ' this.state : ', this.state);
    return true;
  }
  bindRef = (el) => {this.element = el}

  handleChange = (e) => {
    this.setState({
      todo : e.target.value
    });
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.handleSubmit(e)
    }
  }

  handleSubmit = (e) => {
    this.props.onSubmit(this.state.todo);
    this.setState({
      todo : ''
    });
    this.element.focus();
  }
  render() {
    return (
      <>
      <input type="text" 
        placeholder="input todo..." 
        value={this.state.todo}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
        ref={this.bindRef} />
      <button type="button" onClick={this.handleSubmit}>등록</button>
      </>
    )
  }
}

export default InputTodo;
