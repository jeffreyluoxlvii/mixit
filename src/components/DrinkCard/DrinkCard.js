import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import { fetchDrinkData } from '../../api';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    height: 350,
    [theme.breakpoints.up('sm')]: {
      width: 300,
      height: 300,
    },
    [theme.breakpoints.up('md')]: {
      width: 250,
      height: 250,
    },
    fontFamily : '"Space Mono"',
    borderRadius: 0,
  },
  cardAction: {
    width: 350,
    height: 350,
    [theme.breakpoints.up('sm')]: {
      width: 300,
      height: 300,
    },
    [theme.breakpoints.up('md')]: {
      width: 250,
      height: 250,
    },
  },
  container: {
    padding: theme.spacing(2,2),
    display: 'inline-block',
  },
  paper: {
    position: 'absolute',
    color: 'FCFAFA',
    width: 350,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily : '"Space Mono"',
  },
  media: {
    // height: 0,
    // // paddingTop: '56.25%', // 16:9
    // paddingTop: '78.25%',
    width: 350,
    height: 290,
    [theme.breakpoints.up('sm')]: {
      width: 300,
      height: 240,
    },
    [theme.breakpoints.up('md')]: {
      width: 250,
      height: 190,
    },
  },
  list: {
    fontWeight: 'bold',
  },
  closeButton: {
    float: 'right',
    cursor: 'pointer',
  },
  card: {
    fontFamily : '"Space Mono"',
    borderRadius: 0,
    // boxShadow: "none",
    // background: 'FFFFFF',
    '&:hover': {
      backgroundColor: 'transparent'
    },
  },
  cardContent: {
    // paddingTop: '20%',
    // paddingBottom: '20%',
    width: 350,
    height: 60,
    [theme.breakpoints.up('sm')]: {
      width: 300,
      height: 60,
    },
    [theme.breakpoints.up('md')]: {
      width: 250,
      height: 60,
    },
  },
  typography: {
    fontFamily : '"Space Mono"',
    textTransform : 'uppercase',
    fontSize: 'small',
  },
}));

const DrinkCard = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [isFetching, setFetching] = useState(true);
  // ingredients will be an array of objects, in which each object has ingredient as key and measure as value
  const [ingredients, setIngredients] = useState([]);

  const theme = createMuiTheme({
    props: {
      // Name of the component
      MuiButtonBase: {
        // The properties to apply
        disableRipple: true // No more ripple, on the whole application!
      },
    }
  });

  useEffect(() => {
    const fetchAPI = async () => {
        const response = await fetchDrinkData(props.name);
        setData(response);
        console.log(response[0]);
        for(var i = 1; i < 16; i++) {
          const ingredient = {
            name: response[0][`strIngredient${i}`],
            measurement: response[0][`strMeasure${i}`]
          }
          if(ingredient.name) {
            ingredients.push(ingredient);
          }
        }
        setFetching(false);
    }
    fetchAPI();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  /**
   * this.props.name
   * this.props.image
   */
  return (
      <div className={classes.container}>
        <MuiThemeProvider theme={theme}>
        <Card className={classes.root} onClick={handleOpen} >
          <CardActionArea className={classes.cardAction}>
          <CardMedia
            className={classes.media}
            image={props.image}
          />
          <CardContent className={classes.cardContents}>
            <Typography className={classes.typography}>
              {props.name}
            </Typography>
          </CardContent>
          </CardActionArea>
        </Card>
      {isFetching ? <Typography></Typography> :       
        <Modal
          open={open}
          onClose={handleClose}
          className={classes.modal}
        >
          <div className={classes.paper}>
            <div className={classes.closeButton}>
              <CloseIcon fontSize="small" onClick={handleClose}/>
            </div>

            <h1>{data[0].strDrink}</h1>
            <hr></hr>
            <h2>Ingredients</h2>
            <ul className={classes.list}>
              {Array.from(ingredients).map((ingredient, index) => (
                <li key={index}>{ingredient.measurement}{ingredient.name}</li>
              ))}
            </ul>
            <hr></hr>
            <h2>Instructions</h2>
            <h3>{data[0].strInstructions}</h3>
          </div>
        </Modal>
      }
      </MuiThemeProvider>
      </div>
  );
}
export default DrinkCard;