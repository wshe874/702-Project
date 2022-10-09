import React from 'react';
import { Rnd } from 'react-rnd';
import Boundary from './Boundary';

function SizeableDraggableBox({ x, y, width, height, onPositionChange, onSizeChange, boundary, children, active }) {
    const onDragStop = (e, d) => {
        onPositionChange(d.x, d.y);
    };

    const onResizeStop = (e, direction, ref, delta, position) => {
        const width = ref.style.width;
        const tempWidth = parseInt(width.substring(0, width.length-2));

        const height = ref.style.height;
        const tempHeight = parseInt(height.substring(0,height.length-2));

        onSizeChange(tempWidth, tempHeight);

        //Reset coordinates because onDragStop will always be called when onResizeStop is called and messes up the position
        onDragStop(e, position);
    }

    return (
        <>
            <Boundary {...boundary.dimension} className={boundary.className} />
            <Rnd
                size={{ width: width, height: height }}
                position={{ x: x, y: y }}
                onDrag={onDragStop}
                onResize={onResizeStop}
                enableResizing={active}
                disableDragging={!active}
                bounds={`.${boundary.className}`}
            >
                {children}
            </Rnd>
        </>
    )
}

export default SizeableDraggableBox