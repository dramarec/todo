import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = () => {
    // const items = ['Learn React', 'Buld Awesome', 'Drink Coffee'];
    return (
        <ul>
            <li>
                <TodoListItem label="Learn React" />
            </li>
            <li>
                <TodoListItem label="Buld Awesome" />
            </li>
            <li>
                <TodoListItem label="Drink Coffee" important />
            </li>
        </ul>
    );
};

export default TodoList;
