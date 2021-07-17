import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CatalogFilters from './CatalogFilters'
import TopBar from './TopBar'

const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
    color: 'white',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: props => props.showFilters ? '100px' : '',
  },
}));



const Header = ({ showFilters }) => {
  const classes = useStyles(showFilters);
  return (
    <div className={classes.header}>
      <AppBar color="inherit" position='fixed'>
        <Toolbar className={classes.toolbar}>
          <TopBar />
          {showFilters ? <CatalogFilters /> : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default Header;