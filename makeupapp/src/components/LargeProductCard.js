import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    card: {
        height: '30vh',
        width: '90%',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        borderRadius: '30px',
        backgroundColor: 'red',
        marginTop: '10px',
    }
  }));

const LargeProductCard = () => {
  const classes = useStyles();
    return (
        <div className={classes.card} />
    )
}

export default LargeProductCard;