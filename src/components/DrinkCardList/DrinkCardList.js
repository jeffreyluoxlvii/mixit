import React from 'react';
import { DrinkCard } from '../../components/';
import { Container, Grid } from '@material-ui/core';
import { fade, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

const DrinkCardList = ({ drinks }) => {
    return (
        <div> {
            drinks.map((drink, i) => {
                return (
                    <DrinkCard
                        key={i}
                        name={drinks[i].strDrink}
                        image={drinks[i].strDrinkThumb}
                    />
                );
            })
        }
        </div>
    )
}
export default DrinkCardList;