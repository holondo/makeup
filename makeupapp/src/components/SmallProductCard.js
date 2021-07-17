import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    card: {
        height: '102px',
        width: '102px',
        borderRadius: '30px',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
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