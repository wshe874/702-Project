import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContextProvider';
import SizeableDraggableBox from './SizeableDraggableBox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
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
                top: 30,
                left: 115
            }}>
                Dashboard
            </Typography>
            {configuration.map(({ Button, width, height, x, y, boundary }, index) => {
                return (
                    <SizeableDraggableBox
                        // key={index}
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        boundary={boundary}
                        onPositionChange={(newX, newY) => {
                            changePosition(index, newX, newY);
                        }}
                        onSizeChange={(width, height) => {
                            changeSize(index, width, height);
                        }}
                    >
                        <Button disabled={true}/>
                    </SizeableDraggableBox>
                );
            })}
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