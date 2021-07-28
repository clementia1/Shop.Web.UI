import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from 'react-router-dom';
import { useAuth } from "oidc-react";
import { Grid, Button, Typography, CircularProgress } from '@material-ui/core';
import { Skeleton } from "@material-ui/lab";
import { makeStyles } from '@material-ui/core/styles';
import { useProductStore } from "../stores/productStore";
import { useCartStore } from "../stores/cartStore";
import IngredientCard from "../components/IngredientCard";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const useStyles = makeStyles((theme) => ({
    productPage: {
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        marginBottom: '20vh',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'row',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    imageContainer: {
        [theme.breakpoints.up('lg')]: {
            maxWidth: 600,
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: 550,
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: 500,
        },
    },
    mainImage: {
        width: "100%",
        borderRadius: 9,
    },
    content: {
        [theme.breakpoints.up('lg')]: {
            maxWidth: 600,
            marginLeft: 80
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: 550,
            marginLeft: 80
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: 500,
            marginLeft: 0
        },
    },
    ingredients: {
        display: 'flex',
        maxWidth: 570,
        margin: '32px 0px',
    },
    price: {
        margin: '18px 0px',
        color: 'rgba(0, 0, 0, 0.5)',
    },
    weight: {
        color: 'rgba(0, 0, 0, 0.5)',
    },
    headlines: {
        margin: '0px 24px',
    },
    buy: {
        margin: '32px 0px 48px 0px',
        width: 200,
        height: 48,
    },
    icon: {
        width: 22,
        height: 22,
        marginRight: 8,
    }
}));

function ProductPage() {
    const params = useParams();
    const auth = useAuth();
    const { product, getProductBySlug, resetProduct } = useProductStore();
    const cartStore = useCartStore();
    const classes = useStyles();

    useEffect(() => {
        getProductBySlug(params.slug);

        return () => resetProduct();
    }, []);

    return (
        <Grid container className={classes.productPage}>
            <Grid item xl={6} lg={6} md={6} sm={6} className={classes.imageContainer}>
                {product.imageUrl
                    ? <img className={classes.mainImage} src={product.imageUrl} alt={product.name}/>
                    : <Skeleton variant="rect" className={classes.imageContainer} height={400} />
                }
            </Grid>
            <Grid item container xl={6} lg={6} md={6} sm={6} className={classes.content}>
                <div className={classes.headlines}>
                    <Typography component="div" variant="h3">
                        {product.name ? product.name : <Skeleton width={300}/>}
                    </Typography>
                    <Typography className={classes.price} component="div" variant="h4">
                        {product.price ? `${product.price} UAH` : <Skeleton width={300}/>}
                    </Typography>
                    <Typography className={classes.weight} component="div" variant="h4">
                        {product.weight ? `${product.weight}g` : <Skeleton width={300}/>}
                    </Typography>
                    {product.name
                        ? (
                            <Button 
                                className={classes.buy}
                                disabled={cartStore.loadingState}
                                size="large"
                                variant="contained"
                                color="secondary"
                                onClick={() => cartStore.addProduct(product, auth.userData?.profile?.sub)}
                            >
                                {cartStore.loadingState ? <CircularProgress size={26} className={classes.icon}/> : <ShoppingCartOutlinedIcon className={classes.icon}/>}
                                Buy
                            </Button>
                        )
                        : <Skeleton variant="rect" className={classes.buy}/>
                    }

                </div>
                <Grid container spacing={3} className={classes.ingredients}>
                    {
                        product.ingredients?.map((item, i) => {
                            return (
                                <Grid key={i} item xs={4} md={4} lg={3}>
                                    <IngredientCard data={item}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}

export default observer(ProductPage);