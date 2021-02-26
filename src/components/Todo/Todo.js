import React, { Component } from 'react';
import shortid from 'shortid';
import AppHeader from './AppHeader';
import ItemAddForm from './ItemAddForm/ItemAddForm';
import ItemStatusfilter from './ItemStatusfilter/ItemStatusfilter';
import SearchPanel from './SearchPanel';
import TodoList from './TodoList';

class Todo extends Component {
    // const isLoggedId = true;
    // const welcomeBox = <span>Welcome Back</span>;
    // const loginBox = <span>Log in please</span>;
    state = {
        data: [
            this.createTodoItem('Drink Coffe'),
            this.createTodoItem('Learn JavaScript'),
            this.createTodoItem('Learn React'),
            this.createTodoItem('Buld Awesome'),
        ],
        term: '',
        filter: 'all', // active, all, done
    };

    createTodoItem(label) {
        return {
            id: shortid.generate(),
            label,
            important: false,
            done: false,
        };
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex(el => el.id === id);
        //1.update object
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };
        //2. construct(строить) new array
        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    }

    onTogleDone = id => {
        this.setState(({ data }) => ({
            data: this.toggleProperty(data, id, 'done'),
        }));
    };

    onTogleImportant = id => {
        this.setState(({ data }) => ({
            data: this.toggleProperty(data, id, 'important'),
        }));
    };

    //// ! ====deleted items==== ////
    onDeleteItem = e => {
        console.log('e :', e);
        const id = e.target.id;
        this.setState({ data: [...this.state.data.filter(el => el.id !== id)] });
    };

    //// ! ====add new items==== ////
    onItemAdded = text => {
        console.log('text :', text);
        const newItem = this.createTodoItem(text);

        this.setState(({ data }) => ({
            data: [...data, newItem],
        }));
    };

    onSearchChange = term => {
        this.setState({ term });
    };
    onFilterChange = filter => {
        this.setState({ filter });
    };

    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter(item => !item.done);
            case 'done':
                return items.filter(item => item.done);
            default:
                return items;
        }
    }

    render() {
        const { data, term, filter } = this.state;
        const visibleItems = this.filter(this.search(data, term), filter);
        const doneCount = data.filter(el => el.done).length;
        const todoCount = data.length - doneCount;
        return (
            <div>
                {/* {isLoggedId ? welcomeBox : loginBox} */}
                {/* <span>{new Data().toString()}</span> */}
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="search-panel d-flex justify-content-between">
                    <SearchPanel onSearchChange={this.onSearchChange} />
                    <ItemStatusfilter filter={filter} onFilterChange={this.onFilterChange} />
                </div>
                <TodoList
                    todos={visibleItems}
                    onDelete={this.onDeleteItem}
                    onTogleImportant={this.onTogleImportant}
                    onTogleDone={this.onTogleDone}
                />
                <ItemAddForm onItemAdded={this.onItemAdded} />
            </div>
        );
    }
}

export default Todo;

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

// onDeleteItem = id => {
//     this.setState({ data: [...this.state.data.filter(item => item.id !== id)] });
// };

//// ! ====add new items==== ////
// onItemAdded = text => {
//     console.log('text :', text);
//     const newItem = {
//         id: shortid.generate(),
//         label,
//         important: false,
//         done: false
//     }

// this.setState(({ data }) => {
//     const newArray = [...data, newItem];
//     return {
//         data: newArray,
//     };
// });
// this.setState(({ data }) => {
//     return {
//         data: [...data, newItem],
//     };
// });
//     this.setState(({ data }) => ({
//         data: [...data, newItem],
//     }));
// };
