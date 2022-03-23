import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const Blog = ({blog}) => {

    const {image1, date, title, info, _id} = blog;
    
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
                    {date}
                </Typography>
                <Typography sx={{fontSize: "1.3rem", py: 2, fontWeight: 600}}>
                    {title}
                </Typography>
                <Typography sx={{fontSize: "16px", }}>
                    {info}
                </Typography>
            </CardContent>
            <CardActions sx={{mb: 1}}>
                <Link style={{textDecoration: "none"}} 
                    to={`/blogs/${_id}`}
                    >
                    <Box sx={{display: "flex", fontSize: "25px", textAlign: "center", ml: 1}}>
                        <Typography sx={{color: '#5e35b1', fontWeight: 600, textTransform: 'capitalize',}}>
                            Read More
                        </Typography>
                        <Typography sx={{color: '#5e35b1', fontWeight: 600, ml: 1}}>
                            <ArrowRightAltIcon/>
                        </Typography>
                    </Box> 
                </Link> 
            </CardActions>
        </Card>
    );
};

export default Blog;