import React, { Component } from 'react';
import ButtonArea from './ButtonArea';

class ListItem extends Component {
  render() {
    return (
      <li>
        {this.props.value}
        <ButtonArea itemId={this.props.itemId}
          onRemove={this.props.onRemove} />
      </li>
    );
  }
}

export default ListItem;
