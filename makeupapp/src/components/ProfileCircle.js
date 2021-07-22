import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  profileCircle: {
    height: '95px',
    width: '95px',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    borderRadius: '100%',
    backgroundColor: 'red',
    marginTop: '5px',
  }
}));

const ProfileCircle = () => {
  const classes = useStyles();
  return (
    <div className={classes.profileCircle} />
  )
}

export default ProfileCircle;