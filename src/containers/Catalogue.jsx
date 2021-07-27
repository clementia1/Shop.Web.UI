import React, {useEffect, useState} from "react";
import { observer } from "mobx-react-lite";
import { Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from "../components/ProductCard";
import { useCatalogueStore } from "../stores/catalogueStore.js";

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
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(6);
    const catalogueStore = useCatalogueStore();

    useEffect(() => {
        catalogueStore.getByPage(page, pageSize);
    }, [page, pageSize]);

    const handlePage = (event, value) => {
        setPage(value);
    };

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
            <Pagination count={catalogueStore.pagesCount} page={page} onChange={handlePage} />
        </div>
    );
}

export default observer(Catalogue);