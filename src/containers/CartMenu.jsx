import React, { useState, useEffect } from 'react';
import { useAuth } from 'oidc-react';
import { observer } from 'mobx-react-lite';
import CartButton from '../components/CartButton';
import CartPopper from './CartPopper';
import { useCartStore } from '../stores/cartStore';

function CartMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const cartStore = useCartStore();
    const auth = useAuth();

    useEffect(async () => {
        let user = await auth.userManager.getUser();
        cartStore.fetchProducts(user.profile.sub)
    }, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(prev => !prev);
    };

    return (
        <>
            <CartButton handleClick={handleClick} productsCount={cartStore.productsCount}/>
            <CartPopper open={open} anchorEl={anchorEl} products={cartStore.products}/>
        </>
    )
}

export default observer(CartMenu);