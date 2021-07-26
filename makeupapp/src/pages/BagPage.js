import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import ProductSection from '../components/ProductsSection';
import Header from '../components/Header'
import Text from '../components/Text';
import BagItemCard from '../components/BagItemCard';
import BuyButton from '../components/BuyButton';
import BagPriceInfo from '../components/BagPriceInfo';


const useStyles = makeStyles(() => ({
  bag: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minWidth: '100vw',
    minHeight: '100vh',
  },
  bagContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100vh',
    alignItems: 'center',
    minWidth: '100vw',
    overflowY: 'scroll',
  },
}));

const BagPage = () => {
  const classes = useStyles();
    return (
      <div className={classes.bag}>
        <Header text="Sacola" back/>
        <Toolbar />
        <div className={classes.bagContainer}>
          <BagItemCard />
          
        </div>
        <BuyButton />
        <BagPriceInfo />
        <BottomNavigation />
      </div>
      );
}

export default BagPage;