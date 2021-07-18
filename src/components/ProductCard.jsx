import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        margin: 'auto',
        borderRadius: 9,
        boxShadow: 'rgb(99 99 99 / 20%) 0px 0.02em 0.1rem 0px',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    title: {
        fontSize: "1.1rem",
    },
    media: {
        height: 200
    }
});

function ProductCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={0}>
            <>
                <CardMedia
                    className={classes.media}
                    image={props.data.previewImageUrl}
                    title={props.data.name}/>
                <CardContent>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                        {props.data.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        ₴ {props.data.price}
                    </Typography>
                </CardContent>
            </>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;