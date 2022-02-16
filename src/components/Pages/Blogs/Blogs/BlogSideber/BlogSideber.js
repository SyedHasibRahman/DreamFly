import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RecentBlog from '../../RecentBlog/RecentBlog';


const BlogSideber = () => {

    const [recentBlogs, setRecentBlogs] = useState([]);

    useEffect( () => {
        fetch('./blogs.json')
        .then(res => res.json())
        .then(data => setRecentBlogs(data))
    }, [])

    return (
        <Grid container>
            <Grid item xs={12} sx={{bgcolor: "white", borderRadius: 2, boxShadow: 1, mb: 5}}>
                <Box sx={{ my: 4, mx: 3}}>
                    <Typography sx={{fontWeight: 600, fontSize: "18px", mb: 2 }}>
                        Search
                    </Typography>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', border: '1px solid #512da8', display: 'flex', alignItems: 'center', }}
                        >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <IconButton type="submit" sx={{ color: '#512da8' }} aria-label="search">
                            <SearchIcon sx={{color: '#512da8'}} />
                        </IconButton>
                    </Paper>
                </Box>
            </Grid>

            <Grid item xs={12} sx={{bgcolor: "white",  py: 4, px: 3, borderRadius: 2, boxShadow: 1}}>
                <Typography sx={{fontWeight: 600, fontSize: "18px", mb: 2 }}>
                    Recent Posts
                </Typography>
                    {recentBlogs.map((recentBlog) => (
                        <Grid item xs={12} sx={{}}>
                            <RecentBlog 
                                gridColumn="span 8" 
                                key={recentBlog.id} 
                                recentBlog={recentBlog}>
                            </RecentBlog>
                        </Grid>
                    ))} 
            </Grid>
        </Grid>
    );
};

export default BlogSideber;