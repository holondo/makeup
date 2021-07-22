import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ProfileCircle from './ProfileCircle';

const useStyles = makeStyles(() => ({
    card: {
        height: '150px',
        width: '337px',
        borderRadius: '30px',
        backgroundColor: '#F0F0F0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileRow: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    } 
  }));

const ProductTips = () => {
  const classes = useStyles();
    return (
        <div className={classes.card} >
          <div className={classes.profileRow} >
            <ProfileCircle />
            <ProfileCircle />
            <ProfileCircle />
          </div>
        </div>
    )
}

export default ProductTips;