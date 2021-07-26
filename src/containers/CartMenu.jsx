import React, { useState } from 'react';
import CartButton from '../components/CartButton';
import CartPopper from './CartPopper';
import { useCartStore } from '../stores/cartStore';

function CartMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const cartStore = useCartStore();

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

export default CartMenu;