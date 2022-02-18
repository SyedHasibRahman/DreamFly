import React, { useEffect, useState } from 'react';
import { Box, Grid, Container, Typography, Stack, Pagination } from '@mui/material';
import Blog from '../Blog/Blog';
import BlogSideber from '../BlogSideber/BlogSideber';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../../Shared/Footer/Footer';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://vast-retreat-08893.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };


    return (
        <>
            <Navigation></Navigation>
        
        <Box sx={ { py: 10, bgcolor: "#fafafa" } }>
            <Container>
                <Box>
                    <Typography
                        variant="h3"
                        sx={ { pb: 8, fontWeight: 600, fontSize: "2.5rem", textAlign: "center" } }
                    >
                        Welcome To Our Blogs
                    </Typography>
                </Box>

                <Box>
                    <Grid container spacing={ 4 }>
                        <Grid item xs={ 12 } md={ 8 } sx={ {} }>
                            <Grid container spacing={ 4 } columns={ 12 }>
                                { blogs.map((blog) => (
                                    <Grid key={ blog.id } item xs={ 12 } md={ 6 } sx={ {} }>
                                        <Blog
                                            gridColumn="span 8"
                                            blog={ blog }>
                                        </Blog>
                                    </Grid>
                                )) }
                            </Grid>
                        </Grid>
                        <Grid item xs={ 12 } md={ 4 } sx={ {} }>
                            <Grid container>
                                <BlogSideber></BlogSideber>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={ { pt: 4 } }>
                    <Stack spacing={ 2 }>
                        <Pagination count={ 10 } page={ page } onChange={ handleChange } />
                    </Stack>
                </Box>
            </Container>
        </Box>
        <Footer></Footer>
        </>
    );
};

export default Blogs;