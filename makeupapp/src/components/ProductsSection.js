import React from 'react'
import BigProductCard from './BigProductCard';
import SmallProductCard from './SmallProductCard';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10px',
    minWidth: '100vw',
  },
  smallCardsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
    marginLeft: '5vw',
    marginRight: '5vw',
    minWidth: '90vw',
  }
}));

const ProductsSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to="/product">
        <BigProductCard />
      </Link>
      <div className={classes.smallCardsContainer}>
        <Link to="/product">
          <SmallProductCard />
        </Link>
        <Link to="/product">
          <SmallProductCard />
        </Link>
        <Link to="/product">
          <SmallProductCard />
        </Link>
      </div>
    </div>
  )
}

export default ProductsSection;