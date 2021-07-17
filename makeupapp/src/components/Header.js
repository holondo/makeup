import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: props => props.showFilters ? '100px' : '',
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  filters: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
    color: 'black',
  },
}));



const Header = ({showFilters}) => {
  console.log(showFilters)
    const classes = useStyles(showFilters);
    return (
        <div className={classes.root}>
          <AppBar color="inherit" position='fixed'>
            <Toolbar className={classes.toolbar}>
              <div className={classes.top}>
                <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
                  <FavoriteBorderIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Magic Make
                </Typography>
                <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
                  <SearchIcon />
                </IconButton>
                <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
                  <LocalMallIcon />
                </IconButton>
              </div>
              {showFilters === true ? <div className={classes.filters}>
                <Button size='large'>Lábios</Button>
                <Button size="large">Rosto</Button>
                <Button size="large">Olhos</Button>
                <Button size="large">Cabelos</Button>
              </div> : null}
            </Toolbar>
          </AppBar>
        </div>
      );
}


export default Header;