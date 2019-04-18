import React, { Component } from 'react';

class ButtonArea extends Component {
    handleRemove = () => {
        const id = this.props.itemId;
        this.props.onRemove(id);
    }
    render() {
        return (
            <button type="button" onClick={this.handleRemove}>삭제</button>
        );
    }
}

export default ButtonArea;