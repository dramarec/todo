import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.div`
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

    .todo-list-item {
        font-size: 1.25rem;
    }

    .todo-list-item button {
        width: 35px;
        margin: 3px;
    }

    .todo-list-item-label {
        margin-left: 1.25rem;
        line-height: 35px;
        cursor: pointer;
        user-select: none;
    }

    .todo-list-item.done .todo-list-item-label {
        text-decoration: line-through;
    }

    .todo-list-item.important .todo-list-item-label {
        font-weight: bold;
        color: steelblue;
    }
`;

const TodoListItem = ({
    id,
    label,
    onHadleDelete,
    onTogleImportant,
    onTogleDone,
    important,
    done,
}) => {
    let classNames = 'todo-list-item';
    if (done) {
        classNames += ' done';
    }

    if (important) {
        classNames += ' important';
    }

    return (
        <StyledSpan>
            <span className={classNames}>
                <span className="todo-list-item-label" onClick={onTogleDone}>
                    {label}
                </span>
            </span>
            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onTogleImportant}
            >
                <i className="fa fa-exclamation"></i>
            </button>

            <button
                id={id}
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onHadleDelete}
            >
                <i className="fa fa-trash-o"></i>
            </button>
        </StyledSpan>
    );
};

export default TodoListItem;
// import React, { Component } from 'react';
// import styled from 'styled-components';

// const StyledSpan = styled.div`
//     display: flex;
//     align-items: center;
//     span {
//         margin-right: auto;
//     }
//     .btn {
//         margin: 2px;
//     }
//     .fa {
//         width: 10px;
//     }

//     .todo-list-item {
//         font-size: 1.25rem;
//     }

//     .todo-list-item button {
//         width: 35px;
//         margin: 3px;
//     }

//     .todo-list-item-label {
//         margin-left: 1.25rem;
//         line-height: 35px;
//         cursor: pointer;
//         user-select: none;
//     }

//     .todo-list-item.done .todo-list-item-label {
//         text-decoration: line-through;
//     }

//     .todo-list-item.important .todo-list-item-label {
//         font-weight: bold;
//         color: steelblue;
//     }
// `;

// class TodoListItem extends Component {
//     state = {
//         done: false,
//         important: false,
//     };
//     onHanldeClick = () => {
//         console.log(`Done: ${this.props.label}`);
//         this.setState(state => ({
//             done: !state.done,
//         }));
//     };
//     onClickImportant = () => {
//         console.log(`Done: ${this.props.label}`);
//         this.setState(state => ({
//             important: !state.important,
//         }));
//     };
//     render() {
//         const { label, onHadleDelete } = this.props;
//         const { done, important } = this.state;

//         let classNames = 'todo-list-item';
//         if (done) {
//             classNames += '  done';
//         }

//         if (important) {
//             classNames += ' important';
//         }

//         return (
//             <StyledSpan>
//                 <span className={classNames}>
//                     <span className="todo-list-item-label" onClick={this.onHanldeClick}>
//                         {label}
//                     </span>
//                 </span>
//                 <button
//                     type="button"
//                     className="btn btn-outline-success btn-sm float-right"
//                     onClick={this.onClickImportant}
//                 >
//                     <i className="fa fa-exclamation"></i>
//                 </button>

//                 <button
//                     type="button"
//                     className="btn btn-outline-danger btn-sm float-right"
//                     onClick={onHadleDelete}
//                 >
//                     <i className="fa fa-trash-o"></i>
//                 </button>
//             </StyledSpan>
//         );
//     }
// }

// export default TodoListItem;
