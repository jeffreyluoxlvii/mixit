import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    justifySelf: "flex-start",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  center: {
    alignItem:'center',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  formControl: {
    margin: 0,
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
  },
  typography: {
    fontSize: 25,
  },
}));

function Navigation(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [state, setState] = React.useState({
    Vodka: false,
    Rum: false,
    Gin: false,
    Coke: false,
    Sprite: false,
    FantaO: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { Vodka, Rum, Gin, Coke, Sprite, FantaO } = state;
  const error = [Vodka, Rum, Gin, Coke, Sprite, FantaO].filter((v) => v).length !== 2;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      {/*
      First Expansion
      */} 
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Alcoholic Drinks</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox color = 'primary' checked={Vodka} onChange={handleChange} name="Vodka" />}
            label="Vodka"
          />
          <FormControlLabel
            control={<Checkbox color = 'primary' checked={Rum} onChange={handleChange} name="Rum" />}
            label="Rum"
          />
          <FormControlLabel
            control={<Checkbox color = 'primary' checked={Gin} onChange={handleChange} name="Gin" />}
            label="Gin"
          />
        </FormGroup>
        </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {/*
      Second Expansion
      */} 
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Mixers</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox color = 'primary' checked={Coke} onChange={handleChange} name="Coke" />}
            label="Coke"
          />
          <FormControlLabel
            control={<Checkbox color = 'primary' checked={Sprite} onChange={handleChange} name="Sprite" />}
            label="Sprite"
          />
          <FormControlLabel
            control={<Checkbox color = 'primary' checked={FantaO} onChange={handleChange} name="FantaO" />}
            label="Fanta Orange"
          />
        </FormGroup>
      </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Grid
              container
              alignItems={"center"}
              justify={"space-between"}
            >
              <Grid xs={1} item>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                  >
                  <MenuIcon />
                  </IconButton>
              </Grid>
              <Grid xs={8} md={7} lg={7} xl={7} item>
                <Typography className={classes.typography} variant="h6" noWrap>
                  Drink Match
                </Typography>
               </Grid>
              </Grid>
          </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
        </Typography>
      </main>
    </div>
  );
}

Navigation.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navigation;