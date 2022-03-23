import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';


const RecentBlog = ({recentBlog}) => {

    const {image1, date, title,} = recentBlog;

    return (
        <>
        <Box sx={{display: 'flex', alignItems: "center", mb: 4}}>
            <Box>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    image={image1}
                    sx={{borderRadius: 1, width: "80px", height: "70px"}}
                />
            </Box>
            <Box sx={{ml: 2}}>
                <Typography sx={{fontSize: "16px", mb: .5, color: "text.secondary"}}>
                    {date}
                </Typography>
                <Typography sx={{fontSize: "16px", fontWeight: 600}}>
                    {title || ""}
                </Typography>
            </Box>
        </Box>
        </>
    );
};

export default RecentBlog;