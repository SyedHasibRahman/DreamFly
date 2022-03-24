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
import swal from 'sweetalert';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const BlogDetails = () => {

    const { blogId } = useParams();
    const { user } = useAuth();
    const [blog, setBlog] = useState({});
    const [comments, setComments] = useState([]);
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        // const url = `https://salty-beach-45243.herokuapp.com/blogs/${blogId}`
        const url = `https://agile-lowlands-71900.herokuapp.com/blogs/${blogId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [blogId]);

    // Post comment section
    const date = new Date().toLocaleString('en-US', {
        weekday: 'short', // long, short, narrow
        day: 'numeric', // numeric, 2-digit
        month: 'long', // numeric, 2-digit, long, short, narrow
        year: 'numeric', // numeric, 2-digit
        // hour: 'numeric', // numeric, 2-digit
        // minute: 'numeric', // numeric, 2-digit
        // second: 'numeric', // numeric, 2-digit
    });

    const CommentInfo = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        publishDate: date,
        blogId: blogId
    }

    const onSubmit = (comments) => {
        const combinedData = { comments, CommentInfo }

        axios.post('https://agile-lowlands-71900.herokuapp.com/comments', combinedData)
            .then(res => {

                if (res.data.insertedId) {
                    // alert('Added successfully');
                    fetch('https://agile-lowlands-71900.herokuapp.com/comments')
                        .then(res => res.json())
                        .then(data => {
                            const filter = data.reverse().filter(e => e.CommentInfo.blogId === blogId);
                            console.log(filter)
                            if (filter) {
                                setComments(filter)
                            }
                            reset();
                        })
                }

            })
    }

    // get comment section

    useEffect(() => {
        fetch('https://agile-lowlands-71900.herokuapp.com/comments')
            .then(res => res.json())
            .then(data => {
                const filter = data.reverse().filter(e => e.CommentInfo.blogId === blogId);
                if (filter) {
                    setComments(filter)
                }
            }
            );
    }, [blogId]);

    // Delete comment section
    const handleDeleteComment = (id) => {

        const proceed = swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("You successfully deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("This is safe!");
                }
            });

        if (proceed) {

            const url = `https://agile-lowlands-71900.herokuapp.com/comments/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        swal({
                            title: "Are you sure?",
                            text: "Once deleted, you will not be able to recover this!",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                        })
                            .then((willDelete) => {
                                if (willDelete) {
                                    swal("You successfully deleted!", {
                                        icon: "success",
                                    });
                                } else {
                                    swal("This is safe!");
                                }
                            });
                        const remaining = comments.filter(comment => comment._id !== id)
                        setComments(remaining);
                    }
                });
        }

    }

    // load more comments
    const [noOfElement, setNoOfElement] = useState(5);
    const loadMore = () => {
        setNoOfElement(noOfElement + noOfElement)
    }


    return (
        <>
            <Navigation />
            <Box sx={ { py: 10, bgcolor: "#fafafa" } }>
                <Container>
                    <Grid container spacing={ 4 }>
                        <Grid item xs={ 12 } md={ 8 }>
                            <Box sx={ { borderRadius: 1, } }>
                                <CardMedia
                                    component="img"
                                    alt=""
                                    image={ blog.img }
                                    sx={ { borderRadius: 2, width: "100%", height: "350px" } }
                                />
                            </Box>
                            <Typography sx={ { fontSize: '24px', fontWeight: 600, mt: 5 } }>
                                { blog.title }
                            </Typography>
                            <Typography sx={ { fontSize: '18px', mt: 3, textAlign: "justify" } }>
                                { blog.info }
                            </Typography>
                            <Typography sx={ { fontSize: '18px', my: 3, textAlign: "justify" } }>
                                { blog.description }
                            </Typography>

                            {/* Blog Tags start */ }
                            <Grid item xs={ 12 }>
                                <Typography sx={ { fontWeight: 600, fontSize: "20px", mb: 2 } }>
                                    Tags
                                </Typography>
                                <Box sx={ { display: 'flex', gap: 1, flexWrap: 'wrap' } }>
                                    <Link
                                        style={ { textDecoration: "none", cursor: "pointer" } }
                                        to='/Blogs'
                                    >
                                        <button className="tag-btn">{ blog.tag1 }</button>
                                    </Link>
                                    <Link
                                        style={ { textDecoration: "none", cursor: "pointer" } }
                                        to='/Blogs'
                                    >
                                        <button className="tag-btn">{ blog.tag2 }</button>
                                    </Link>
                                </Box>
                            </Grid>
                            {/* Blog Tags end */ }

                            {/* comment section start*/ }
                            <Box
                                sx={ { display: "flex", alighnItems: "center", justifyContent: "space-around", py: 4 } }
                            >
                                <Typography sx={ { fontSize: "18px" } }>
                                    <span>5</span> <i style={ { padding: "", color: "blue" } } className="fa-solid fa-thumbs-up"></i>
                                </Typography>
                                <Typography sx={ { fontSize: "18px" } }>
                                    <span>7</span> <i style={ { padding: "", color: "red" } } className="fa-solid fa-heart"></i>
                                </Typography>
                                <Typography sx={ { fontSize: "16px" } }>
                                    { comments.length } Comment
                                </Typography>
                            </Box>

                            {
                                user?.email &&
                                <Box>
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
                            }

                            <Box>
                                {
                                    comments.slice(0, noOfElement).map((comment) =>
                                        <Box
                                            sx={ { display: "flex", alignItems: "center", justiflyContent: "center", my: 2 } }
                                        >
                                            <Avatar alt="Remy Sharp" src={ comment.CommentInfo.photo } />
                                            <Box
                                                sx={ { marginLeft: "15px", bgcolor: "#ede7f6", py: .5, px: 2, borderRadius: "5px" } }
                                            >
                                                <Typography sx={ { fontWeight: 700, fontSize: "14px" } }>
                                                    { comment.CommentInfo.name || "User Name" }
                                                </Typography>
                                                <Typography sx={ { display: "flex", justifyContent: "space-between", alignItems: "center" } }>
                                                    <Box>
                                                        { comment.comments.comment }
                                                    </Box>
                                                    <Box>
                                                        {
                                                            user?.email &&
                                                            <Tooltip title="Delete">
                                                                <IconButton onClick={ () => handleDeleteComment(comment._id) } sx={ { p: 0, ml: 4 } }>
                                                                    <DeleteIcon sx={ { fontSize: "16px" } } />
                                                                </IconButton>
                                                            </Tooltip>
                                                        }
                                                    </Box>
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ) }

                                {
                                    noOfElement < comments.length &&
                                    <Box>
                                        <Typography
                                            onClick={ () => loadMore() }
                                            sx={ { fontSize: "18px", fontWeight: 700, cursor: "pointer", pl: 1, textDecoration: "underline" } }
                                        >
                                            View more comments
                                        </Typography>
                                    </Box>
                                }

                            </Box>

                            <Link
                                style={ { textDecoration: "none", textAlign: "center", cursor: "pointer" } }
                                to='/Blogs'
                            >
                                <Box
                                    sx={ { display: "flex", textAlign: "center", ml: 1, mt: 4 } }
                                >
                                    <KeyboardBackspaceIcon
                                        sx={ { color: '#5e35b1', fontWeight: 600, textTransform: 'capitalize', fontSize: 30, } }

                                    />
                                    <Typography
                                        sx={ { color: '#5e35b1', fontWeight: 600, ml: 1, fontSize: "20px", } }
                                    >
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
