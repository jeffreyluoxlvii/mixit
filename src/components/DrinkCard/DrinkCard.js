import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardActionArea from '@material-ui/core/CardActionArea';
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 450,
  },
  container: {
    padding: theme.spacing(3,3),
    display: 'inline-block',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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

  const handleOpen = () => {
    setOpen(true);
    console.log("clicked");
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
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h1>{props.name}</h1>
        </div>

      </Modal>
      </div>
  );
}
export default DrinkCard;