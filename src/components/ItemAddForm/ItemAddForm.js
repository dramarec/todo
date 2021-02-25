import React, { Component } from 'react';

class ItemAddForm extends Component {
    render() {
        return (
            <div>
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={this.props.onItemAdded}
                >
                    Add Item
                </button>
            </div>
        );
    }
}

export default ItemAddForm;
