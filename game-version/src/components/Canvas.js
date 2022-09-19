import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContextProvider';
import SizeableDraggableBox from './SizeableDraggableBox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import backgroundImg from '../images/blank_canvas.png';

function Canvas() {
    const { configuration, changePosition, changeSize } = useContext(GameContext);

    return (
        <Paper sx={{
            width: 1,
            height: 1,
        }}>
            <Box 
                sx={{
                    width: 1,
                }}
                component='img'
                alt="Canvas image"
                src={backgroundImg}
            />
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
}

export default Canvas