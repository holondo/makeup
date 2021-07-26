import React from 'react';
import { withStyles  } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const StyledButton = withStyles({
  root: {
    color: 'white',
    background: 'linear-gradient(45deg, #000 30%, #000 90%)',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    borderRadius: '30px',
    width: '50vw',
    height: '8vh',
    position: 'fixed',
    right: '10px',
    bottom: '70px',
  }
})(Button);



const BuyButton = () => {
  return (
    <StyledButton style={{ fontSize: '2vh' }} >Finalizar Compra</StyledButton>
  )
}

export default BuyButton;