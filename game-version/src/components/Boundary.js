import { Box } from '@mui/material'
import React from 'react'

function Boundary({ top, left, width, height, className }) {
    console.log(top, left, width, height, className)
    return (
        <Box className={className} sx={{
            position: 'absolute',
            top: top,
            left: left,
            border: 1,
            borderColor: 'red',
            width: width === 1 ? '-webkit-fill-available' : width,
            height: height === 1 ? '-webkit-fill-available' : height,
            zIndex: -1000,
        }} />
    )
}

export default Boundary