import React from 'react';
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Products from './pages/Products'
import ProductPage from './pages/ProductPage'
import BagPage from './pages/BagPage';
import NavBar from './components/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";


const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      minWidth: '100vw',
      minHeight: '100vh',
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
            <Route exact path="/bag" component={BagPage}/>
            <NavBar />
        </div>
      </Router>
    )
}

export default App;