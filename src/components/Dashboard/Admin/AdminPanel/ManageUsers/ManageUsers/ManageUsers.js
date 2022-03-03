import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DeleteForever } from "@mui/icons-material";

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const url = `https://salty-beach-45243.herokuapp.com/users`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    const textcolor = {
        'color': 'white',
        'fontWeight': '700'
    }
    const handleDelete = id => {
        const deleteMassege = window.confirm("Delete the User?");
        if (deleteMassege) {
            const url = `https://salty-beach-45243.herokuapp.com/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                    }

                })
        }

    }
    return (
        <Container>
            <Box>
                <Typography variant="h4" component="h4" my={ 5 }>All DreamFly Users</Typography>
            </Box>
            <TableContainer component={ Paper }>
                <Table sx={ { minWidth: 650 } } aria-label="simple table">
                    <TableHead>
                        <TableRow className="thed">
                            <TableCell style={ textcolor }>ID</TableCell>
                            <TableCell style={ textcolor } align="center">Name</TableCell>
                            <TableCell style={ textcolor } align="center">Email</TableCell>
                            <TableCell style={ textcolor } align="center">Image</TableCell>
                            <TableCell style={ textcolor } align="center">Role</TableCell>
                            <TableCell style={ textcolor } align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { users.map((user) => (
                            <TableRow
                                className="tbody"
                                key={ user._id }
                                sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
                            >
                                <TableCell component="th" scope="row">
                                    { user._id }
                                </TableCell>
                                <TableCell align="center">{ user.displayName }</TableCell>
                                <TableCell align="center">{ user.email }</TableCell>
                                <TableCell align="center">
                                    <Avatar alt="Remy Sharp" src={ user.photoURL } />
                                </TableCell>
                                <TableCell align="center">Comming Soon...</TableCell>
                                <TableCell align="center"><Button onClick={ () => handleDelete(user?._id) }><DeleteForever style={ { color: 'red' } } /></Button></TableCell>
                            </TableRow>
                        )) }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default ManageUsers;
