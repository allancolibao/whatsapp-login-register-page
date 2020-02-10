import React from 'react';
import './App.css';
import Login from './components/login/Login';
import Register from './components/signup/Register';
import Hero from './components/Hero';
import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles} from '@material-ui/core/styles';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    background: 'linear-gradient(45deg, #67d433 30%, #13cd83 90%)',
        
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color:'#f2ffed',
  },
  color: {
    color:'#203618'
  }
}));


function App() {

  const  classes = useStyles();

  return (
    <div className="App">
      <Router>
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
          <Container  maxWidth="lg">
            <Toolbar className={classes.toolbar} >
                <Typography variant="h5" color="inherit" noWrap className={classes.toolbarTitle}>
                  <Link href="/" className={classes.color}>
                    WhatsApp
                  </Link>
                </Typography>
              <nav>
                <Link variant="button" color="textPrimary" href="/login"  className={classes.link}>
                    <Button>
                      Login
                    </Button>
                </Link>
                <Link variant="button"  href="/register" className={classes.link}>
                    <Button  variant="outlined">
                      Register
                    </Button>
                </Link>
              </nav>
            </Toolbar>
          </Container>
        </AppBar> 

        <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Hero />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
