import React, { Component } from 'react';
import ListItem from './ListItem';

class TodoList extends Component {
  render() {
    const {value, onRemove, onUpdate} = this.props;
    
    return (
      <ul>
        {
          value.map(item =>  
          <ListItem key={item.id}
            value={item.text}
            itemId={item.id}
            onRemove={onRemove}
            onUpdate={onUpdate} />)
        }
      </ul>
    );
  }
}

export default TodoList;
