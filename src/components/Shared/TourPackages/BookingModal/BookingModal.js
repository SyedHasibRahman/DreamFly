import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import PrimaryButton from "../../../StyledComponent/Buttons/PrimaryButton";
import InputTextField from "../../../StyledComponent/InputTextField/InputTextField";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #4527a0',
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ item, openBooking, handleBookingClose, setBookingSuccess }) => {


    const { user } = useAuth();
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        // collect data
        const booking = {
            ...bookingInfo,
            
        }
        // send to the server
        fetch('', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            });

        e.preventDefault();
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        
                    </Typography>
                    <Box component="form" sx={{}} onSubmit={handleBookingSubmit}>
                        <InputTextField
                            sx={{pb:2.5}}
                            label="Name" 
                            id="custom-css-outlined-input" 
                            fullWidth 
                            required
                            type="text"
                            name="patientName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <InputTextField
                            sx={{pb:2.5}}
                            label="Email" 
                            id="custom-css-outlined-input" 
                            fullWidth 
                            required
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <InputTextField
                            sx={{pb:1}}
                            label="Phone" 
                            id="custom-css-outlined-input" 
                            fullWidth 
                            required
                            type="number"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue="Phone Number"
                            size="small"
                        />
                        <PrimaryButton>Next</PrimaryButton>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;