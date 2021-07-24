import React from 'react';
import { withStyles  } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const StyledButton = withStyles({
  root: {
    color: 'white',
    background: 'linear-gradient(45deg, #000 30%, #000 90%)',
    borderRadius: '30px',
    width: '204px',
    height: '57px',
    position: 'fixed',
    right: '10px',
    bottom: '70px',
  }
})(Button);



const AddToCardButton = () => {
  return (
    <StyledButton>Adicionar à Sacola</StyledButton>
  )
}

export default AddToCardButton;