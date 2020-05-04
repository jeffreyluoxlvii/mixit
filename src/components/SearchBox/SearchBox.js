import React from 'react';
import { fade, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    height: 'auto',
    width: '50%',
  },
  mainGrid: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  selectionBar: {
      padding: theme.spacing(1),
  },
  popularCheckbox: {
      padding: theme.spacing(1),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
      padding: theme.spacing(2),
  },
  textField: {
    width: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [state, setState] = React.useState({
    Vodka: false,
    Rum: false,
    Gin: false,
    clubSoda: false,
    Sprite: false,
    orangeJuice: false,
    coke: false,
    pinkLemonade: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { Vodka, Rum, Gin, clubSoda, Sprite, orangeJuice, coke, pinkLemonade } = state;
  const error = [Vodka, Rum, Gin, clubSoda, Sprite, orangeJuice, coke, pinkLemonade].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
        <Grid className = {classes.mainGrid}>
            <Paper className={classes.paper}>
                <Grid container>
                    <Grid item xs={12} className = {classes.selectionBar}>
                        <Typography>
                            Select from Popular Ingredients:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className={classes.popularCheckbox}>
                        <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                        <FormControlLabel
                            control={<Checkbox color = 'primary' checked={Vodka} onChange={handleChange} name="Vodka" />}
                            label="Vodka"
                        />
                        </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className={classes.popularCheckbox}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                        <FormControlLabel
                            control={<Checkbox color = 'primary' checked={Gin} onChange={handleChange} name="Gin" />}
                            label="Gin"
                        />
                        </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className={classes.popularCheckbox}>
                        <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                        <FormControlLabel
                            control={<Checkbox color = 'primary' checked={Rum} onChange={handleChange} name="Rum" />}
                            label="Rum"
                        />
                        </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className={classes.popularCheckbox}>
                        <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                        <FormControlLabel
                            control={<Checkbox color = 'primary' checked={clubSoda} onChange={handleChange} name="clubSoda" />}
                            label="Club Soda"
                        />
                        </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className={classes.popularCheckbox}>
                        <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                        <FormControlLabel
                            control={<Checkbox color = 'primary' checked={pinkLemonade} onChange={handleChange} name="pinkLemonade" />}
                            label="Pink Lemonade"
                        />
                        </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className={classes.popularCheckbox}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                        <FormControlLabel
                            control={<Checkbox color = 'primary' checked={coke} onChange={handleChange} name="coke" />}
                            label="Coke"
                        />
                        </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className={classes.popularCheckbox}>
                        <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                        <FormControlLabel
                            control={<Checkbox color = 'primary' checked={Sprite} onChange={handleChange} name="Sprite" />}
                            label="Sprite"
                        />
                        </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className={classes.popularCheckbox}>
                        <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                        <FormControlLabel
                            control={<Checkbox color = 'primary' checked={orangeJuice} onChange={handleChange} name="orangeJuice" />}
                            label="Orange Juice"
                        />
                        </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} className = {classes.selectionBar}>
                        <Typography>
                            Enter Keywords or Ingredients:
                        </Typography>
                    </Grid>
                    <Grid item xs = {12} className={classes.searchBar}>
                        <FormControl className={classes.selectionBar, classes.textField}>
                                <Input
                                    placeholder="Enter Keywords or Ingredients here"
                                    id="ingredientSearch"
                                    startAdornment={
                                        <InputAdornment position="start">
                                        <SearchIcon />
                                        </InputAdornment>
                                    }
                                />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} className = {classes.selectionBar}>
                        <Typography>
                            Your Ingredients:
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </div>
  );
}