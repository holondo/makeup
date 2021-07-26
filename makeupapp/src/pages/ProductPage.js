import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import LargeProductCard from '../components/LargeProductCard';
import PriceAndEvaluation from '../components/PriceAndEvaluation';
import ColorPicker from '../components/ColorPicker';
import AvailabilityAndFavorites from '../components/AvailabilityAndFavorites';
import ProductTips from '../components/ProductTips';
import Header from '../components/Header'
import AddToCardButton from '../components/AddToCartButton'
import Text from '../components/Text';


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
        <Text text="Batom Cremoso" />
        <PriceAndEvaluation />
        <ColorPicker />
        <AvailabilityAndFavorites />
        <Text text="Dicas de Influencers" />
        <ProductTips />
        <AddToCardButton />
        <BottomNavigation />
        <BottomNavigation />
      </div>
      );
}

export default ProductPage;