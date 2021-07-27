import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Popper, Fade, Paper } from '@material-ui/core';
import CartItem from '../components/CartItem';

const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));
  
function CartPopper({ open, anchorEl, products }) {
    const classes = useStyles();

    return (
      <div>
        <Popper open={open} anchorEl={anchorEl} placement={'bottom'} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                {products.map((item, i) => {
                    return (
                        <CartItem product={item} key={i}/>
                    )
                })}                
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    );
  }

export default CartPopper;