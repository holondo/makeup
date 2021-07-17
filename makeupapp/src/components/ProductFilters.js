import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  filters: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

const ProductFilters = () => {
  const classes = useStyles();
  return (
    <div className={classes.filters}>
      <Button size='large'>Tipo</Button>
      <Button size="large">Categoria</Button>
      <Button size="large">Filtros</Button>
    </div>
  )

}

export default ProductFilters;