import React from 'react';
import { DrinkCard } from '../../components/'
import { Container } from '@material-ui/core'

const DrinkCardList = ({ drinks }) => {
    const cardArray = drinks.map((drink, i) => {
        return (
            <DrinkCard
                key={i}
                name={drinks[i].strDrink}
                image={drinks[i].strDrinkThumb}
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