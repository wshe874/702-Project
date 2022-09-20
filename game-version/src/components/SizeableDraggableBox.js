import React from 'react';
import { Rnd } from 'react-rnd';
import Boundary from './Boundary';

function SizeableDraggableBox({ x, y, width, height, onPositionChange, onSizeChange, boundary, children }) {
    const onDragStop = (e, d) => {
        onPositionChange(d.x, d.y);
    };

    const onResizeStop = (e, direction, ref, delta, position) => {
        onSizeChange(ref.style.width, ref.style.height);

        //Reset coordinates because onDragStop will always be called when onResizeStop is called and messes up the position
        onDragStop(e, position);
    }

    return (
        <>
            <Boundary {...boundary.dimension} className={boundary.className} />
            <Rnd
                size={{ width: width, height: height }}
                position={{ x: x, y: y }}
                onDragStop={onDragStop}
                onResizeStop={onResizeStop}
                bounds={`.${boundary.className}`}
            >
                {children}
            </Rnd>
        </>
    )
}

export default SizeableDraggableBox