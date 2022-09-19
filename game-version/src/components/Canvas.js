import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContextProvider';
import SizeableDraggableBox from './SizeableDraggableBox';

function Canvas() {
    const { configuration, changePosition, changeSize } = useContext(GameContext);

    return (
        <div style={{width:500, height: 500}}>
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
        </div>
    )
}

export default Canvas