import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  text: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: props => (props.large) ? '4vh' : '2.5vh',
    marginTop: '5px',
  }
}));

const Text = ({text, large = false}) => {
  console.log('oi', large)
  const classes = useStyles({large});
  return (
    <span className={classes.text} >
      {text}
    </span>
  )
}

export default Text