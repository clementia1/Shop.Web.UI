import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SvgIcon, IconButton, Badge } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import CartIcon from '../assets/icons/shopping-cart.svg';
import { useCartStore } from '../stores/cartStore';

const useStyles = makeStyles((theme) => ({
    cart: {
        padding: 12,
        marginRight: 48,
        color: 'rgba(0, 0, 0, 0.67)'
    },
    icon: {
        fontSize: '2rem',
    }
}));

function CartButton() {
    const classes = useStyles();
    const cartStore = useCartStore();

	return (
        <IconButton className={classes.cart} aria-label="login">
            <Badge badgeContent={cartStore.productsCount} color="secondary">
                <SvgIcon
                    className={classes.icon}
                    component={CartIcon}
                    viewBox="0.00026595592498779297 0 511.9991149902344 512"
                />
            </Badge>
        </IconButton>
    )
}

export default observer(CartButton);