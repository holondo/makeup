import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
import ProductSection from '../components/ProductsSection';




const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    hight: '100%',
  },
}));

const Home = () => {
  const classes = useStyles();
    return (
      <>
      <Header />
        <div className={classes.root}>
          <h3>Promoção</h3>
          <ProductSection />
          <h3>Mais Vendidos</h3>
          <ProductSection />
        </div>
      </>
      );
}

export default Home;