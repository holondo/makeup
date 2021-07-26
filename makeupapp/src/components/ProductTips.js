import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ProfileCircle from './ProfileCircle';

const useStyles = makeStyles(() => ({
    card: {
        height: '25vh',
        width: '90%',
        borderRadius: '30px',
        backgroundColor: '#F0F0F0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5px',
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
            <ProfileCircle path='url("/images/influencer1.jpg")'/>
            <ProfileCircle path='url("/images/influencer2.jpg")'/>
            <ProfileCircle path='url("/images/influencer3.jpg")'/>
          </div>
        </div>
    )
}

export default ProductTips;