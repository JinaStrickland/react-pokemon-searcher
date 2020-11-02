import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    side: true
  }

  changeImageSide = () => {
    this.setState({
      side: !this.state.side
    })
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.changeImageSide} >

            { this.state.side ?
              <img src={ `${this.props.pokemon.sprites.front}` } alt="oh no!" /> :
              <img src={ `${this.props.pokemon.sprites.back}` } alt="oh no!" /> }

          </div>
          <div className="content">
            <div className="header"> { this.props.pokemon.name } </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              { this.props.pokemon.hp }
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard


// "sprites": {
//   "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
//   "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"