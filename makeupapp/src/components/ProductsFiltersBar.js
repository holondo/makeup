import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  filters: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}));

const ProductsFiltersBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.filters}>
      <Button size='large'>Tipo</Button>
      <Button size="large">Categoria</Button>
      <Button size="medium">Filtro</Button>
    </div>
  )

}

export default ProductsFiltersBar;