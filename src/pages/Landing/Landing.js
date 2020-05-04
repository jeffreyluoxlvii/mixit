import React from 'react';

import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Landing = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div>
            <img src="logo192.png" alt="logo"/>
            <div>
                <Typography variant="h1" component="h2" gutterBottom>
                    h1. Heading
                </Typography>
                <Typography variant="h2" gutterBottom>
                    h2. Heading
                </Typography>
                <Link to="/main" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">
                        Make me a drink
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Landing;