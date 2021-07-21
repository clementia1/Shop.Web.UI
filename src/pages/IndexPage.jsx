import React from "react";
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Catalogue from "../containers/Catalogue.jsx";
import Topbar from "../containers/Topbar.jsx";
import Sidebar from "../containers/Sidebar.jsx";

const useStyles = makeStyles((theme) => ({
    indexPage: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    pageContent: {
        display: 'flex',
    },
    catalogueContainer: {
        [theme.breakpoints.down('md')]: {
            margin: 'auto'
        }, 
    }
}));

function IndexPage() {
    const classes = useStyles();    

    return (
        <div className={classes.indexPage}>
            <div className={classes.navbar}>
                <Topbar/>
            </div>
            <Grid container className={classes.pageContent}>
                <Grid item xl={3} lg={3} sm={3}>
                    <Sidebar/>
                </Grid>
                <Grid className={classes.catalogueContainer} item xl={8} lg={8} sm={12}>
                    <Catalogue/>
                </Grid>
            </Grid>
        </div>
    );
}

export default IndexPage;