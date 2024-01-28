import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
export default function CustomizedSnackbars({ open, setOpen, severity }) {
    
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
                onClose={handleClose}
                severity={severity?.severity}
                variant={severity?.severity}
                sx={{ width: '100%' }}
            >
                {severity?.message}
            </Alert>
        </Snackbar>
    );
}