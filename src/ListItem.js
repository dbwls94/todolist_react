import React, { Component } from 'react';
import ButtonArea from './ButtonArea';

class ListItem extends Component {
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    const {value, itemId, onRemove, onUpdate} = this.props;

    return (
      <li>
        {value}
        <ButtonArea itemId={itemId}
          onRemove={onRemove}
          onUpdate={onUpdate} />
      </li>
    );
  }
}

export default ListItem;
