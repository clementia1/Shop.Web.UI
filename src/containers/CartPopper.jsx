import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Popper, Typography, Grid, Button, Fade, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    typography: {
      padding: theme.spacing(2),
    },
  }));
  
function CartPopper({ open, anchorEl, products }) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Popper open={open} anchorEl={anchorEl} placement={'bottom'} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                {products.map(item => {
                    return <Typography className={classes.typography}>{item.product.name}</Typography>
                })}                
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    );
  }

export default CartPopper;