import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    card: {
        height: '102px',
        width: '102px',
        borderRadius: '10px',
        backgroundColor: 'red',
    }
  }));

const SmallProductCard = () => {
    const classes = useStyles();
    return (
        <div className={classes.card} />
    )
}

export default SmallProductCard;