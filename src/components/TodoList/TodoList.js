import React from 'react';
import styled from 'styled-components';
import TodoListItem from '../TodoListItem/TodoListItem';

const StyledUL = styled.ul`
    padding: 0.25rem 0.75rem;
    /* padding: 20px 40px; */
`;

const TodoList = ({ todos }) => {
    const elements = todos.map(item => {
        const { id, ...itemProps } = item;
        return (
            <li key={item.key} className="list-group-item">
                <TodoListItem {...itemProps} />
            </li>
        );
    });

    return <StyledUL className="list-group">{elements}</StyledUL>;
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
