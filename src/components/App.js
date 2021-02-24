import React from 'react';
import AppHeader from './AppHeader';
import SearchPanel from './SearchPanel';
import TodoList from './TodoList';

const App = () => {
    const isLoggedId = true;
    const welcomeBox = <span>Welcome Back</span>;
    const loginBox = <span>Log in please</span>;
    const todoData = [
        { key: '1', label: 'Drink Coffe', important: true },
        { key: '2', label: 'Eat Meat', important: false },
        { key: '3', label: 'Learn React', important: false },
        { key: '4', label: 'Buld Awesome', important: false },
    ];

    return (
        <div>
            {isLoggedId ? welcomeBox : loginBox}
            {/* <span>{new Data().toString()}</span> */}
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
};

export default App;
