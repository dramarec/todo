import React from 'react';
import styled from 'styled-components';
import TodoListItem from '../TodoListItem/TodoListItem';

const StyledUL = styled.ul`
    /* padding: 0.25rem 0.75rem; */
    padding: 20px 0px;
`;

const TodoList = ({ todos, onDelete, onTogleImportant, onTogleDone }) => {
    const elements = todos.map(item => {
        const { id, ...itemProps } = item;
        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    id={id}
                    // onHadleDelete={() => onDelete(id)}
                    onHadleDelete={onDelete}
                    onTogleImportant={() => onTogleImportant(id)}
                    onTogleDone={() => onTogleDone(id)}
                />
            </li>
        );
    });

    return (
        <div>
            <StyledUL className="list-group">{elements}</StyledUL>
        </div>
    );
};

export default TodoList;

// import React from 'react';
// import TodoListItem from './TodoListItem';

// const TodoList = ({ todos }) => {
//     return (
//         <ul className="list-group">
//             {todos.map(item => (
//                 <TodoListItem {...item} />
//             ))}
//             {/* {todos.map(({ label, important, key }) => (
//                 <TodoListItem key={key} label={label} important={important} />
//             ))} */}
//         </ul>
//     );
// };

// export default TodoList;
