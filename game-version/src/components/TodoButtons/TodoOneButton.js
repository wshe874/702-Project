import { Box, Button, Card, Typography } from '@mui/material';
import React from 'react';
import announcementsImage from '../../images/megaphone.png';
import CloseIcon from '@mui/icons-material/Close';

function TodoOneButton({ disabled, onClick }) {
    return (
        <Card sx={{
            borderRadius: 2,
            height: 1
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: 1,
                textAlign: 'left',
            }}>
                <Button  variant='contained' disableRipple disabled={disabled} onClick={onClick} sx={{
                    width: 1,
                    height: 1,
                    textAlign: 'left',
                    textTransform: 'none',
                }}>
                    <Box
                        sx={{
                            width: 16,
                            mx: 1.5,
                        }}
                        component='img'
                        alt='Announcement image'
                        src={announcementsImage}
                    />
                    <Typography variant='body2' component='div' sx={{
                        fontSize: '0.875rem',
                        textDecoration: 'underline',
                        color: '#00457c',
                        minWidth: 70,
                    }}>Midsemester Break - Friday Announcement</Typography>
                    <CloseIcon sx={{
                        color: 'black'
                    }} />
                </Button>
                <Box sx={{
                    ml: 6
                }}>
                    <Typography variant='body2' component='div' sx={{
                        fontSize: '0.875rem',
                        fontWeight: 'bold',
                        width: 1,
                        color: '#6b7780',
                    }}>ENGGEN 403: Managing a Business</Typography>
                    <Typography variant='body2' component='div' sx={{
                        fontSize: '0.875rem',
                        width: 1,
                        color: '#2d3b45',
                    }}>9 Sep at 16:00</Typography>
                </Box>
            </Box>
        </Card>
    )
}

export default TodoOneButton