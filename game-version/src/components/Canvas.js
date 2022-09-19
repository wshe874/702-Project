import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContextProvider';
import SizeableDraggableBox from './SizeableDraggableBox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import backgroundImg from '../images/blank_canvas.png';
import logo from '../images/uoa_white_logo.png';
import { Typography } from '@mui/material';

function Canvas() {
    const { configuration, changePosition, changeSize } = useContext(GameContext);

    return (
        <Paper sx={{
            position: 'relative',
            width: 1,
            height: 1,
        }}>
            <SideBar />
            <Typography variant='h5' component='div' sx={{
                position: 'absolute',
                top: 20,
                left: 100
            }}>
                Dashboard
            </Typography>
            <SizeableDraggableBox
                x={configuration[0].x}
                y={configuration[0].y}
                width={configuration[0].width}
                height={configuration[0].height}
                onPositionChange={(newX, newY) => {
                    changePosition(0, newX, newY);
                }}
                onSizeChange={(width, height) => {
                    changeSize(0, width, height);
                }}
            >
                <button>
                    Button
                </button>
            </SizeableDraggableBox>
        </Paper>
    )
};

function SideBar() {
    return (
        <Box sx={{
            width: 75,
            height: 76,
            position: 'absolute',
            height: 'inherit',
            bgcolor: '#00457c',
        }}>
            <Box
                sx={{
                    width: 1,
                }}
                component='img'
                alt="Uoa Logo"
                src={logo}
            />
        </Box>
    );
}

export default Canvas