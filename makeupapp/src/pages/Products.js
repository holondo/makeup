import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import ProductCard from '../components/ProductCard';
import Typography from '@material-ui/core/Typography';
import Header from '../components/Header'
import { Link } from "react-router-dom";
import Text from '../components/Text';


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
    gridColumnGap: '2vh',
    gridRowGap: '2vh',
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
      <Header showProductsFilters={true} text="Produtos" back />
      <Toolbar />
      <div style={{ height: '41px' }} className={classes.filtesBalance}>&nbsp;</div>
      <div className={classes.brandNameContainer}>
        <Text text="MAC (6 produtos)" />
      </div>
      <div className={classes.productContainer}>
        <div className={classes.productsGrid}>
          <Link to="/product">
            <ProductCard path="/images/red-lipstick.PNG" title="Batom Matte" />
          </Link>
          <Link to="/product">
            <ProductCard path="/images/home1.jpg" title="Batom Fogo"/>
          </Link>
          <Link to="/product">
            <ProductCard path="/images/home4.jpg" title="Kit Neutro"/>
          </Link>
          <Link to="/product">
            <ProductCard path="/images/home5.jpg" title="Kit Inverno"/>
          </Link>
          <Link to="/product">
            <ProductCard path="/images/batom2.jpg" title="Batom Areia"/>
          </Link>
          <Link to="/product">
            <ProductCard path="/images/home2.jpg" title="Kit Gold"/>
          </Link>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}

export default Products;