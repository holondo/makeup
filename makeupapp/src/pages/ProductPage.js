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


const useStyles = makeStyles(() => ({
  productPage: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center'
  },
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
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
        <Header showFilters={false}/>
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
        <BottomNavigation />
        
      </div>
      );
}

export default ProductPage;