import React, { Component } from 'react';
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { MoviesList } from './components/MoviesList'
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {

  state = { usedSearch: false, results: [] }

  _handleResults = (results) => {
    this.setState({ results, usedSearch: true })
  }

  _renderResults () {
    return this.state.results.length === 0
      ? <p>No results found!</p>
      : <MoviesList movies={this.state.results} />
  }

  render() {
    return (
      <div className="App">
        <Title>Movie App</Title>
        <div className='SearchForm-wrapper'>
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch
          ? this._renderResults()
          : <small>Search a movie</small>
        }
      </div>
    );
  }
}

export default App;
