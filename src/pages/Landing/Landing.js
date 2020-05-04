import React from 'react';

import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import shakerImage from '../../images/shakeranddrink.png'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    container: {
        display: 'flex',
    },
    link: {
        textDecoration: 'none',
    }
}));

const Landing = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.container}>
            <img src={shakerImage} alt="shaker"/>
            <div>
                <Typography variant="h1" component="h2" gutterBottom>
                    Drink Match
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Your personal online bartender.
                </Typography>
                <Link to="/main" className={classes.link}>
                    <Button variant="contained" color="primary">
                        Make me a drink
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Landing;