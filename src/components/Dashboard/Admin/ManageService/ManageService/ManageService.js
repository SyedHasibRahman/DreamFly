import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../../StyledComponent/Buttons/PrimaryButton';
import SecondaryButton from '../../../../StyledComponent/Buttons/SecondaryButton';

const ManageService = ({ packags, packages, setPackages }) => {
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = packages.filter(packags => packags._id !== id)
                        setPackages(remaining);
                    }
                });
        }
    }

    return (
        <div>

            <Box style={ {} } key={ packags._id }>
                <Card
                    sx={ {
                        maxWidth: "100%",
                        margin: "10px",
                        position: "relative",
                    } }
                >
                    <CardActionArea>
                        <Box className="tour_img">
                            <CardMedia
                                component="img"
                                image={ packags?.images }
                                alt="green iguana"
                            />
                            <Typography className="tour_price">
                                ${ packags?.price }
                            </Typography>
                        </Box>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={ { fontWeight: 600, fontSize: "1.4rem" } }
                            >
                                { packags?.name }
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={ { fontWeight: 600, fontSize: "1.4rem" } }
                            >
                                { packags?.title }
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={ { fontWeight: 600, fontSize: "1.4rem" } }
                            >
                                { packags?.seat}
                            </Typography>
                            
                            
                        </CardContent>
                        <CardActions
                            sx={ { display: "flex", mx: 1, justifyContent: "space-between" } }
                        >
                            <SecondaryButton
                                onClick={ () => handleDelete(packags._id) }
                            >
                                DELETE
                            </SecondaryButton>
                            <Link
                                style={ { textDecoration: 'none' } } as={ HashLink } to={ `/Dashboard/UpdateService/${packags._id}` }
                            >
                                <PrimaryButton>UPDATE</PrimaryButton>
                            </Link>
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Box>




        </div>

    );
};
export default ManageService;