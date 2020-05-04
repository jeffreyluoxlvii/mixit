import React from 'react';

import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

import shakerImage from '../../images/shakeranddrink.png'

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '90vh',
    },

}));

const Landing = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.wrapper}>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item sm={6}>
                    
                </Grid>
                <Grid item>
                    <Typography variant="h1">
                        mixit
                    </Typography>
                    <Typography variant="h4" className={classes.colored}>
                        your own personal bartender.
                    </Typography>
                    <Button>
                        Click
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Landing;