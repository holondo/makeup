import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';

import LeftMenu from '../components/LeftMenu'
import SmallBrandCard from '../components/SmallBrandCard'

const useStyles = makeStyles(() => ({
  catalog: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  catalogContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  brandsContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    display: 'grid',
    gridTemplateColumns: '92px 92px',
    gridRow: 'auto auto', 
    gridColumnGap: '18px',
    gridRowGap: '18px',
  }
}));

const Catalog = () => {
  const classes = useStyles();
  return (
    <div className={classes.catalog}>
      <Toolbar />
      <Toolbar />
      <div className={classes.catalogContainer}>
        <LeftMenu />
        <div className={classes.brandsContainer}>
          <SmallBrandCard />
          <SmallBrandCard />
          <SmallBrandCard />
          <SmallBrandCard />
          <SmallBrandCard />
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}

export default Catalog;