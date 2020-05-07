import React from 'react';

import { Header, Autocompleter } from '../../components';
import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '90vh',
    },
    padding: {
        padding: '30px',
    },
    button: {
        padding: '10px',
        margin: '20px',
        border: '5px solid',
        borderRadius: '30px',
    },
    link: {
        textDecoration: 'none',
        color: '#000',
    }
}));

const Main = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.wrapper}>
            <Header />
            <Typography variant="h4" className={classes.padding}>enter ingredients</Typography>
            <Autocompleter />
            <div>
                <Link to="/result" className={classes.link} >
                    <ButtonBase focusRipple className={classes.button}>
                        <Typography>display your drinks</Typography>
                    </ButtonBase>
                </Link>
            </div>
        </div>
    )
}

export default Main;