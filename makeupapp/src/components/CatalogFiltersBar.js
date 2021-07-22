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

const CatalogFiltersBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.filters}>
      <Button size='large'>Lábios</Button>
      <Button size="large">Rosto</Button>
      <Button size="large">Olhos</Button>
      <Button size="large">Cabelos</Button>
    </div>
  )

}

export default CatalogFiltersBar;