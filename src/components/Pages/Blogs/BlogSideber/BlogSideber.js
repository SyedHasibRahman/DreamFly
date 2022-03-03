import { Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RecentBlog from '../RecentBlog/RecentBlog';
import "./BlogSideber.css"

const BlogSideber = () => {

    const [recentBlogs, setRecentBlogs] = useState([]);

    useEffect(() => {
        // fetch('https://salty-beach-45243.herokuapp.com/blogs')
        fetch('https://salty-beach-45243.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setRecentBlogs(data))
    }, [])

    return (
        <>
            {/* Blog searchber  */ }

            <Grid item xs={ 12 } sx={ { bgcolor: "white", pt: 3, pb: 1, px: 3, borderRadius: 2, boxShadow: 1 } }>
                <Box sx={ { pb: 2 } }>
                    <Typography sx={ { fontWeight: 600, fontSize: "20px", mb: 2 } }>
                        Search
                    </Typography>
                    <Paper
                        component="form"
                        sx={ { p: '2px 4px', border: '1px solid #512da8', display: 'flex', alignItems: 'center', } }
                    >
                        <InputBase
                            sx={ { ml: 1, flex: 1 } }
                            placeholder="Search"
                            inputProps={ { 'aria-label': 'search' } }
                        />
                        <IconButton type="submit" sx={ { color: '#512da8' } } aria-label="search">
                            <SearchIcon sx={ { color: '#512da8' } } />
                        </IconButton>
                    </Paper>
                </Box>
            </Grid>

            {/* Blog recent Post  */ }

            <Grid item xs={ 12 } sx={ { bgcolor: "white", pt: 3, pb: 1, px: 3, mt: 4, borderRadius: 2, boxShadow: 1 } }>
                <Typography sx={ { fontWeight: 600, fontSize: "20px", mb: 2 } }>
                    Recent Posts
                </Typography>
                { recentBlogs.slice(0, 4).map((recentBlog) => (
                    <Grid key={ recentBlog.id } item xs={ 12 } sx={ {} }>
                        <RecentBlog
                            gridColumn="span 8"
                            key={ recentBlog._id }
                            recentBlog={ recentBlog }>
                        </RecentBlog>
                    </Grid>
                )) }
            </Grid>

            {/* Blog Category  */ }

            <Grid item xs={ 12 } sx={ { bgcolor: "white", p: 3, mt: 4, borderRadius: 2, boxShadow: 1 } }>
                <Typography sx={ { fontWeight: 600, fontSize: "20px", mb: 2 } }>
                    Categories
                </Typography>
                <Box sx={ { display: 'flex', justifyContent: "space-between" } }>
                    <Typography sx={ { fontWeight: 500, fontSize: "18px" } }>
                        Business Analysis
                    </Typography>
                    <Typography sx={ { fontWeight: 500, fontSize: "18px" } }>
                        (4)
                    </Typography>
                </Box>
                <Divider sx={ { my: 2 } } />
                <Box sx={ { display: 'flex', justifyContent: "space-between" } }>
                    <Typography sx={ { fontWeight: 500, fontSize: "18px", } }>
                        Business Strategy
                    </Typography>
                    <Typography sx={ { fontWeight: 500, fontSize: "18px" } }>
                        (5)
                    </Typography>
                </Box>
                <Divider sx={ { my: 2 } } />
                <Box sx={ { display: 'flex', justifyContent: "space-between" } }>
                    <Typography sx={ { fontWeight: 500, fontSize: "18px", } }>
                        Stock Investment
                    </Typography>
                    <Typography sx={ { fontWeight: 500, fontSize: "18px", } }>
                        (1)
                    </Typography>
                </Box>
                <Divider sx={ { my: 2 } } />
                <Box sx={ { display: 'flex', justifyContent: "space-between" } }>
                    <Typography sx={ { fontWeight: 500, fontSize: "18px", } }>
                        Business Strategy
                    </Typography>
                    <Typography sx={ { fontWeight: 500, fontSize: "18px", } }>
                        (5)
                    </Typography>
                </Box>
                <Divider sx={ { my: 2 } } />
                <Box sx={ { display: 'flex', justifyContent: "space-between" } }>
                    <Typography sx={ { fontWeight: 500, fontSize: "18px", } }>
                        Stock Investment
                    </Typography>
                    <Typography sx={ { fontWeight: 500, fontSize: "18px", } }>
                        (1)
                    </Typography>
                </Box>
            </Grid>

            {/* Blog Tags  */ }

            <Grid item xs={ 12 } sx={ { bgcolor: "white", position: "absulate", p: 3, mt: 4, borderRadius: 2, boxShadow: 1 } }>
                <Box sx={ { bgcolor: "#512da8", position: "relative", right: 0, width: "4px", height: "20px" } } />
                <Typography sx={ { fontWeight: 600, fontSize: "20px", mb: 2 } }>
                    Tags
                </Typography>
                <Box sx={ { display: 'flex', gap: 1, flexWrap: 'wrap' } }>
                    <button className="tag-btn">Airport</button>
                    <button className="tag-btn">Private Jet</button>
                    <button className="tag-btn"> Helicopter</button>
                    <button className="tag-btn">Gallery</button>
                    <button className="tag-btn">Corporate</button>
                    <button className="tag-btn">Business</button>
                </Box>
            </Grid>
        </>
    );
};

export default BlogSideber;