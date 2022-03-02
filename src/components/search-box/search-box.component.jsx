import { Component } from 'react'

class SearchBox extends Component {

    render() {
        return (
            <input 
            className='search-box'
            type='search'
            placeholder='Search monsters'
            onChange={onSearchChange}
            />
        )
    }
}