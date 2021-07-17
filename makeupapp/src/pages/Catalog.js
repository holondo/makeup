import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';

import LeftMenu from '../components/LeftMenu'

const useStyles = makeStyles(() => ({
  catalog: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  catalogContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    overflowY: 'scroll',
  },
}));

const Catalog = () => {
  const classes = useStyles();
  return (
    <div className={classes.catalog}>
      <Toolbar />
      <div className={classes.catalogContainer}>
        <LeftMenu />
      </div>
      <BottomNavigation />
    </div>
  )
}

export default Catalog;