import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Text from './Text';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  colorPickerBackground: {
    width: '85%',
    height: '4vh',
    borderRadius: '30px',
    backgroundColor: '#F0F0F0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    padding: '10px 10px',
    alignItems: 'center',
  },
  colorsAndMore: {
    display: 'flex',
    flexDirection: 'row',
    justifyCntent: 'space-between',
    alignItems: 'center'
  },
  color1: {
    width: '2.5vh',
    height: '2.5vh',
    backgroundColor: '#FA770D',
    borderRadius: '50%',
    marginRight: '5px',
  },
  color2: {
    width: '2.5vh',
    height: '2.5vh',
    borderRadius: '50%',
    marginRight: '5px',
    backgroundColor: '#DE120B',
  },
  color3: {
    width: '2.5vh',
    height: '2.5vh',
    borderRadius: '50%',
    marginRight: '5px',
    backgroundColor: '#F5015D',
  },
  color4: {
    width: '2.5vh',
    height: '2.5vh',
    borderRadius: '50%',
    marginRight: '5px',
    backgroundColor: '#DE0BC5',
  },
  color5: {
    width: '2.5vh',
    height: '2.5vh',
    borderRadius: '50%',
    marginRight: '10px',
    backgroundColor: '#C90DFA',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  }
}));


const ColorPicker = () => {
  const classes = useStyles();
  return (
    <div className={classes.colorPickerBackground}>
      <Text text="Cor:" />
      <div className={classes.colorsAndMore}>
        <Link>
          <div className={classes.color1} />
        </Link>
        <Link>
          <div className={classes.color2} />
        </Link>
        <Link>
          <div className={classes.color3} />
        </Link>
        <Link>
          <div className={classes.color4} />
        </Link>
        <Link>
          <div className={classes.color5} />
        </Link>
        <Link className={classes.link}>
          <Text text="Mais >" />
        </Link>
      </div>
    </div>
  )
}

export default ColorPicker