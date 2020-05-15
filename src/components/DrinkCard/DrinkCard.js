import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
  },
  container: {
    padding: '10px',
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
    height: 100,
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
        <CardHeader
          className={classes.header}
          title={props.name}
        />
        <CardMedia
          className={classes.media}
          image={props.image}
        />
      </Card>
    </div>
  );
}
export default DrinkCard;