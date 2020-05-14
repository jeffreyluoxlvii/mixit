import React from 'react';

import { Header, Autocompleter } from '../../components';
import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import Fab from '@material-ui/core/Fab';
import LocalBarTwoToneIcon from '@material-ui/icons/LocalBarTwoTone';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection:'column',
        paddingTop:'10%'
    },
    padding: {
        padding: '30px',
    },
    button: {
        padding: '10px',
        margin: '30px',
        border: '3px solid',
        borderRadius: '30px',
    },
    link: {
        textDecoration: 'none',
        color: '#000',
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

const Main = ({ tagChange }) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.wrapper}>
            <Header />
            <Typography variant="h4" className={classes.padding}>enter ingredients</Typography>
            <Autocompleter tagChange={ tagChange }/>
            <div>
                <Link to="/result" className={classes.link} >
                    <ButtonBase focusRipple className={classes.button}>
                        <Typography>display your drinks</Typography>
                    </ButtonBase>
                </Link>
            </div>
            <div>
                <Link to="" className={classes.link} >
                    <Fab color="primary" className={classes.fab} aria-label="Home">
                        <LocalBarTwoToneIcon />
                    </Fab>
                </Link>
            </div>
        </div>
    )
}

export default Main;