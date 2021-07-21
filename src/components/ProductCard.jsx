import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Link,
    Avatar
} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        margin: 'auto',
        borderRadius: 9,
        marginBottom: 32,
        boxShadow: 'rgb(99 99 99 / 20%) 0px 0.02em 0.1rem 0px',
        '&:hover': {
            cursor: 'pointer',
            boxShadow: 'rgb(99 99 99 / 20%) 0px 0.04em 0.5rem 0px',
        }
    },
    title: {
        fontSize: "1.1rem",
    },
    media: {
        height: 200
    },
    ingredients: {
        paddingTop: 16,
    }
});

function ProductCard(props) {
    const classes = useStyles();

    return (
        <Link component={RouterLink} underline="none" to={`${props.data.slug}`}>
            <Card className={classes.root} elevation={0}>
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
                    <AvatarGroup max={4} className={classes.ingredients}>
                        {props.data.ingredients.map((ingredient, i) => {
                            return <Avatar key={i} alt={ingredient.name} src={ingredient.imageUrl} />
                        })}
                    </AvatarGroup>
                </CardContent>
            </Card>
        </Link>
    );
}

export default ProductCard;