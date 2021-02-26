import React, { Component } from 'react';

class ItemAddForm extends Component {
    state = {
        label: '',
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: '',
        });
    };
    onLabelChange = e => {
        this.setState({
            // label: e.target.value.toUpperCase(),
            label: e.target.value,
        });
    };
    render() {
        return (
            <form className="item-add-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.label}
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done"
                />
                <button type="submit" className="btn btn-outline-secondary">
                    Add Item
                </button>
            </form>
        );
    }
}

export default ItemAddForm;
