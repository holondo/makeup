import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  profileCircle: {
    height: '15vh',
    width: '15vh',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    borderRadius: '100%',
    objectFit: 'cover',
    marginTop: '5px',
  }
}));

const ProfileCircle = ({ path, alt }) => {
  const classes = useStyles({ path });
  return (
    <Link>
      <img src={path} alt={alt} className={classes.profileCircle} />
    </Link>
  )
}

export default ProfileCircle;