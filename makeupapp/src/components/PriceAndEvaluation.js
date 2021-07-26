import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CustomizedRatings from './CustomizedRatings';
import Text from './Text';


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
      <Text text="R$49,99" large/>
      <CustomizedRatings />
    </div>
  )
}

export default PriceAndEvaluation;