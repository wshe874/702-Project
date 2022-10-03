import { Box } from '@mui/material';
import React from 'react';
import announcementsImage from '../images/megaphone.png';
import assignmentsImage from '../images/notes.png';
import filesImage from '../images/folder.png';

function IconList() {
    return (
        <Box sx={{
            width: 1,
        }}>
            <Box sx={{
                mt: 1.5,
                display: 'flex',
            }}>
                <Box
                    sx={{
                        width: 24,
                        mx: 3,
                        ml: 2,
                    }}
                    component='img'
                    alt='Announcement image'
                    src={announcementsImage}
                />
                <Box
                    sx={{
                        width: 24,
                        mx: 3,
                    }}
                    component='img'
                    alt='Assignments image'
                    src={assignmentsImage}
                />
                <Box
                    sx={{
                        width: 24,
                        mx: 3,
                    }}
                    component='img'
                    alt='Files image'
                    src={filesImage}
                />
            </Box>
        </Box>
    )
}

export default IconList