import React from "react";
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    productPage: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
}));

function IndexPage() {
    const classes = useStyles();

    return (
        <div className={classes.productPage}>
        </div>
    );
}

export default IndexPage;