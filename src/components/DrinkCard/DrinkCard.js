import React from './node_modules/react';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import Card from './node_modules/@material-ui/core/Card';
import CardHeader from './node_modules/@material-ui/core/CardHeader';
import CardMedia from './node_modules/@material-ui/core/CardMedia';
import CardContent from './node_modules/@material-ui/core/CardContent';
import IconButton from './node_modules/@material-ui/core/IconButton';
import Typography from './node_modules/@material-ui/core/Typography';
import { red } from './node_modules/@material-ui/core/colors';
import MoreVertIcon from './node_modules/@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function DrinkCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}
