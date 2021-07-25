import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import LargeProductCard from '../components/LargeProductCard';
import Typography from '@material-ui/core/Typography';
import PriceAndEvaluation from '../components/PriceAndEvaluation';
import ColorPicker from '../components/ColorPicker';
import AvailabilityAndFavorites from '../components/AvailabilityAndFavorites';
import ProductTips from '../components/ProductTips';
import Header from '../components/Header'
import AddToCardButton from '../components/AddToCartButton'


const useStyles = makeStyles(() => ({
  productPage: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100vh',
    width: '100vw',
    alignItems: 'center'
  },
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
  },
  typography: {
    marginTop: '5px',
  }
}));

const ProductPage = () => {
  const classes = useStyles();
    return (
      <div className={classes.productPage}>
        <Header showCatalogFilters={false}/>
        <Toolbar />
        <LargeProductCard />
        <Typography className={classes.typography} variant="body1" component="h2" color="textPrimary" align="center">
           Batom Cremoso
        </Typography>
        <PriceAndEvaluation />
        <ColorPicker />
        <AvailabilityAndFavorites />
        <Typography className={classes.typography} variant="body1" component="h2" color="textPrimary" align="center">
           Dicas de Influencers
        </Typography>
        <ProductTips />
        <AddToCardButton />
        <BottomNavigation />
        <BottomNavigation />
      </div>
      );
}

export default ProductPage;