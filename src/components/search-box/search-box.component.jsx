import { Component } from 'react' ;

class SearchBox extends Component {

    render() {
        return (
            <input 
            className='search-box'
            type='search'
            placeholder='Search monsters'
            onChange={(event) => {
                const searchField = event.target.value.toLocaleLowerCase();
                this.setState(() => {
                    return { searchField };
                    
                })
            }}
            />
        )
    }
}

export default SearchBox;