import React from 'react';
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import NavBar from './components/NavBar'
import Header from './components/Header'
import { makeStyles } from '@material-ui/core/styles';


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
        <div className={classes.root}>
            <Header showFilters={true}/>
            <Catalog />
            <NavBar />
        </div>
    )
}

export default App;