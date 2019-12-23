import React from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import { useStyles } from './styles';

export default function Footer() {
  const classes = useStyles();

  return (
    <Paper square className={classes.root}>
      <div className={classes.social}>
        <Button>
          <InstagramIcon
            variant='outlined'
            size='large'
            style={{ color: 'white' }}
            className={classes.margin}
          />
        </Button>
        <Button size='large'>
          <FacebookIcon style={{ color: 'white' }} className={classes.margin} />
        </Button>
        <Button>
          <TwitterIcon
            variant='outlined'
            size='large'
            style={{ color: 'white' }}
            className={classes.margin}
          />
        </Button>
      </div>
      <div className={classes.info}>
        <div className={classes.contact} />
        <div className={classes.marketing} />
      </div>
    </Paper>
  );
}
