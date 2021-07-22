import * as React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import PersonIcon from '@material-ui/icons/Person';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link } from "react-router-dom";


const useStyles = makeStyles(() => ({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    right: 0,
    backgroundColor: 'black'
  },
}));

const NavBarTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secundary: {
      main: '#000',
    }
  }
});

const NavBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={NavBarTheme}>
      <BottomNavigation className={classes.stickToBottom} sx={{ width: 500 }} value={value} onChange={handleChange} >
        <Link to="/">
          <BottomNavigationAction
            className={classes.option}
            label="Home"
            value="home"
            icon={<HomeIcon color='primary' />}
          />
        </Link>
        <Link to="/">
          <BottomNavigationAction
            className={classes.option}
            label="Dicas"
            value="dicas"
            icon={<SubscriptionsIcon color='primary' />}
          />
        </Link>
        <Link to="/catalog">
          <BottomNavigationAction
            className={classes.option}
            label="Categorias"
            value="categorias"
            icon={<AccountTreeIcon color='primary' />}
          />
        </Link>
        <Link to="/">
          <BottomNavigationAction
            className={classes.option}
            label="Favoritos"
            value="favoritos"
            icon={<FavoriteIcon color='primary' />}
          />
        </Link>
        <Link to="/">
        <BottomNavigationAction
          className={classes.option}
          label="Perfil" value="perfil" icon={<PersonIcon color='primary' />} />
        </Link>
      </BottomNavigation>
    </ThemeProvider>
  );
}

export default NavBar;