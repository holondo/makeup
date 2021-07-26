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

const ProductsSection = ({path1, path2, path3, path4}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to="/product">
        <BigProductCard path={path1}/>
      </Link>
      <div className={classes.smallCardsContainer}>
        <Link to="/product">
          <SmallProductCard path={path2}/>
        </Link>
        <Link to="/product">
          <SmallProductCard path={path3}/>
        </Link>
        <Link to="/product">
          <SmallProductCard path={path4}/>
        </Link>
      </div>
    </div>
  )
}

export default ProductsSection;