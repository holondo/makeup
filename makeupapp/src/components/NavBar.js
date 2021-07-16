import * as React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import PersonIcon from '@material-ui/icons/Person';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        right: 0,
      },
  }));

const NavBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation className={classes.stickToBottom} sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        className={classes.option}
        label="Home"
        value="home"
        icon={<HomeIcon color='primary'/>}
      />
      <BottomNavigationAction
        className={classes.option}
        label="Dicas"
        value="dicas"
        icon={<SubscriptionsIcon />}
      />
      <BottomNavigationAction
        className={classes.option}
        label="Categorias"
        value="categorias"
        icon={<AccountTreeIcon />}
      />
      <BottomNavigationAction
        className={classes.option}
        label="Favoritos"
        value="favoritos"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction 
      className={classes.option}
      label="Perfil" value="perfil" icon={<PersonIcon />} />
    </BottomNavigation>
  );
}

export default NavBar;