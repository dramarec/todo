import React, { Component } from 'react';

class ItemStatusfilter extends Component {
    buttons = [
        { label: 'All', name: 'all' },
        { label: 'Active', name: 'active' },
        { label: 'Done', name: 'done' },
    ];
    render() {
        const { filter, onFilterChange } = this.props;
        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button
                    key={name}
                    type="button"
                    className={`btn ${clazz}`}
                    onClick={() => onFilterChange(name)}
                >
                    {label}
                </button>
            );
        });

        return <div className="btn-group">{buttons}</div>;
    }
}

export default ItemStatusfilter;
