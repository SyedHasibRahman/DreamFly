import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {



    const { blogId } = useParams();
    const [blog, setBlog] = useState([]);
    console.log(blog);

    useEffect(() => {
        const url = `https://vast-retreat-08893.herokuapp.com/BlogDetails/${blogId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [blogId]);

    return (
        <Container>
            <Box>
                hello
                <img src={ blog.image1 } alt="" />
            </Box>

        </Container>
    );
};

export default BlogDetails;

// id, date, comment, image1, image2, title, info, description, quoteName, quote