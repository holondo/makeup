import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProductSection from '../components/ProductsSection';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    hight: '100%',
    marginTop: '48px',
  },
}));

const Home = () => {
  const classes = useStyles();
    return (
      <>
        <div className={classes.root}>
          <h3>Promoção</h3>
          <ProductSection />
          <h3>Mais Vendidos</h3>
          <ProductSection />
          <h3>Mais Vendidos</h3>
          <ProductSection />
        </div>
      </>
      );
}

export default Home;