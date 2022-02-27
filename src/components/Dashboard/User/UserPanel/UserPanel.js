import { Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import UserSidebar from '../../Sidebar/UserSidebar';

const UserPanel = () => {
    return (
        <div>
            <Grid container spacing={ 0 } >
                <Grid item xs={ 1 } sx={ {
                    borderRight: '2px solid #333',
                    height: '100vh',
                    backgroundColor: '#512DA8'
                } }>
                    <UserSidebar />
                </Grid>
                <Grid item xs={ 11 }>
                    <Outlet />
                </Grid>
            </Grid>
        </div>
    );
};

export default UserPanel;