import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const ServiceCard = () => {

    return (
        <div>
            <Card sx={ { maxWidth: 345 } } className='cardBody'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://i.ibb.co/dGDkr4v/1.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lorem ipsum dolor
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default ServiceCard;