import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    filteredPokemons: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemons => this.setState({
      pokemons: pokemons
    }))
  }

  searchEvent = (e) => {
    let newPokemons = [...this.state.pokemons].filter(pokemon => pokemon.name.includes(e)) 
      this.setState({
        pokemons: newPokemons
      })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search searchEvent={ this.searchEvent } />
        <br />
        <PokemonCollection pokemons={ this.state.pokemons } />
      </Container>
    )
  }
}

export default PokemonPage
