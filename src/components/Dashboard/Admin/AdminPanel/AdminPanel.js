import { Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';

const AdminPanel = () => {
    return (
        <div>
            <Grid container spacing={ 0 } >
                <Grid item xs={ 1 } sx={ {
                    borderRight: '2px solid #333',
                    // height: '100vh',
                    paddingButtom: '150px',
                    backgroundColor: '#512DA8',
                    // zIndex: '-1'
                } }>
                    <Sidebar />
                </Grid>
                <Grid item xs={ 11 }>
                    <Outlet />
                </Grid>
            </Grid>
        </div>
    );
};

export default AdminPanel;