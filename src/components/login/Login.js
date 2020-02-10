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
    marginTop: theme.spacing(1),
   
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

export default function Login() {

  const classes = useStyles();

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <WhatsAppIcon className={classes.icon} />
        </Avatar>
        <form className={classes.form} noValidate>
          <CssTextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <CssTextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<GreenCheckbox value="remember" />}
            label="Remember me"
          />
          <ColorButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </ColorButton>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" color="inherit">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2" color="inherit">
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}