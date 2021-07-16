import React from 'react'
import BigProductCard from './BigProductCard';
import SmallProductCard from './SmallProductCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '10px',
    },
    smallCardsContainer: {
        display: 'flex',
        width: '337px',
        justifyContent: 'space-between',
        marginTop: '10px',
    }
  }));

const ProductsSection = () => {
  const classes = useStyles();
    return (
        <div className={classes.root}>
            <BigProductCard />
            <div className={classes.smallCardsContainer}>
                <SmallProductCard />
                <SmallProductCard />
                <SmallProductCard />
            </div>
        </div>
    )
}

export default ProductsSection;