/* eslint-disable jsx-a11y/role-has-required-aria-props */
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Accordion, AccordionDetails, AccordionSummary, Button, Container, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './CouserDetails.css'



function CouserDetails() {
    return (
        <Container>
            <Box>
                <Grid container spacing={4}>

                    {/* left section */}
                    <Grid item xs={12} sm={12} md={7} lg={8}>
                        <Box my={2}>
                            <Typography variant='h5' style={{ fontWeight: '700' }}>Commercial Pilot License</Typography>
                        </Box>
                        <Box className='courseView' mx={'auto'}>
                            <img src="https://images.unsplash.com/photo-1506695939086-156c2eff767b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbmUlMjBjb2NrcGl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        </Box>
                        <Box my={2} className='btncourse'>
                            <Box>
                                <Typography>Commercial Pilot License Part 1</Typography>
                            </Box>
                            <Box className='btndesign'>
                                <Button className="">Previous</Button>
                                <Button className=''>Next</Button>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={4}>
                        <Box my={2} className='course-content' variant='h5' style={{ fontWeight: '700' }}>
                            <div>Couser content</div>
                            <progress value="100" max="100">75%</progress>
                            <div>100%</div>
                        </Box>
                        <Box className='search'>
                            <input autocomplete="off" placeholder="Search Lesson" type="text" aria-autocomplete="both" aria-expanded="true" aria-haspopup="listbox" role="combobox" className="rbt-input-main form-control rbt-input" value="" aria-owns="lesson-search" />
                        </Box>
                        <Box mt={2}>
                            <div className='courseDetails'>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Accordion 1</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Accordion 2</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>Accordion 3</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion disabled>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <Typography>Disabled Accordion</Typography>
                                    </AccordionSummary>
                                </Accordion>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default CouserDetails;