import React from 'react';
import { useAuth } from 'oidc-react';
import { makeStyles } from '@material-ui/core/styles';
import { SvgIcon, IconButton, Badge } from '@material-ui/core';
import CartIcon from '../assets/icons/shopping-cart.svg';

const useStyles = makeStyles((theme) => ({
    cart: {
        padding: 12,
        marginRight: 24,
        color: 'rgba(0, 0, 0, 0.67)'
    },
    icon: {
        fontSize: '2rem',
    }
}));

function CartButton() {
    const classes = useStyles();
	const { signIn } = useAuth();

	return (
        <IconButton className={classes.cart} aria-label="login" onClick={() => signIn()}>
            <Badge badgeContent={17} color="secondary">
                <SvgIcon
                    className={classes.icon}
                    component={CartIcon}
                    viewBox="0.00026595592498779297 0 511.9991149902344 512"
                />
            </Badge>
        </IconButton>
    )
}

export default CartButton;