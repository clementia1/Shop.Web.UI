import React, {useEffect, useState} from "react";
import axios from "axios";
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ProductCard from "../components/ProductCard";

const useStyles = makeStyles((theme) => ({
    catalogue: {
        flexGrow: 1,
        maxWidth: '80vw',
        margin: 'auto',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

function Catalogue() {
    const classes = useStyles();
    const [products, setProducts] = useState([]);

    useEffect(async() => {
        const response = await axios.get('http://168.62.49.228/pizza/getbypage?pageNumber=1&itemsonpage=10');
        setProducts(response.data.pizza);
    }, []);

    return (
        <div className={classes.catalogue}>
            <Grid container spacing={3}>
                {products.map(item => {
                    return (
                        <Grid item xl={3} lg={4} md={4} sm={6} xs={12}>
                            <ProductCard data={item}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}

export default Catalogue;