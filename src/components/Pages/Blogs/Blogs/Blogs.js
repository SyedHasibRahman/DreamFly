import React, { useEffect, useState } from 'react';
import { Box, Grid, Container, Typography, } from '@mui/material';
import Blog from '../Blog/Blog';
import BlogSideber from '../BlogSideber/BlogSideber';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../../Shared/Footer/Footer';
import "./Blog.css";


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [searchblogs, setSearchBlogs] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 4;

    useEffect(() => {
        fetch(`http://localhost:5000/blogs?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data.blogs);
                setSearchBlogs(data.blogs);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(searchText.toLowerCase()));
        setSearchBlogs(matchedBlogs);
    }

    return (
        <>
            <Navigation></Navigation>

            <Box sx={{ py: 10, bgcolor: "#fafafa" }}>
                <Container>
                    <Box>
                        <Typography
                            variant="h2"
                            sx={{ pb: 8, textAlign: "center" }}
                        >
                            Welcome To Our Blogs
                        </Typography>
                    </Box>

                    <Box>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={8} sx={{}}>
                                <Grid container spacing={4} columns={12}>
                                    {searchblogs.map((blog) => (
                                        <Grid key={blog._id} item xs={12} md={6}>
                                            <Blog
                                                gridColumn="span 8"
                                                blog={blog}>
                                            </Blog>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={4} sx={{}}>
                                <BlogSideber handleSearch={handleSearch}></BlogSideber>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box sx={{ pt: 4, display: "flex" }}>
                        {
                            [...Array(pageCount).keys()]
                                .map(number =>
                                    <Typography
                                        sx={{ width: "35px", height: "35px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", bgcolor: '#5e35b1', color: "white" }}
                                        style={{ marginRight: '10px', borderRadius: "50%" }}
                                        className={number === page ? 'selected' : ''}
                                        key={number}
                                        onClick={() => setPage(number)}
                                    >{number + 1}
                                    </Typography>)
                        }
                    </Box>
                </Container>
            </Box>
            <Footer></Footer>
        </>
    );
};

export default Blogs;