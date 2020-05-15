import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 450,
  },
  container: {
    padding: theme.spacing(3,3),
    display: 'inline-block',
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
  /**
   * this.props.name
   * this.props.image
   */
  return (
    <div className={classes.container}>
      <Card className={classes.root}>
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
    </div>
  );
}
export default DrinkCard;