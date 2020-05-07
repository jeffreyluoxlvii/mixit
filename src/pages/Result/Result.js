import React from 'react';

import { Header, Autocompleter } from '../../components';
import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

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
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

const Result = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.wrapper}>
            <Header />
            <Typography variant="h4" className={classes.padding}>Here are the drinks you can make:</Typography>
            <div>
                <Link to="" className={classes.link} >
                    <Fab color="primary" className={classes.fab} aria-label="Home">
                        <HomeIcon />
                    </Fab>
                </Link>
            </div>
        </div>
    )
}

export default Result;