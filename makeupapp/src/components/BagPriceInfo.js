import React from 'react';
import { withStyles  } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const StyledButton = withStyles({
  root: {
    color: 'black',
    background: 'linear-gradient(45deg, #F0F0F0 30%, #F0F0F0 90%)',
    borderRadius: '30px',
    width: '40vw',
    height: '8vh',
    position: 'fixed',
    left: '10px',
    bottom: '70px',
  }
})(Button);



const BagPriceInfo = () => {
  return (
    <StyledButton style={{ fontSize: '2vh' }} >R$49,99</StyledButton>
  )
}

export default BagPriceInfo;