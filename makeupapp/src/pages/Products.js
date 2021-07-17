import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import SmallBrandCard from '../components/SmallBrandCard'
import ProductCard from '../components/ProductCard';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles(() => ({
  products: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  productContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    overflowY: 'scroll',
  },
  productsGrid: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    display: 'grid',
    gridTemplateColumns: '170px 170px',
    gridRow: 'auto auto',
    gridColumnGap: '13px',
    gridRowGap: '15px',
  },
  filtersBalance: {
    display: 'inline-block',
    width: '100%',
    height: '41px',
  },
  brandNameContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '10px'
  }
}));

const Products = () => {
  const classes = useStyles();
  return (
    <div className={classes.products}>
      <Toolbar />
      <div style={{ height: '41px' }} className={classes.filtesBalance}>&nbsp;</div>
      <div className={classes.brandNameContainer}>
        <Typography variant="body1" component="h2" color="textPrimary" align="center">
            MAC (150 produtos)
        </Typography>
      </div>
      <div className={classes.productContainer}>
        <div className={classes.productsGrid}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}

export default Products;