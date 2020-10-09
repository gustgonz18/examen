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
        axios.get('https://api.pokemontcg.io/v1/cards?subtype=Basic')
            .then(res => {
                console.log(res)
                this.setState({ pokemons: res.data.cards })
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
                { pokemons.map(algo => {
                    return (
                        <Col span={8}>
                            < Card>
                                hoverable
                                    cover={<img alt="pokémon" src={algo.imageUrl} />}

                            </Card>
                        </Col>
                    )
                }  ) }

            </Row>

        )
    }
}









export default PokemonList 