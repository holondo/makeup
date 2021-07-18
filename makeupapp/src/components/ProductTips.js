import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    card: {
        height: '106px',
        width: '337px',
        borderRadius: '30px',
        backgroundColor: '#F0F0F0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    } 
  }));

const ProductTips = () => {
  const classes = useStyles();
    return (
        <div className={classes.card} />
    )
}

export default ProductTips;