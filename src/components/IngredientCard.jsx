import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Card,
    CardMedia,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 135,
        margin: 0,
        borderRadius: 9,
        "&.MuiPaper-root": {
            backgroundColor: 'inherit',
        }
    },
    title: {
        fontSize: "0.8rem",
        textAlign: 'center',
        marginTop: 12,
        fontWeight: 600,
    },
    media: {
        height: 60,
        width: 60,
        margin: 'auto',
    },
    ingredients: {
        paddingTop: 16,
    }
});

function IngredientCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={0}>
            <CardMedia
                className={classes.media}
                image={props.data.imageUrl}
                title={props.data.name}/>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                {props.data.name}
            </Typography>
        </Card>
    );
}

export default IngredientCard;