import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

export default function AddProduct() {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState();
  const [imageUrl, setimageUrl] = React.useState('');

  const dispatch = useDispatch();
  const classes = useStyles();

  const product = {
    id: Math.floor(Math.random() * (100 - 10)) + 10,
    name,
    description,
    price,
    imageUrl,
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch({
      type: 'ADD_PRODUCT',
      product,
    });
  };

  return (
    <div className={classes.root}>
      <Typography>ADICIONAR PRODUTO</Typography>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <div className={classes.fields}>
          <TextField
            required
            id='product-name'
            label='Name'
            value={name}
            onChange={event => setName(event.target.value)}
            className={classes.field}
          />
          <TextField
            required
            id='product-description'
            label='Description'
            value={description}
            onChange={event => setDescription(event.target.value)}
            className={classes.field}
          />
          <TextField
            required
            id='product-price'
            label='Price'
            placeholder='ex: 9.99'
            value={price}
            onChange={event => setPrice(event.target.value)}
            className={classes.field}
          />
          <TextField
            required
            id='image-url'
            label='Image Url'
            value={imageUrl}
            onChange={event => setimageUrl(event.target.value)}
            className={classes.field}
          />
          <Button type='submit' onClick={handleSubmit}>
            Criar Produto
          </Button>
        </div>
      </form>
    </div>
  );
}
