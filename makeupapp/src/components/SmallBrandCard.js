import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    card: {
        height: '13vh',
        width: '13vh',
        borderRadius: '30px',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        backgroundImage: props => props.path,
        backgroundSize: 'cover',
    }
  }));

const SmallBrandCard = ({path}) => {
    const classes = useStyles({path});
    return (
        <div className={classes.card} />
    )
}

export default SmallBrandCard;