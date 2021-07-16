import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    card: {
        height: '102px',
        width: '337px',
        borderRadius: '10px',
        backgroundColor: 'red',
    }
  }));

const BigProductCard = () => {
  const classes = useStyles();
    return (
        <div className={classes.card} />
    )
}

export default BigProductCard;