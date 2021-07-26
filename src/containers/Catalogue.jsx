import React, {useEffect, useState} from "react";
import { observer } from "mobx-react-lite";
import axios from "axios";
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ProductCard from "../components/ProductCard";
import { useCatalogueStore } from "../stores/catalogueStore.js";
import { PIZZA_API_URI } from "../config";

const useStyles = makeStyles((theme) => ({
    catalogue: {
        flexGrow: 1,
        maxWidth: '80vw',
        margin: 'auto',
        [theme.breakpoints.up('md')]: {
            marginLeft: 60
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: 'auto'
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

function Catalogue() {
    const classes = useStyles();
    const catalogueStore = useCatalogueStore();

    useEffect(async () => {
        const response = await axios.get(`${PIZZA_API_URI}/getbypage?page=1&size=10`);
        catalogueStore.setProducts(response.data.pizza);
    }, []);

    return (
        <div className={classes.catalogue}>
            <Grid container spacing={3}>
                {catalogueStore.products.map((item, i) => {
                    return (
                        <Grid key={i} item xl={4} lg={4} md={4} sm={6} xs={12}>
                            <ProductCard key={i} data={item}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}

export default observer(Catalogue);