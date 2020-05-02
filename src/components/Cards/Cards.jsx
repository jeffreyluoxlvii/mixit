import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({data : { drinks }}) => {
    if(!drinks) {
        return 'Loading...';
    }
    console.log(drinks)
    return (
        <div className = {styles.container}>
            <Grid container space={3} justify="center">
                {/*
                    xs = 12 for mobile devices
                    md = 3 for medium devices
                */}
                <Grid item component={Card} xs = {12} md = {3} className = {cx(styles.card, styles.cockTail)}>
                    <CardContent>
                        <Typography color = "cocktailnme" gutterBottom>cocktailName</Typography>
                        <Typography variant="h5">{drinks[0].strDrink}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;