import React, { Component } from 'react';

class ButtonArea extends Component {
    constructor(props) {
        super(props); 
        this.state = { isEdit : false, updateTodo : '' };
    }
    handleChange = (e) => {
        this.setState({
            updateTodo : e.target.value
        });
    }
    handleUpdate = (e) => {
        this.setState({
            isEdit : true
        });
        if(this.state.updateTodo === '') {
            // 입력된게 없을때 뭔가 다른 처리???
            e.preventDefault();
        }
        else {
            const id = this.props.itemId;
            this.props.onUpdate(id, this.element.value);
        }
    }
    handleRemove = () => {
        const id = this.props.itemId;
        if(window.confirm('정말로 삭제하시겠습니까?'))
            this.props.onRemove(id);
    }
    render() {
        const isEdit = this.state.isEdit;
        return (
            <div>
                {isEdit && (
                    <input type="text" 
                        placeholder="update todo..."
                        ref={(el)=>{this.element = el}}
                        value={this.state.updateTodo}
                        onChange={this.handleChange} />
                )}
                <button type="button" onClick={this.handleUpdate}>수정</button>
                <button type="button" onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default ButtonArea;