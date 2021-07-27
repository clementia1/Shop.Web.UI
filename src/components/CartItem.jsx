import React from 'react';
import { Typography, Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { observer } from 'mobx-react-lite';
import { useCartStore } from '../stores/cartStore';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        padding: 16,
    },
    typography: {
        padding: theme.spacing(2),
    },
    img: {
        width: 'auto',
        height: 90,
    },
    flexItem: {
        padding: 12,
    }
}));

function CartItem(props) {
    const classes = useStyles();
    const cartStore = useCartStore();

    return (
        <div className={classes.root}>
            <img className={`${classes.img} ${classes.flexItem}`} src={props.product.previewImageUrl} />
            <Typography className={classes.flexItem}>{props.product.name}</Typography>
            <Typography className={classes.flexItem}>{props.product.amount} pcs</Typography>
            <Typography className={classes.flexItem}>{cartStore.calcProductPrice(props.product.name)} UAH</Typography>
            <IconButton onClick={() => cartStore.removeProduct(props.product.id)} aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </div>
    );
}

export default observer(CartItem);