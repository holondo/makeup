import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: props => props.showFilters ? '100px' : '',
  },
  title: {
    flexGrow: 1,
    color: 'black',
  },
}));

const TopBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.topBar}>
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
  )
}

export default TopBar;