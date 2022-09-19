import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContextProvider';
import SizeableDraggableBox from './SizeableDraggableBox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import logo from '../images/uoa_white_logo.png';
import { Typography } from '@mui/material';
import ProfileButton from './ProfileButton';
import DashboardButton from './DashboardButton';

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
                top: 30,
                left: 115
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
                <ProfileButton disabled={true} />
            </SizeableDraggableBox>
            <SizeableDraggableBox
                x={configuration[1].x}
                y={configuration[1].y}
                width={configuration[1].width}
                height={configuration[1].height}
                onPositionChange={(newX, newY) => {
                    changePosition(1, newX, newY);
                }}
                onSizeChange={(width, height) => {
                    changeSize(1, width, height);
                }}
            >
                <DashboardButton disabled={true} />
            </SizeableDraggableBox>
        </Paper>
    )
};

function SideBar() {
    return (
        <Box sx={{
            width: 90,
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