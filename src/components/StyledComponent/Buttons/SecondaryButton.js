import { styled } from '@mui/system';
import { Button } from "@mui/material";

const SecondaryButton = styled(Button)({
    '&' : {
        background: '#FF257B',
        color: '#FFF',
        fontWeight: '600',
        padding: '3px 30px',
        borderRadius: "50px",
        border: '2px solid #FF257B',
        marginTop: '10px',
        textTransform: 'capitalize',
    },
    '&:hover': {
    borderColor: '#FF257B',
    background: "white",
    color: '#FF257B',
    transition: ".7s",
    fontWeight: '600',
  }
});

export default SecondaryButton;