import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../contexts/GameContextProvider';
import SizeableDraggableBox from './SizeableDraggableBox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import logo from '../images/uoa_white_logo.png';
import { Button, Typography } from '@mui/material';
import { activatedButtonsAt } from '../utils/gameUtils';

function Canvas() {
    const numPrompts = 6;
    const numClicks = 12;

    const { configuration, changePosition, changeSize } = useContext(GameContext);
    const [prompt, setPrompt] = useState(0);
    const [activatedButtons, setActivatedButtons] = useState(activatedButtonsAt(prompt));
    const [clicks, setClicks] = useState(0);
    const [state, setState] = useState('prepare');
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);
    const [results, setResults] = useState([]);

    useEffect(() => {
        let interval;
        if (start) {
            interval = setInterval(() => {
                setTime(time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [start, time]);

    useEffect(() => {
        if (state === 'start') {
            setPrompt(1);
        } else if (state === 'done') {
            console.log("Should submit results");
            setPrompt(0);
        }
    }, [state]);

    useEffect(() => {
        if (clicks >= numClicks) {
            console.log("Should compute results");

            setClicks(0);
            setPrompt(p => p + 1);
        }
    }, [clicks]);

    useEffect(() => {
        console.log(`Prompt: ${prompt}`)
        if (prompt > 0 && prompt <= numPrompts) {
            setStart(false);
            setTime(0);
            setStart(true);

        } else if (prompt > numPrompts) {
            setStart(false);
            setTime(0);
            setPrompt(0);
            setState('done');
        }
        console.log(activatedButtonsAt(prompt));
        setActivatedButtons(activatedButtonsAt(prompt));
    }, [prompt]);

    const onClick = () => {
        console.log(`Clicked: ${clicks}`);
        setClicks(clicks + 1);
    };

    // Not sure if this is the right way to be called from the component itself
    // Overhead??
    const isEnabled = (index) => {
        if (state === 'prepare') {
            return true;
        }

        if (index === activatedButtons.first && clicks % 2 === 0 ) {
            return false;
        }

        if (index === activatedButtons.second && clicks % 2 === 1) {
            return false;
        }

        return true;
    }

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
            <Button onClick={() => {setState('start')}} >Mock start</Button>
            {configuration.map(({ Button, width, height, x, y, boundary }, index) => {
                return (
                    <SizeableDraggableBox
                        key={index}
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
                        active={state === 'prepare'}
                    >
                        <Button disabled={isEnabled(index)} onClick={onClick} />
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