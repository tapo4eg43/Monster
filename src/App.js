import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import {CardList} from './components/card-list/card-list';
import {SearchBox} from './components/search-box/search-box';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

    handleChange(e) {
        this.setState({searchField: e.target.value})
    }

    render() {
        const {monsters, searchField} = this.state;
        const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder='search'
                    handleChange={this.handleChange}
                />
                <CardList monsters={filterMonsters} />
            </div>
        )
    }
}
