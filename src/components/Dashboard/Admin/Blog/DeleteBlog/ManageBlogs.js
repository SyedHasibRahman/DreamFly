import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { Container, Grid } from '@mui/material';
import swal from 'sweetalert';
import SecondaryButton from '../../../../StyledComponent/Buttons/SecondaryButton';
import PrimaryButton from '../../../../StyledComponent/Buttons/PrimaryButton';

const ManageBlogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // fetch('https://agile-lowlands-71900.herokuapp.com/blogs')
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data.blogs))
    }, []);


    const handleDeleteBlogs = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/blogs/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        swal({
                            title: "Good job!",
                            text: "Deleted successfully",
                            icon: "success",
                            button: "Done",
                        });
                        const remaining = blogs.filter(blog => blog._id !== id)
                        setBlogs(remaining);
                    }
                });
        }
    }

    return (
        <Box sx={ { bgcolor: "#fafafa" } }>
            <Container sx={ { pb: 5 } }>
                <Typography sx={ { fontSize: "1.4rem", py: 5, fontWeight: 600 } }>
                    Manage Your Blogs
                </Typography>
                <Grid container spacing={ 4 } columns={ 12 }>
                    { blogs.map(blog => {
                        const { title, img, date } = blog;
                        return (
                            <Grid item key={ blog._id } xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } sx={ {} }>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="150px"
                                        image={ img }
                                    />
                                    <CardContent>
                                        <Typography sx={ { fontSize: ".9rem", color: "text.secondary" } }>
                                            { date }
                                        </Typography>
                                        <Typography sx={ { fontSize: "1.1rem", pt: 1, fontWeight: 500 } }>
                                            { title }
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={ { mt: -3, display: 'flex', justifyContent: "space-between" } }>
                                        <SecondaryButton size="small" onClick={ () => handleDeleteBlogs(blog._id) }>
                                            Delete
                                        </SecondaryButton>
                                        <Link style={ { textDecoration: "none" } }
                                            to={ `/Dashboard/UpdateBlog/${blog._id}` }
                                        >
                                            <PrimaryButton size="small">Update</PrimaryButton>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>)
                    } )}
                </Grid>
            </Container>
        </Box>
    );
};

export default ManageBlogs;