import React, {useState, useEffect} from 'react';
import { Header, DrinkCardList, DrinkCard, Scroll } from '../../components';
import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import LocalBarTwoToneIcon from '@material-ui/icons/LocalBarTwoTone';
import { Link } from 'react-router-dom';
import { fetchDrinks } from '../../api';

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

const Result = ({ ingredients }) => {
    const classes = useStyles();
    const theme = useTheme();

    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDrinks(await fetchDrinks(ingredients));
        }
        fetchAPI();
    }, []);

    console.log(drinks);

    return (
        <div className={classes.wrapper}>
            <Header />
            <Typography variant="h4" className={classes.padding}>Here are the drinks you can make:</Typography>
            <Scroll>
                <DrinkCardList drinks={drinks} />
            </Scroll>
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

export default Result;