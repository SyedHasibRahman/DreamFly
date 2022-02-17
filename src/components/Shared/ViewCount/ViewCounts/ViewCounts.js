
import { Box, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import './ViewCounts.css';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const ViewCounts = () => {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment >
                <Grid item xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 } style={ { borderRight: '1px dashed  #DCBB87' } }>
                    <Typography style={ { color: '#fffde7' } } variant="h3" component="div" className={ classes.paper }>95</Typography>
                    <Typography style={ { color: '#fffde7' } } variant="h6" className={ classes.paper }>Professional Pilot
                    </Typography>
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 } style={ { borderRight: '1px dashed  #DCBB87' } }>
                    <Typography style={ { color: '#fffde7' } } variant="h3" component="div" className={ classes.paper }>68</Typography>
                    <Typography style={ { color: '#fffde7' } } variant="h6" className={ classes.paper }>Jet Airplanes
                    </Typography>
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 } style={ { borderRight: '1px dashed  #DCBB87' } }>
                    <Typography style={ { color: '#fffde7' } } variant="h3" component="div" className={ classes.paper }>290</Typography>
                    <Typography style={ { color: '#fffde7' } } variant="h6" className={ classes.paper }>World Airports
                    </Typography>
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 } style={ { borderRight: '1px dashed  #DCBB87' } }>
                    <Typography style={ { color: '#fffde7' } } variant="h3" component="div" className={ classes.paper }>195</Typography>
                    <Typography style={ { color: '#fffde7' } } variant="h6" className={ classes.paper }>Directions</Typography>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div className={ classes.root } style={ { marginTop: '130px', marginBottom: '120px', } }>
            <Box className='viewImage'>
                <Container>
                    <Grid container spacing={ 0 }>
                        <Grid container item xs={ 12 } spacing={ 0 }>
                            <FormRow />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}

export default ViewCounts;
