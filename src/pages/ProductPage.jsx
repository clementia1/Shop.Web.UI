import React, { useState, useEffect } from "react";
import axios from 'axios';
import { observer } from "mobx-react-lite";
import { useParams } from 'react-router-dom';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useCatalogueStore } from "../stores/catalogueStore.js";

const useStyles = makeStyles((theme) => ({
    productPage: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    mainImage: {

    },
    productDescription: {

    }
}));

function ProductPage() {
    const params = useParams();
    const { getProductBySlug } = useCatalogueStore();
    const [product, setProduct] = useState({});
    const classes = useStyles();

    useEffect(() => {
        let item = getProductBySlug(params.slug);
        console.log(item)
    }, []);

    return (
        <div className={classes.productPage}>
            <div className={classes.mainImage}>

            </div>
            <div className={classes.productDescription}>
                {product.Name}
            </div>
        </div>
    );
}

export default observer(ProductPage);