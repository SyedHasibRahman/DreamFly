import { Avatar, CardMedia, Container, Grid, Typography, } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BlogSideber from '../BlogSideber/BlogSideber';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../../Shared/Footer/Footer';
import InputTextField from '../../../StyledComponent/InputTextField/InputTextField';
import useAuth from '../../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const BlogDetails = () => {

    const { blogId } = useParams();
    const { user } = useAuth();
    const [blog, setBlog] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // const url = `https://salty-beach-45243.herokuapp.com/blogs/${blogId}`
        const url = `http://localhost:5000/blogs/${blogId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [blogId]);

    // Post comment section
    const CommentInfo = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        publishDate: new Date().toLocaleDateString(),
        blogId: blogId
    }
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (comments) => {
        const combinedData = { comments, CommentInfo }
        console.log(combinedData)
        console.log(combinedData.data)

        axios.post('http://localhost:5000/comments', combinedData)
            .then(res => {
                
                if (res.data.insertedId) {
                    // alert('Added successfully');
                    fetch('http://localhost:5000/comments')
                    .then(res => res.json())
                    .then(data => 
                        {
                            const filter = data.reverse().filter(e => e.CommentInfo.blogId === blogId);
                            console.log(filter)
                            if(filter ){
                            setComments(filter)
                            }
                            reset();
                        }) 
                }
                
            })
    }

    // get comment section
    
    useEffect(() => {
        fetch('http://localhost:5000/comments')
            .then(res => res.json())
            .then(data => {
                const filter = data.reverse().filter(e => e.CommentInfo.blogId === blogId);
                console.log(filter)
                if(filter ){
                setComments(filter)
                }}
            );
    }, []);
    console.log(comments)


    // Delete comment section
    const handleDeleteComment = (id) => {

        const proceed = window.confirm('Are you sure, you want to delete?');

        if (proceed) {

            const url = `http://localhost:5000/comments/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // alert('deleted successfully');
                        const remaining = comments.filter(comment => comment._id !== id)
                        setComments(remaining);
                    }
                });
        }

    }

    // load more comments
    const [noOfElement, setNoOfElement] = useState(5);
    console.log(noOfElement, comments.length)
    const loadMore = () => {
        setNoOfElement(noOfElement + noOfElement)
    }


    return (
        <>
            <Navigation />
            <Box sx={{ py: 10, bgcolor: "#fafafa" }}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8}>
                            <Box sx={{ borderRadius: 1, }}>
                                <CardMedia
                                    component="img"
                                    alt=""
                                    image={blog.images3}
                                    sx={{ borderRadius: 2, width: "100%", height: "350px" }}
                                />
                            </Box>
                            <Typography sx={{ fontSize: '24px', fontWeight: 600, mt: 5 }}>
                                {blog.fullTitle}
                            </Typography>
                            <Typography sx={{ fontSize: '18px', mt: 3 }}>
                                {blog.info}
                            </Typography>
                            <Grid container spacing={4} sx={{ mb: 6, mt: 1 }}>
                                <Grid item xs={12} sm={6}>
                                    <CardMedia
                                        component="img"
                                        alt=""
                                        image={blog.images3}
                                        sx={{ borderRadius: 2, width: "100%", height: "230px" }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CardMedia
                                        component="img"
                                        alt=""
                                        image={blog.images3}
                                        sx={{ borderRadius: 2, width: "100%", height: "230px" }}
                                    />
                                </Grid>
                            </Grid>
                            <Box sx={{ bgcolor: "#F8F1E7", borderRadius: 2, p: 8 }}>
                                <Typography sx={{ fontSize: '20px', fontWeight: 600, lineHeight: .2 }}>
                                    "
                                </Typography>
                                <Typography sx={{ fontSize: '20px', fontWeight: 600, ml: 2, mt: -2 }}>
                                    {blog.quote} "
                                </Typography>
                                <Typography sx={{ fontSize: '18px', textAlign: "end" }}>
                                    ------------ {blog.quoteName}
                                </Typography>
                            </Box>
                            <Typography sx={{ fontSize: '18px', my: 4 }}>
                                {blog.description}
                            </Typography>

                            {/* comment section start*/ }
                            <Box
                                sx={ { display: "flex", alighnItems: "center", justifyContent: "space-around", pb: 4 } }
                            >
                                <Typography sx={ { fontSize: "18px" } }>
                                    <span>5</span> <i style={ { padding: "", color: "blue" } } className="fa-solid fa-thumbs-up"></i>
                                </Typography>
                                <Typography sx={ { fontSize: "18px" } }>
                                    <span>7</span> <i style={ { padding: "", color: "red" } } className="fa-solid fa-heart"></i>
                                </Typography>

                                <Typography sx={ { fontSize: "16px" } }>{ comments.length } Comment</Typography>
                            </Box>

                            <Box
                                sx={ { } }>
                                <Typography variant="h3" sx={ { my: 2 } }>
                                    Leave a comment now
                                </Typography>
                                <Grid
                                    component="form"
                                    autoComplete="off"
                                    onSubmit={ handleSubmit(onSubmit) }
                                    container
                                    direction="row"
                                    sx={ { mb: "20px" } } justifyContent="space-between" alignItems="center" spacing={ 2 }
                                >
                                    <Grid item xs={ 12 }>
                                        <InputTextField
                                            label="Massage"
                                            fullWidth
                                            placeholder="Write a comment..."
                                            type="text"
                                            rows="4"
                                            required
                                            { ...register("comment", { required: true }) }
                                            sx={ { bgcolor: "white" } }
                                        />
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box>
                                {
                                    comments.slice(0, noOfElement).map((comment) =>
                                        <Box
                                            sx={ { display: "flex", alignItems: "center", justiflyContent: "center", my: 2 } }
                                        >
                                            <Avatar alt="Remy Sharp" src={ comment.CommentInfo.photo } />
                                            <Typography
                                                sx={ { fontSize: "18px", marginLeft: "15px", bgcolor: "#ede7f6", py: .5, px: 2, borderRadius: "5px" } }
                                            >
                                                { comment.comments.comment }
                                                <i
                                                    onClick={ () => handleDeleteComment(comment._id) }
                                                    style={ { color: "red", fontSize: "14px", paddingLeft: "15px" } } className="fa-solid fa-trash"></i>
                                            </Typography>
                                        </Box>)
                                }

                                {
                                    noOfElement <= comments.length && <Box>
                                    <Typography onClick={ () => loadMore() } sx={ { fontSize: "18px", fontWeight: 700, cursor: "pointer", pl: 1, textDecoration: "underline" } }>
                                        View more comments
                                    </Typography>
                                </Box>
                                }

                            </Box>

                            <Link style={ {textDecoration: "none", textAlign: "center", cursor: "pointer" } }
                                to='/Blogs'
                            >
                                <Box sx={ { display: "flex", textAlign: "center", ml: 1, mt: 4 } }>

                                    <KeyboardBackspaceIcon sx={ { color: '#5e35b1', fontWeight: 600, textTransform: 'capitalize', fontSize: 30, } } />

                                    <Typography sx={ { color: '#5e35b1', fontWeight: 600, ml: 1, fontSize: "20px", } }>
                                        Back to Blogs
                                    </Typography>
                                </Box>
                            </Link>
                        </Grid>
                        {/* comment section start*/ }

                        {/* Blog Sideber start */ }
                        <Grid item xs={ 12 } md={ 4 }>
                            <Grid container>
                                <BlogSideber></BlogSideber>
                            </Grid>
                        </Grid>
                        {/* Blog Sideber end */ }

                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default BlogDetails;

// id, date, comment, image1, image2, title, info, description, quoteName, quote