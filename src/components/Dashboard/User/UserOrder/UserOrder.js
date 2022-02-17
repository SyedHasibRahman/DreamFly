import React, { useEffect, useState } from "react";
import './UserOrder.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';







const UserOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `./order.JSON`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    const textcolor = {
        'color': 'white',
        'fontWeight': '700'
    }
    return (
        <Container>
            <Box>
                <Typography variant="h4" component="h4" my={5}>My Order</Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className="thed">
                            <TableCell style={textcolor}>ID</TableCell>
                            <TableCell style={textcolor} align="center">Name</TableCell>
                            <TableCell style={textcolor} align="center">Product Name</TableCell>
                            <TableCell style={textcolor} align="center">Price</TableCell>
                            <TableCell style={textcolor} align="center">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                className="tbody"
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.pname}</TableCell>
                                <TableCell align="center">{row.price}</TableCell>
                                <TableCell align="center"><Button>{row.status}</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default UserOrder;
