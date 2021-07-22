import React from 'react';
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Products from './pages/Products'
import ProductPage from './pages/ProductPage'
import NavBar from './components/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      hight: '100%',
    },
  }));

const App = () => {
    const classes = useStyles();
    return (
      <Router>
        <div className={classes.root}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/catalog" component={Catalog}/>
            <Route exact path="/products" component={Products}/>
            <Route exact path="/product" component={ProductPage}/>
            <NavBar />
        </div>
      </Router>
    )
}

export default App;