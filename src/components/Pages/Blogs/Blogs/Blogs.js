import React, { useEffect, useState } from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import Blog from '../Blog/Blog';
import BlogSideber from '../BlogSideber/BlogSideber';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../../Shared/Footer/Footer';
import { Button } from 'react-bootstrap';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 4;

    useEffect(() => {
        fetch(`https://agile-lowlands-71900.herokuapp.com/blogs?page=${page}&&size=${size}`)
            // fetch(`http://localhost:5000/blogs?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data.blogs);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);

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

                    <Box sx={ { pt: 4, display: "flex" } }>
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <Button style={ { marginRight: '10px', borderRadius: "50%", } }
                                    className={ number === page ? 'selected' : '' }
                                    key={ number }
                                    onClick={ () => setPage(number) }
                                >{ number + 1 }</Button>)
                        }
                    </Box>
                </Container>
            </Box>
            <Footer></Footer>
        </>
    );
};

export default Blogs;