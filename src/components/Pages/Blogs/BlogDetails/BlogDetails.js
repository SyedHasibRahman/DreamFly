import { CardMedia, Container, Grid, Typography, } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogSideber from '../BlogSideber/BlogSideber';
import BlogPagination from '../BlogPagination/BlogPagination';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../../Shared/Footer/Footer';


const BlogDetails = () => {

    const { blogId } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const url = `https://vast-retreat-08893.herokuapp.com/blogs/${blogId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [blogId]);

    return (
        <>
            <Navigation></Navigation>
            <Box sx={ { py: 10, bgcolor: "#fafafa" } }>
                <Container>
                    <Grid container spacing={ 4 }>
                        <Grid item xs={ 12 } md={ 8 }>
                            <Box sx={ { borderRadius: 1, } }>
                                <CardMedia
                                    component="img"
                                    alt=""
                                    image={ blog.images3 }
                                    sx={ { borderRadius: 2, width: "100%", height: "350px" } }
                                />
                            </Box>
                            <Typography sx={ { fontSize: '24px', fontWeight: 600, mt: 5 } }>
                                { blog.fullTitle }
                            </Typography>
                            <Typography sx={ { fontSize: '18px', mt: 3 } }>
                                { blog.info }
                            </Typography>
                            <Grid container spacing={ 4 } sx={ { mb: 6, mt: 1 } }>
                                <Grid item xs={ 12 } sm={ 6 }>
                                    <CardMedia
                                        component="img"
                                        alt=""
                                        image={ blog.images3 }
                                        sx={ { borderRadius: 2, width: "100%", height: "230px" } }
                                    />
                                </Grid>
                                <Grid item xs={ 12 } sm={ 6 }>
                                    <CardMedia
                                        component="img"
                                        alt=""
                                        image={ blog.images3 }
                                        sx={ { borderRadius: 2, width: "100%", height: "230px" } }
                                    />
                                </Grid>
                            </Grid>
                            <Box sx={ { bgcolor: "#F8F1E7", borderRadius: 2, p: 8 } }>
                                <Typography sx={ { fontSize: '20px', fontWeight: 600, lineHeight: .2 } }>
                                    "
                                </Typography>
                                <Typography sx={ { fontSize: '20px', fontWeight: 600, ml: 2, mt: -2 } }>
                                    { blog.quote } "
                                </Typography>
                                <Typography sx={ { fontSize: '18px', textAlign: "end" } }>
                                    ------------ { blog.quoteName }
                                </Typography>
                            </Box>
                            <Typography sx={ { fontSize: '18px', my: 4 } }>
                                { blog.description }
                            </Typography>
                        </Grid>
                        <Grid item xs={ 12 } md={ 4 } sx={ {} }>
                            <Grid container>
                                <BlogSideber></BlogSideber>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Box sx={ { pt: 4 } }>
                        <BlogPagination></BlogPagination>
                    </Box>

                </Container>
            </Box>
            <Footer></Footer>
        </>
    );
};

export default BlogDetails;

// id, date, comment, image1, image2, title, info, description, quoteName, quote