import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    card: {
        height: '30vh',
        width: '90%',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        borderRadius: '30px',
        objectFit: 'cover',
        marginTop: '10px',
    }
  }));

const LargeProductCard = () => {
  const classes = useStyles();
    return (
        <img src="/images/red-lipstick.PNG" className={classes.card} alt="batom matte MAC" />
    )
}

export default LargeProductCard;