import React, { Component } from 'react'
import axios from 'axios'
import { Card, Col, Row } from 'antd';

const { Meta } = Card;
export class PokemonList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pokemons: []
        }
    }

    componentDidMount() {
        axios.get('https://api.pokemontcg.io/v1/cards?subtype=stage%202')
            .then(res => {
                console.log(res)
                this.setState({ pokemons: res.data })
            })
            .catch(err => {
                console.log(err)
                this.setState({ errorMsg: 'Error retreiving data' })
            })
    }

    render() {
        const { pokemons, errorMsg } = this.state
        return (
            <Row gutter={16, 16}>
                { pokemons.length ?
                pokemons.map(pokemon => {
                    return (
                        <Col span={8}>
                            < Card
                                hoverable
                                cover={<img alt="pokémon" src={pokemon.imageUrl} />} >
                                <Meta title={pokemon.name} description={pokemon.state} /> : 
                                

                            </Card>
                        </Col>
                    )
                }) : null }
            </Row>
        )
    }

    /*
                  Lista de Pokémons  
                  {
                      pokemons.length ?
                  pokemons.map( pokemon => <div key = {pokemon.id}> {pokemon.name} {pokemon.imageUrl}</div> ) : 
                      null
                  }
                  {
                      errorMsg ? <div>{errorMsg} </div> : null 
                  }
          
        )
    }
}








render () {
    const { pokemons, errorMsg } = this.state
    return ( 
        <div>
            
              Lista de Pokémons  
              {
                  pokemons.length ?
              pokemons.map( pokemon => <div key = {pokemon.id}> {pokemon.name} {pokemon.imageUrl}</div> ) : 
                  null
              }
              {
                  errorMsg ? <div>{errorMsg} </div> : null 
              }
        </div>
    )
}
}  */}


export default PokemonList 