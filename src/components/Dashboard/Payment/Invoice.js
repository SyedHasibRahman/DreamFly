import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Invoice = () => {
    const { bookedId } = useParams();
    const [item, setBooked] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myorders/${bookedId}`)
            .then(res => res.json())
            .then(data => setBooked(data));

    }, [bookedId]);



    return (
        <Container maxWidth="md" sx={ {
            py: 5,
        } }>

            <h2 >Invoice:</h2>
            <Box sx={ {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            } }>
                <Table stickyHeader aria-label="sticky table" sx={ {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                } }>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">
                                <strong>Invoice Number:</strong>
                            </TableCell>
                            <TableCell align="right">
                                {
                                    item._id
                                }
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow >
                            <TableCell align="right">
                                <strong>Invoice Date:</strong>
                            </TableCell>
                            <TableCell align="right">
                                <h6>1, March, 2022</h6>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>
            <Box sx={ {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 5
            } }>
                <Box>
                    <h4>Billing Information</h4>
                    <p>
                        { item.userName }
                    </p>
                    <p>
                        { item.address }
                    </p>
                </Box>
                <Box>
                    <h4>Shipping Information</h4>
                    <p>
                        { item.userName }
                    </p>
                    <p>
                        { item.address }
                    </p>
                </Box>
            </Box>
            <Paper>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <strong>Package Name</strong>
                                </TableCell>
                                <TableCell align="center">
                                    <strong>Image</strong>
                                </TableCell>
                                <TableCell align="right">
                                    <strong>Price</strong>
                                </TableCell>
                                <TableCell align="right">
                                    <strong>Txt</strong>
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>

                            <TableRow key={ item.name }>
                                <TableCell>
                                    { item.to ? `${item.to} to ${item.from}` : '' }<br></br> by <br></br>
                                    { item.name }
                                </TableCell>
                                <TableCell align="right">
                                    <img src={ item.img } alt="" width={ 100 } height={ 100 } />
                                </TableCell>
                                <TableCell align="right">
                                    { " " }
                                    ${ (item.price * 0.84).toFixed(2) }{ " " }
                                </TableCell>
                                <TableCell align="right">
                                    ${ (item.price * 0.16).toFixed(2) }
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell align="right">
                                    <strong>Total Amount in USD</strong>
                                </TableCell>
                                <TableCell align="right">
                                    ${ (item.price * 1).toFixed(2) }
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>
            <hr />
            <h3>TERMS AND CONDITIONS</h3>
            <ol>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti velit beatae error excepturi commodi consectetur.</li>
                <li>Maxime necessitatibus blanditiis earum sint iusto beatae id, eligendi sed provident consequatur minus numquam animi.</li>
                <li>Labore excepturi ullam molestiae odio iste et voluptatum velit sequi eveniet. Vitae ducimus sed consectetur?</li>
            </ol>
        </Container>
    );
};

export default Invoice;