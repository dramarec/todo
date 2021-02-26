import React, { Component } from 'react';

class SearchPanel extends Component {
    state = {
        term: '',
    };
    onSaerchChange = e => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };
    render() {
        const searchText = 'Type to search text';
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder={searchText}
                value={this.state.term}
                onChange={this.onSaerchChange}
            />
        );
    }
}

export default SearchPanel;
