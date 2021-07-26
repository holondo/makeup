import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import ProductSection from '../components/ProductsSection';
import Header from '../components/Header'
import Text from '../components/Text';


const useStyles = makeStyles(() => ({
  home: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minWidth: '100vw',
    minHeight: '100vh',
  },
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '100vw',
    overflowY: 'scroll',
  },
}));

const Home = () => {
  const classes = useStyles();
    return (
      <div className={classes.home}>
        <Header />
        <Toolbar />
        <div className={classes.homeContainer}>
          <Text text="Promoção" />
          <ProductSection />
          <Text text="Promoção" />
          <ProductSection />
          <Text text="Mais vendidos" />
          <ProductSection />
        </div>
        <BottomNavigation />
      </div>
      );
}

export default Home;