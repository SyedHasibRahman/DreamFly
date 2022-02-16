import React, { useEffect, useState } from 'react';
import {Box, Grid, Container, Typography} from '@mui/material';
import Blog from '../Blog/Blog';
import BlogSideber from './BlogSideber/BlogSideber';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('./blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])


    return (
        <Box sx={{py: 10, bgcolor: "#f5f5f5"}}>
            <Container>
                <Box>
                    <Typography
                        variant="h3"
                        sx={{ pb: 8, fontWeight: 600, fontSize: "2.5rem", textAlign: "center" }}
                        >
                        Welcome To Our Blogs
                    </Typography>
                </Box>
                <Box>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8} sx={{}}>
                            <Grid container columns={12}>
                                {blogs.map((blog) => (
                                    <Grid item xs={12} md={6} sx={{}}>
                                        <Blog 
                                            gridColumn="span 8" 
                                            key={blog.id} 
                                            blog={blog}>
                                        </Blog>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{}}>
                            <BlogSideber></BlogSideber>
                        </Grid>
                    </Grid>        
                </Box>
            </Container>
        </Box>
    );
};

export default Blogs;