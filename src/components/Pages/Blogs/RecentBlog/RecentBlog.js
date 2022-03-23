import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import "./RecentBlog.css"


const RecentBlog = ({recentBlog}) => {

    const {img, date, title,} = recentBlog;

    return (
        <>
        <Box className="recentBlog" sx={{display: 'flex', alignItems: {sm: "center"}, mb: 4}}>
            <Box>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    image={img}
                    sx={{borderRadius: 1, width: "80px", height: "70px"}}
                />
            </Box>
            <Box className="recent-date" sx={{ml: 2}}>
                <Typography sx={{fontSize: "16px", mb: .5, color: "text.secondary"}}>
                    {date}
                </Typography>
                <Typography sx={{fontSize: "16px", fontWeight: 600}}>
                    {title?.slice(0,50) || ""}...
                </Typography>
            </Box>
        </Box>
        </>
    );
};

export default RecentBlog;