import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const RecentBlog = ({recentBlog}) => {

    const {image1, date, title,} = recentBlog;

    return (
        <Box sx={{display: 'flex',}}>
            <Box>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    image={image1}
                    sx={{borderRadius: 2}}
                />
            </Box>
            <Box >
                <Typography sx={{fontSize: "16px", color: "text.secondary"}}>
                    {date}
                </Typography>
                <Typography sx={{fontSize: "16px", fontWeight: 600}}>
                    {title.slice(0,47)}
                </Typography>
            </Box>
        </Box>
    );
};

export default RecentBlog;