import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Modal from '@material-ui/core/Modal';
import { fetchDrinkData } from '../../api';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
  },
  container: {
    padding: theme.spacing(1,1),
    display: 'inline-block',
  },
  paper: {
    position: 'absolute',
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
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  header: {
    height: 80,
  },
}));

const DrinkCard = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [isFetching, setFetching] = useState(true);
  // ingredients will be an array of objects, in which each object has ingredient as key and measure as value
  const [ingredients, setIngredients] = useState([]);

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
        <Card className={classes.root} onClick={handleOpen}>
          <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
          />
          <CardContent>
            <Typography>
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
            <h1>{data[0].strDrink}</h1>
            <h2>Ingredients</h2>
            <ol>
            {Array.from(ingredients).map((ingredient, index) => (
              <li>{ingredient.measurement}{ingredient.name}</li>
            ))}
            </ol>
            <h3>{data[0].strInstructions}</h3>
          </div>
        </Modal>
      }
      </div>
  );
}
export default DrinkCard;