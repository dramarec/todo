import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
    display: flex;
    align-items: center;
    span {
        margin-right: auto;
    }
    .btn {
        margin: 2px;
    }
    .fa {
        width: 10px;
    }
`;

const TodoListItem = ({ label, important = false }) => {
    const style = {
        color: important ? 'tomato' : 'black',
    };
    return (
        <StyledSpan style={style}>
            <span className="todo-list-item-label">{label}</span>

            <button type="button" className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation"></i>
            </button>

            <button type="button" className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o"></i>
            </button>
        </StyledSpan>
    );
};

export default TodoListItem;
