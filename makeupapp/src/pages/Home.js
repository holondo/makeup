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
            path1='/images/Promo 1.PNG'
            path2='/images/home1.jpg'
            path3='/images/home2.jpg'
            path4='/images/home3.jpg'
            alt1='escolha seu brinde nas compras acima de R$199'
            alt2='batom vermelho e base MAC'
            alt3='batom vermelho e base Dior'
            alt4='base rosa MAC'
          />
          <Text text="Mais Vendidos" large/>
          <ProductSection 
            path1='/images/promocao2.jpg'
            path2='/images/home4.jpg'
            path3='/images/home5.jpg'
            path4='/images/home6.jpg'
            alt1='base pastel e pincel MAC'
            alt2='kit inverson Dior'
            alt3='kit inverno MAC'
            alt4='palleta de sombras arcoiris MAC'
          />
          
        </div>
        <BottomNavigation />
      </div>
      );
}

export default Home;