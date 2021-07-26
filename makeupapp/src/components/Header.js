import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CatalogFiltersBar from './CatalogFiltersBar';
import ProductsFiltersBar from './ProductsFiltersBar';
import TopBar from './TopBar';

const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
    color: 'white',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: props => (props.showCatalogFilters || props.showProductsFilters) ? '10px' : '',
  },
}));



const Header = ({ showCatalogFilters = false, showProductsFilters = false , text, back}) => {
  const classes = useStyles(showCatalogFilters, showProductsFilters);
  return (
    <div className={classes.header}>
      <AppBar color="inherit" position='fixed'>
        <Toolbar className={classes.toolbar}>
          <TopBar text={text} back={back} />
          {[showCatalogFilters ? <CatalogFiltersBar /> : null,
          showProductsFilters ? <ProductsFiltersBar /> : null
          ]}
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default Header;