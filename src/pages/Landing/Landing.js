import React from 'react';

import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';

import shakerImage from '../../images/shakeranddrink.png'

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '90vh',
    },
    button: {
        padding: '10px',
        margin: '20px',
        border: '5px solid',
        borderRadius: '30px',
    },
    centered: {
        textAlign: 'center',
    },
    image: {
        height: 'auto',
        width: '100%',
        maxWidth: '512px',
    },
    link: {
        textDecoration: 'none',
        color: '#000',
    }
}));

const Landing = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.wrapper}>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item md={6}>
                    <img alt="shaker" src={shakerImage} className={classes.image}/>
                </Grid>
                <Grid item className={classes.centered}>
                    <Typography variant="h1">
                        mixit
                    </Typography>
                    <Typography variant="h4">
                        your personal online bartender.
                    </Typography>
                    <div>
                        <Link to="/main" className={classes.link} >
                            <ButtonBase focusRipple className={classes.button}>
                                <Typography>create your mix now</Typography>
                            </ButtonBase>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Landing;