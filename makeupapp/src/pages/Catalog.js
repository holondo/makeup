import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { Link } from "react-router-dom";

import LeftMenu from '../components/LeftMenu'
import SmallBrandCard from '../components/SmallBrandCard'
import Header from '../components/Header'

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
  brandsGrid: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    display: 'grid',
    gridTemplateColumns: '92px 92px',
    gridRow: 'auto auto',
    gridColumnGap: '18px',
    gridRowGap: '18px',
  },
  filtersBalance: {
    display: 'inline-block',
    width: '100%',
    height: '41px',
  }
}));

const Catalog = () => {
  const classes = useStyles();
  return (
    <div className={classes.catalog}>
      <Header showCatalogFilters={true} />
      <Toolbar />
      <div style={{ height: '41px' }} className={classes.filtesBalance}>&nbsp;</div>
      <div className={classes.catalogContainer}>
        <LeftMenu />
        <div className={classes.brandsGrid}>
          <Link to="/products">
            <SmallBrandCard />
          </Link>
          <Link to="/products">
            <SmallBrandCard />
          </Link>
          <Link to="/products">
            <SmallBrandCard />
          </Link>
          <Link to="/products">
            <SmallBrandCard />
          </Link>
          <Link to="/products">
            <SmallBrandCard />
          </Link>
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}

export default Catalog;