import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.scss";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(3),
  },
  headerButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header(): ReactElement {
    const classes = useStyles();

  return (
    <div className="Header" id="header-section">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            {/* <img src={logo} alt="logo" style={{ width: 50, height: 50 }} /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title} />
          <Button className="Header-button" color="inherit">Home</Button>
          <Button className="Header-button" color="inherit">Who am I?</Button>
          <Button className="Header-button" color="inherit">Skills</Button>
          <Button className="Header-button" color="inherit">Work</Button>
          <Button className="Header-button" color="inherit">Projects</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
