import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  style:{
  fontSize:'16vmin',
  textAlign:"left",
  color:'#5ac427',
  fontWeight: "bolder",
  textTransform:'uppercase'
  },
  link:{
    color:'#26bf75',
    '&:hover': {
      color: "#1a5fba",
   }
  }

}));

export default function Hero() {

  const  classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Typography  variant="h1" color="inherit" className={classes.style} >
        WhatsApp React and Material Ui <Link href="/login" className={classes.link}>Login</Link> and <Link href="/register" className={classes.link} >Register</Link> Page
      </Typography>
    </Container>
  );
}