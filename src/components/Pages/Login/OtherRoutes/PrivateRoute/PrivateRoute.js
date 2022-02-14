import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';
import { CircularProgress } from '@mui/material'

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) { return <CircularProgress /> }
    return (
        <div>
            {/* <Route
                { ...rest }
                render={ () => user?.email
                    ? children
                    : <Redirect to="/login" />
                }
            /> */}
        </div>
    );
};

export default PrivateRoute;