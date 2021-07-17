import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    top: 90px;
    height: calc(100vh - 146px);
    background-color: #F0F0F0;
  }
  .MuiList-padding {
    padding-top: 0px;
  }
`
const drawerWidth = 140;

const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const LeftMenu = () => {
  const classes = useStyles();
  return (
    <StyledDrawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Batom Líquido', 'Batom Bala', 'Lápis de Boca', 'Gloss'].map((text, index) => (
          <ListItem button key={text} divider='true' alignItems='center'>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  )
}

export default LeftMenu;