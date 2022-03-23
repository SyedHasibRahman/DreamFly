import { Box } from '@mui/material';
import React from 'react';

const SocialIcons = () => {
    return (
        <Box 
            sx={{ display: "flex", mt: 4 }}
            >
            <a 
                href="https://www.facebook.com/" 
                target="_blank" rel="noreferrer" 
                sx={{ mr: 1 }} 
                className='social-icon-box'
                >
                <i className="fab fa-facebook-f social-icon"></i>
            </a>
            <a 
                href="https://twitter.com/" 
                target="_blank" rel="noreferrer" 
                sx={{ mr: 1 }} 
                className='social-icon-box'
                >
                <i className="fab fa-twitter social-icon"></i>
            </a>
            <a 
                href="https://www.youtube.com/" 
                target="_blank" rel="noreferrer" sx={{ mr: 1 }} 
                className='social-icon-box'
                >
                <i className="fab fa-youtube social-icon"></i>
            </a>
            <a 
                href="https://www.instagram.com/" 
                target="_blank" rel="noreferrer" 
                sx={{ mr: 1 }} className='social-icon-box'
                >
                <i className="fab fa-instagram social-icon"></i>
            </a>
        </Box>
    );
};

export default SocialIcons;