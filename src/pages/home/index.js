import React from 'react';
import { useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

export default function Home() {
  const classes = useStyles();
  const products = useSelector(state => state.products);

  return (
    <>
      <Paper className={classes.paper}>
        <Typography className={classes.title}>Destaques</Typography>
      </Paper>
      <div className={classes.root}>
        <div className={classes.products}>
          {products.map(product => (
            <div key={product.id}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={product.image_url}
                    title={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {product.name}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      {product.description}
                    </Typography>
                    <Typography
                      variant='body3'
                      color='textSecondary'
                      component='strong'
                    >
                      R${product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    Comprar
                  </Button>
                  <Button size='small' color='primary'>
                    Adicionar ao carrinho
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
