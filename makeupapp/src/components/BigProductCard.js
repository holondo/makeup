import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  card: {
    height: '15vh',
    width: '90vw',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    borderRadius: '30px',
    objectFit: 'cover',
  }
}));

const BigProductCard = ({path, alt}) => {
  const classes = useStyles({path});
  return (
    <img src={path} className={classes.card} alt={alt} />
  )
}

export default BigProductCard;