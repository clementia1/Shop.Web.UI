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
        flexDirection: 'row',
        [theme.breakpoints.up('md')]: {
            maxWidth: '80vw'
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: '100vw'
        },
    },
    imageContainer: {
        maxWidth: 600,
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
            marginLeft: 0
        },
    }
}));

function ProductPage() {
    const params = useParams();
    const { product, getProductBySlug } = useProductStore();
    const classes = useStyles();

    useEffect(() => {
        getProductBySlug(params.slug);
    }, []);

    return (
        <div className={classes.productPage}>
            <div className={classes.imageContainer}>
                <img className={classes.mainImage} src={product.imageUrl} alt={product.name}/>

            </div>
            <div className={classes.content}>
                <Typography>{product.name}</Typography>
                <Typography>{product.price}</Typography>
                <Typography>{product.weight}</Typography>
                <div className={classes.ingredients}>
                    {
                        product.ingredients?.map((item, i) => {
                            return <IngredientCard key={i} data={item}/>
                        })
                    }
                </div>
                <Button variant="contained" color="secondary">
                    Buy
                </Button>
            </div>
        </div>
    );
}

export default observer(ProductPage);