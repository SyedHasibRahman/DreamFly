import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Blog = ({blog}) => {
    const {image1, date, comment, title, info} = blog
    return (
        <Card sx={{}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image={image1}
                sx={{p: 2, borderRadius: 6}}
            />
            <CardContent>
                <Typography sx={{fontSize: "1rem", mt: "-10px", color: "text.secondary"}}>
                    {date}   <span>|</span>  {comment} Comment
                </Typography>
                <Typography sx={{fontSize: "1.3rem", py: 2, fontWeight: 600}}>
                    {title.slice(0,47)}
                </Typography>
                <Typography sx={{fontSize: "16px", }}>
                    {info.slice(0,100)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default Blog;