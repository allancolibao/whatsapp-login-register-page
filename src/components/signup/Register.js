import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { lightGreen } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    height: theme.spacing(7),
    width: theme.spacing(7),
    margin: theme.spacing(1),
    background: 'linear-gradient(45deg, #57d51b 30%, #13cd83 90%)',
  },
  icon: {
    height: theme.spacing(4),
    width: theme.spacing(4),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(lightGreen[500]),
    backgroundColor: lightGreen[500],
    '&:hover': {
      backgroundColor: lightGreen[600],
    },
  },
}))(Button);

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: lightGreen[700],
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: lightGreen[700],
    }
  },
})(TextField);


const GreenCheckbox = withStyles({
  root: {
    color: lightGreen[400],
    '&$checked': {
      color: lightGreen[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export default function Register() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <WhatsAppIcon className={classes.icon} />
        </Avatar>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CssTextField
                autoComplete="fname"
                name="firstName"
                variant="standard"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CssTextField
                variant="standard"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                variant="standard"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                variant="standard"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<GreenCheckbox value="allowExtraEmails"/>}
                label="I want to receive updates via email."
              />
            </Grid>
          </Grid>
          <ColorButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </ColorButton>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2" color="inherit">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}