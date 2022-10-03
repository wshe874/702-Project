import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import profileImg from '../../images/account.png';

function ProfileButton({ disabled, onClick }) {
    return (
        <Button variant="text" disableElevation disableRipple disabled={disabled} onClick={onClick} sx={{
            width: 1,
            height: 1,
            bgcolor: '#00457c',
            '&:hover': {
                backgroundColor: '#003666',
                boxShadow: !disabled && "0 0 10px 10px #B3DB59",
            },
            '&:active': {
                backgroundColor: '#00213D',
            },
            boxShadow: !disabled && "0 0 10px 10px #B3DB59",

        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box
                    sx={{
                        maxWidth: 40
                    }}
                    component='img'
                    alt='Profile image'
                    src={profileImg}
                />
                <Typography variant='subtitle1' component='div' sx={{
                    textTransform: 'none',
                    color: 'white',
                }}>
                    Account
                </Typography>
            </Box>

        </Button>
    )
}

export default ProfileButton