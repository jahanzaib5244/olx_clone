import React from 'react';
import './home.css';
import img2 from '../../assets/bgimage2.png';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { useProducts } from './Usehome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';






const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));



export default function Home() {


    const [Products] = useProducts();

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };





    return (
        <div>
            <div> <button >Sell</button></div>

            <div> <img className='bgimg1' src="https://i2.wp.com/www.yugatech.com/wp-content/uploads/2014/03/sulit-olx.jpg?w=720" alt="logo" /></div>


            <h1>Recent Posts......</h1>
            <div>

                {
                    Products.map((item, index) => {
                        return (
                            <Card id='product' className={classes.root}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            R
                                        </Avatar>
                                    }


                                    title={item.title}
                                    subheader={item.price}
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={item.pic}
                                    title={item.title}
                                />
                                <CardContent >
                                    <PerfectScrollbar id='discription'>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.description}
                                    </Typography>
                                    </PerfectScrollbar>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>

                                </CardActions>

                            </Card>
                        );
                    })
                }

            </div>

            <div> <img src={img2} alt="bgimg2" /></div>
        </div>
    )
}
