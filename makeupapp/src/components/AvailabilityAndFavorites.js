import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const FavoritesButton = styled(Button)`
  color: white;
  background-color: black;
  border-radius: 30px;
  width: 196px;
  height: 27px;
`;

const useStyles = makeStyles(() => ({
  availabilityAndFavorites: {
    width: '90%',
    borderRadius: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '12px 10px',
    alignItems: 'center',
  },
}));


const AvailabilityAndFavorites = () => {
  const classes = useStyles();
  return (
    <div className={classes.availabilityAndFavorites}>
      <Typography className={classes.typography} variant="body1" component="h2" color="textPrimary" align="center">
        Em estoque
      </Typography>
      <FavoritesButton>+ Favoritos</FavoritesButton>
    </div>
  )
}

export default AvailabilityAndFavorites