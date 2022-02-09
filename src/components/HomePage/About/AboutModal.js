import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PrimaryButton from '../../StyledComponent/Buttons/PrimaryButton';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const AboutModal = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <PrimaryButton onClick={ handleOpen }><PlayCircleIcon /></PrimaryButton>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={ open }
                onClose={ handleClose }
                closeAfterTransition
                BackdropComponent={ Backdrop }
                BackdropProps={ {
                    timeout: 500,
                } }
            >
                <Fade in={ open }>
                    <Box sx={ style }>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xHGkOQUtlRk?start=11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default AboutModal;