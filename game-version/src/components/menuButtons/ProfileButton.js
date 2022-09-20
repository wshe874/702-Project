import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import profileImg from '../../images/account.png';

function ProfileButton({ disabled }) {
    return (
        <Button variant="contained" disableElevation disableRipple disabled={disabled} sx={{
            width: 1,
            height: 1,
            bgcolor: '#00457c',
            '&:hover': {
                backgroundColor: '#003666'
            },
            '&:active': {
                backgroundColor: '#00213D'
            },
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
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
                    'text-transform': 'none',
                    color: 'white',
                }}>
                    Account
                </Typography>
            </Box>

        </Button>
    )
}

export default ProfileButton