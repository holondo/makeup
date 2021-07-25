import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CustomizedRatings from './CustomizedRatings';


const useStyles = makeStyles(() => ({
  priceAndEvaluationRow: {
    width: '85%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  typography: {
    marginTop: '5px',
  },
}));

const PriceAndEvaluation = () => {
  const classes = useStyles();
  return (
    <div className={classes.priceAndEvaluationRow} >
      <Typography className={classes.typography} variant="h5" component="h5" color="textPrimary" align="center">
        R$49,99
      </Typography>
      <CustomizedRatings />
    </div>
  )
}

export default PriceAndEvaluation;