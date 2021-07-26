import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Text from './Text';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    minHeight: props => props.showFilters ? '100px' : '',
  },
  title: {
    flexGrow: 1,
    color: 'black',
  },
  logo: {
    width: '32vw',
    height: '6vh',
  },
  title: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '24px',
    marginTop: '10px',
    marginBottom: '10px',
    color: 'black',
    fontWeight: 'bold',
  },
  emptyIcon: {
    height: '24px',
    width: '24px',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  }
}));

const TopBar = ({text, back = false}) => {
  const classes = useStyles();
  return (
    <div className={classes.topBar}>
      <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
        {back ? <ArrowBackIosIcon className={classes.emptyIcon}/> : <div className={classes.emptyIcon} />}
      </IconButton>
      {text ? <span className={classes.title}>{text}</span> : <CardMedia className={classes.logo} image="/images/logo.JPG" />}
      <div>
        <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
          <SearchIcon />
        </IconButton>
        <Link to="/bag">
          <IconButton edge="start" color="default" aria-label="menu">
            <LocalMallIcon />
          </IconButton>
        </Link>
      </div>
    </div>
  )
}

export default TopBar;