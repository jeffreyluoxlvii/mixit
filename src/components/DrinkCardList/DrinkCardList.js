import React from 'react';
import DrinkCard from '../../components'
import { Container } from '@material-ui/core'

const DrinkCardList = ({ drinks }) => {
    const cardArray = drinks.map((drink, i) => {
        return (
            <DrinkCard
                key={i}
                name={drinks[i].name}
                image={drinks[i].image}
            />
        );
    })

    return (
        <Container>
            {cardArray}
        </Container>
    )
}
export default DrinkCardList;