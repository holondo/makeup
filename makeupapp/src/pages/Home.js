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
    justifyContent: 'flex-start',
    height: '85vh',
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
          <Text text="Promoção" large/>
          <ProductSection 
            path1='url("/images/Promo 1.PNG")'
            path2='url("/images/home1.jpg")'
            path3='url("/images/home2.jpg")'
            path4='url("/images/home3.jpg")'
          />
          <Text text="Mais Vendidos" large/>
          <ProductSection 
            path1='url("/images/promocao2.jpg")'
            path2='url("/images/home4.jpg")'
            path3='url("/images/home5.jpg")'
            path4='url("/images/home6.jpg")'
          />
          
        </div>
        <BottomNavigation />
      </div>
      );
}

export default Home;