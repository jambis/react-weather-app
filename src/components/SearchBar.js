import React, { Component } from 'react'

class SearchBar extends Component {
    state = {term: ''}

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input onChange={this.onInputChange} value={this.state.term} /> 
                </form>
            </div>
        );
    }
}

export default SearchBar;
