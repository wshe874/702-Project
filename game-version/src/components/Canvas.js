import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../contexts/GameContextProvider';
import SizeableDraggableBox from './SizeableDraggableBox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import logo from '../images/uoa_white_logo.png';
import { Button, Typography } from '@mui/material';
import { activatedButtonsAt, calculateId, gameStatus, pickPrompt } from '../utils/gameUtils';
import { GameLogicContext } from '../contexts/GameLogicContextProvider';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Canvas() {
    const numPrompts = 6;
    const numClicks = 6;

    const { configuration, changePosition, changeSize } = useContext(GameContext);
    const {gameProgress,gameRounds, updateGameStatus} = useContext(GameLogicContext);
    const [prompt, setPrompt] = useState(0);
    const [activatedButtons, setActivatedButtons] = useState(activatedButtonsAt(prompt));
    const [clicks, setClicks] = useState(0);
    // const [state, setState] = useState(game); //prepare, start, done
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);
    const [averageMovementTime, setAverageMovementTime] = useState(0);
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const toastId = React.useRef(null);

    const notify = (prompt) => toastId.current = toast(pickPrompt(prompt), {position: "top-left"});

    const dismiss = () =>  toast.dismiss(toastId.current);


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
        if (gameProgress === gameStatus.IN_PROGRESS) {
            setPrompt(1);
        } else if (gameProgress === gameStatus.FINISHED) {
            setPrompt(0);
        }
    }, [gameProgress]);

    useEffect(() => {
        if (clicks % 2 === 0) {
            setStart(false);
            setTime(0);
        } else {
            setTime(0);
            setStart(true);
        }

        if (clicks >= numClicks) {
            dismiss()
            setClicks(0);
            setPrompt(p => p + 1);

            setStart(false);
            setTime(0);
            
            const x1 = (configuration[activatedButtons.second].x + configuration[activatedButtons.second].width) / 2;
            const y1 = (configuration[activatedButtons.second].y + configuration[activatedButtons.second].height) / 2;

            const x2 = (configuration[activatedButtons.first].x + configuration[activatedButtons.first].width) / 2;
            const y2 = (configuration[activatedButtons.first].y + configuration[activatedButtons.first].height) / 2;

            const distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
            setResults([...results, {
                round: gameRounds,
                averageMovementTime: averageMovementTime,
                id: calculateId(configuration[activatedButtons.second].width, distance),
                buttonConfigurations: [configuration[activatedButtons.first],configuration[activatedButtons.second]],
                distance: distance
            }])
        }

    }, [clicks, activatedButtons, averageMovementTime, configuration, results]);

    // Submitting the results for the attempt
    useEffect(() => {
        if (prompt > numPrompts) {
            updateGameStatus(results);
            setPrompt(0);
            // setState('prepare');
            setResults([]);
        }
        if(prompt > 0 && prompt <7){
            notify(prompt);
        }
        setActivatedButtons(activatedButtonsAt(prompt));
    }, [prompt]);

    useEffect(()=>{
        if(gameProgress===gameStatus.FINISHED){
            navigate('/congratulations');
        }
    },[gameProgress]);

    const onClick = () => {
        const newClicks = clicks + 1;

        if (newClicks % 2 === 0) {
            const size = newClicks / 2 - 1;
            const average = (size * averageMovementTime + time) / (size + 1);
            setAverageMovementTime(average);
        }

        setClicks(newClicks);
    };

    // Not sure if this is the right way to be called from the component itself
    // Overhead??
    const isDisabled = (index) => {
        if (gameProgress === gameStatus.DESIGN_IN_PROGRESS) {
            return true;
        }

        if (index === activatedButtons.first && clicks % 2 === 0) {
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
        <ToastContainer autoClose={false} closeOnClick={false} closeButton={false} />
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
                        active={gameProgress === gameStatus.DESIGN_IN_PROGRESS}
                    >
                        <Button disabled={isDisabled(index)} onClick={onClick} />
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