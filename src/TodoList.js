import React, { Component } from 'react';
import ListItem from './ListItem';

class TodoList extends Component {
  render() {
    const {value, onRemove, onUpdate} = this.props;
    const list = [];

    // id를 넘겨주는 방식이 이렇게밖에 없나???
    value.forEach((item) => {
      list.push(
        <ListItem key={item.id}
          value={item.text}
          itemId={item.id}
          onRemove={onRemove}
          onUpdate={onUpdate} />
      );
    });
    
    return (
      <ul>
        {list}
      </ul>
    );
  }
}

export default TodoList;
