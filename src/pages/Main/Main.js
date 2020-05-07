import React from 'react';

import { Header, Autocompleter } from '../../components';
import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '90vh',
    },
    padding: {
        padding: '30px',
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
        </div>
    )
}

export default Main;