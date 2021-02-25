import React, { Component } from 'react';
import shortid from 'shortid';
import AppHeader from './AppHeader';
import ItemAddForm from './ItemAddForm/ItemAddForm';
import ItemStatusfilter from './ItemStatusfilter/ItemStatusfilter';
import SearchPanel from './SearchPanel';
import TodoList from './TodoList';

class App extends Component {
    // const isLoggedId = true;
    // const welcomeBox = <span>Welcome Back</span>;
    // const loginBox = <span>Log in please</span>;
    state = {
        data: [
            { id: '1', label: 'Drink Coffe', important: true },
            { id: '2', label: 'Eat Meat', important: true },
            { id: '3', label: 'Learn React', important: false },
            { id: '4', label: 'Buld Awesome', important: false },
        ],
    };
    //// ! ====deleted items==== ////
    // deleteItem = id => {
    //     this.setState(({ data }) => {
    //         const idx = data.findIndex(el => el.id === id);
    //         console.log('idx :', idx);
    //         const newArray = [...data.slice(0, idx), ...data.slice(idx + 1)];
    //         return {
    //             data: newArray,
    //         };
    //     });
    // };

    deleteItem = id => {
        this.setState({ data: [...this.state.data.filter(item => item.id !== id)] });
    };
    onItemAdded = text => {
        const newData = {
            id: shortid.generate(),
            label: '',
            important: false,
        };
        this.setState(({ data }) => {
            const newArray = [...data, newData];
            return {
                data: newArray,
            };
        });
    };

    render() {
        return (
            <div>
                {/* {isLoggedId ? welcomeBox : loginBox} */}
                {/* <span>{new Data().toString()}</span> */}
                <AppHeader />
                <div className="search-panel d-flex justify-content-between">
                    <SearchPanel />
                    <ItemStatusfilter />
                </div>
                <TodoList todos={this.state.data} onDelete={this.deleteItem} />
                <ItemAddForm onItemAdded={this.onItemAdded} />
            </div>
        );
    }
}

export default App;
