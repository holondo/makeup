import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
import ProductSection from '../components/ProductsSection';



const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Home = () => {
  const classes = useStyles();
    return (
      <>
      <Header />
        <div className={classes.root}>
          <ProductSection />
          <ProductSection />
        </div>
      </>
      );
}

export default Home;