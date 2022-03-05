import { Component } from 'react' ;

class SearchBox extends Component {

    render() {
        return (
            <input 
            className='search-box'
            type='search'
            placeholder='Search monsters'
            onChange={(event) => {
                console.log(event.target.value)
                const searchString = event.target.value.toLocaleLowerCase();
                const filteredMonsters = this.state.monsters.filter((monster) => {
                    return monster.name.toLocaleLowerCase().includes(searchString);
                });
            
            }
            />
        )
    }
}

export default SearchBox;