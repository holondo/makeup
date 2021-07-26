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
  },
  catalogContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  brandsGrid: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    display: 'grid',
    gridTemplateColumns: '13vh 13vh',
    gridRow: 'auto auto',
    gridColumnGap: '3vh',
    gridRowGap: '3vh',
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
      <Header showCatalogFilters={true} text="Catálogo" />
      <Toolbar />
      <div style={{ height: '41px' }} className={classes.filtesBalance}>&nbsp;</div>
      <div className={classes.catalogContainer}>
        <LeftMenu />
        <div className={classes.brandsGrid}>
          <Link to="/products">
            <SmallBrandCard
              path='url("/images/Todas.JPG")'
            />
          </Link>
          <Link to="/products">
            <SmallBrandCard
              path='url("/images/MAC.JPG")'
            />
          </Link>
          <Link to="/products">
            <SmallBrandCard
              path='url("/images/Maybelline.PNG")'
            />
          </Link>
          <Link to="/products">
            <SmallBrandCard
              path='url("/images/Dior.PNG")'
            />
          </Link>
          <Link to="/products">
            <SmallBrandCard
              path='url("/images/Revlon.PNG")'
            />
          </Link>
        </div>
      </div>
      <BottomNavigation />
    </div>
  )
}

export default Catalog;