import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AbuotUs from '../AboutUs';
import SendIcon from '@mui/icons-material/Send';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { IconButton, Stack } from '@mui/material';
import Fab from '@mui/material/Fab';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "70vw",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    color: "black",
    maxWidth: "450px",
    p: 4,
};

export function AboutUsModal({fab}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const button = fab ? (<Stack sx={{ justifyContent: "center" }} mr={3}>

        <IconButton
            
            onClick={handleOpen}
            size="small"
            edge="start"
            color="#091e32"
            aria-label="open drawer"
        >
            <InfoOutlinedIcon />
        </IconButton>

        <Typography>
        設計團隊
        </Typography>

    </Stack>) :(
        <Fab 
        size="small"
        onClick={handleOpen}
        color="#091e32" aria-label="edit">     
         
         <InfoOutlinedIcon />
     </Fab>
    )
    return (
        <>
            {button}
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AbuotUs />
                </Box>
            </Modal>
        </>
    );
}

export function SendPostCardModal({ fab }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const button = (fab) ? (<Stack sx={{ justifyContent: "center" }} mr={3}>

        <IconButton
            onClick={handleOpen}
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
        >
            <SendIcon />
        </IconButton>

        <Typography>
            寄明信片
        </Typography>

    </Stack>) :(
        <Fab 
        size="small"
        onClick={handleOpen}
        color="#091e32" aria-label="edit">     
         
         <SendIcon />
     </Fab>
    )
    return (
        <>
            {button}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography>請填寫以下連結表單，送出後即生成一張明信片。</Typography>
                    <Typography>每個人只能送出一張明信片，若送出多次則只保留最後一次送出之明信片。</Typography>
                </Box>
            </Modal>

        </>
    );
}
