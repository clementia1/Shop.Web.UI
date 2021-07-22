import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from 'react-router-dom';
import { Grid, Button, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useProductStore } from "../stores/productStore";
import IngredientCard from "../components/IngredientCard";

const useStyles = makeStyles((theme) => ({
    productPage: {
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        [theme.breakpoints.up('sm')]: {
            maxWidth: '80vw',
            flexDirection: 'row',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100vw',
            flexDirection: 'column',
        },
    },
    imageContainer: {
        [theme.breakpoints.up('md')]: {
            maxWidth: 600,
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
        [theme.breakpoints.up('md')]: {
            marginLeft: 80
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: 40
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
    }
}));

function ProductPage() {
    const params = useParams();
    const { product, getProductBySlug, resetProduct } = useProductStore();
    const classes = useStyles();

    useEffect(() => {
        getProductBySlug(params.slug);

        return () => resetProduct();
    }, []);

    return (
        <div className={classes.productPage}>
            <div className={classes.imageContainer}>
                <img className={classes.mainImage} src={product.imageUrl} alt={product.name}/>

            </div>
            <div className={classes.content}>
                <div className={classes.headlines}>
                    <Typography variant="h3">{product.name}</Typography>
                    <Typography className={classes.price} variant="h4">{product.price} UAH</Typography>
                    <Typography className={classes.weight} variant="h5">{product.weight}g</Typography>
                </div>
                <Grid container spacing={3} className={classes.ingredients}>
                    {
                        product.ingredients?.map((item, i) => {
                            return (
                                <Grid key={i} item xs={3}>
                                    <IngredientCard data={item}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <Button variant="contained" color="secondary">
                    Buy
                </Button>
            </div>
        </div>
    );
}

export default observer(ProductPage);