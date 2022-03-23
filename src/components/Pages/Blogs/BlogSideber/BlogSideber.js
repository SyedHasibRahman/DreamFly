import { Box, Divider, Grid, Button, InputBase, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecentBlog from '../RecentBlog/RecentBlog';
import "./BlogSideber.css"

const BlogSideber = ({ handleSearch }) => {

    const [recentBlogs, setRecentBlogs] = useState([]);
    useEffect(() => {
        
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setRecentBlogs(data.blogs.reverse()))
    }, []);

    return (
        <Grid container>
            {/* Blog searchber start */}
            <Grid item xs={12}
                sx={{ bgcolor: "white", pt: 3, pb: 1, px: 3, borderRadius: 2, boxShadow: 1 }}
            >
                <Box sx={{ pb: 2 }}>
                    <Typography sx={{ fontWeight: 600, fontSize: "20px", mb: 2 }}>
                        Search
                    </Typography>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', border: '1px solid #512da8', display: 'flex', alignItems: 'center', }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            type="text"
                            onChange={handleSearch}
                            placeholder="Search"
                        />
                        <Link to="/Blogs" style={{ textDecoration: "none" }}>
                            <Button>
                                <i style={{ color: '#512da8' }} className="fa-solid fa-magnifying-glass"></i>
                            </Button>
                        </Link>
                    </Paper>
                </Box>
            </Grid>
            {/* Blog searchber end */}

            {/* Blog recent Post start */}
            <Grid item xs={12}
                sx={{ bgcolor: "white", pt: 3, pb: 1, px: 3, mt: 4, borderRadius: 2, boxShadow: 1 }}
            >
                <Typography sx={{ fontWeight: 600, fontSize: "20px", mb: 2 }}>
                    Recent Posts
                </Typography>
                {
                    recentBlogs.slice(0, 5).map((recentBlog) => (
                        <RecentBlog
                            key={recentBlog._id}
                            recentBlog={recentBlog}>
                        </RecentBlog>
                    ))
                }
            </Grid>
            {/* Blog recent Post end */}

            {/* Blog Category start */}
            <Grid item xs={12}
                sx={{ bgcolor: "white", p: 3, mt: 4, borderRadius: 2, boxShadow: 1 }}
            >
                <Typography sx={{ fontWeight: 600, fontSize: "20px", mb: 2 }}>
                    Categories
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                        Business Analysis
                    </Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                        (4)
                    </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Typography sx={{ fontWeight: 500, fontSize: "18px", }}>
                        Business Strategy
                    </Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                        (5)
                    </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Typography sx={{ fontWeight: 500, fontSize: "18px", }}>
                        Stock Investment
                    </Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "18px", }}>
                        (1)
                    </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Typography sx={{ fontWeight: 500, fontSize: "18px", }}>
                        Business Strategy
                    </Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "18px", }}>
                        (5)
                    </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Typography sx={{ fontWeight: 500, fontSize: "18px", }}>
                        Stock Investment
                    </Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: "18px", }}>
                        (1)
                    </Typography>
                </Box>
            </Grid>
            {/* Blog Category end */}

            {/* Blog Tags start */}
            <Grid item xs={12}
                sx={{ bgcolor: "white", position: "absulate", p: 3, mt: 4, borderRadius: 2, boxShadow: 1 }}
            >
                <Typography sx={{ fontWeight: 600, fontSize: "20px", mb: 2 }}>
                    Tags
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <button className="tag-btn">Airport</button>
                    <button className="tag-btn">Private Jet</button>
                    <button className="tag-btn"> Helicopter</button>
                    <button className="tag-btn">Gallery</button>
                    <button className="tag-btn">Corporate</button>
                    <button className="tag-btn">Business</button>
                </Box>
            </Grid>
            {/* Blog Tags end */}
        </Grid>
    );
};

export default BlogSideber;