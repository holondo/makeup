import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  background-color: #F0F0F0;

  .MuiCardContent-root {
    padding: 8px;
  }
`

const useStyles = makeStyles({
  root: {
    maxWidth: 165,
    borderRadius: '30px',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    margin: '2px 2px',
  },
  media: {
    height: 165,
    borderRadius: '30px',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  },
  brandName: {
    
  }
});

const ProductCard = () => {
  const classes = useStyles();

  return (
    <StyledCard className={classes.root}>
      
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/red-lipstick.PNG"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle2" color="textSecondary" component="p" align="center">
            Batom Matte
          </Typography>
          <Typography variant="subtitle1" component="h2" color="textPrimary" align="center">
            R$49,99
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}

export default ProductCard;