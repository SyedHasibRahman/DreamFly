import { styled } from '@mui/system';
import { Button } from "@mui/material";


const PrimaryButton = styled(Button)({
    '&' : {
        background: '#5e35b1',
        color: '#FFF',
        fontWeight: '600',
        padding: '5px 30px',
        borderRadius: "50px",
        border: '2px solid #5e35b1',
        marginTop: '10px',
        textTransform: 'capitalize',
        fontSize: "16px"
    },
    '&:hover': {
    borderColor: '#4527a0',
    background: "white",
    color: '#4527a0',
    transition: ".9s",
    fontWeight: '600',
  }
});

export default PrimaryButton;

