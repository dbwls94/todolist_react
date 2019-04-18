import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { todo : '' };
  }
  handleChange = (e) => {
    this.setState({
      todo : e.target.value
    });
  }
  handleSubmit = (e) => {
    this.props.onSubmit(this.element.value);
    e.preventDefault();
    //this.element.value = ''; //-> 이렇게는 안되나???
    this.setState({
      todo : ''
    });
    this.element.focus();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input type="text" 
            placeholder="input todo..." 
            value={this.state.todo} 
            onChange={this.handleChange}
            ref={(el) => {this.element = el}} />
          <input type="submit" value="등록"/>
        </form>
    );
  }
}

export default InputTodo;
