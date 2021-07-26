import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Text from './Text';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: '10px',
    borderRadius: '30px',
    height: '15vh',
    width: '90%',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#F0F0F0',
  },
  cover: {
    width: '20vh',
  },
  lastRow: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

const BagItemCard = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="/images/red-lipstick.PNG"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Text text="Batom Matte" />
          <Text text="COR: VERMELHO" />
          <div className={classes.lastRow}>
            <Text text="QUANTIDADE: 1" />
            <Text text="R$49,99" />
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export default BagItemCard;