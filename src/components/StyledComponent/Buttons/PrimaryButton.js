import { styled } from '@mui/system';
import { Button } from "@mui/material";


const PrimaryButton = styled(Button)({
    '&' : {
        background: '#512da8',
        color: '#FFF',
        fontWeight: '600',
        padding: '3px 30px',
        borderRadius: "50px",
        border: '2px solid #4527a0',
        marginTop: '10px',
        textTransform: 'capitalize',
    },
    '&:hover': {
    borderColor: '#4527a0',
    background: "white",
    color: '#4527a0',
    transition: ".7s",
    fontWeight: '600',
  }
});

export default PrimaryButton;

