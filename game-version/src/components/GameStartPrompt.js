import { Box, Button } from '@mui/material';
import { useContext } from 'react';
import { GameLogicContext } from '../contexts/GameLogicContextProvider';
import { gameStatus } from '../utils/gameUtils';

const GameStartPrompt = () => {
  const { setGameProgress } = useContext(GameLogicContext);
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        p: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p>Write some instructions about the game for the users to know </p>
      <Button variant='contained' disableElevation onClick={() => setGameProgress(gameStatus.IN_PROGRESS)}>
        Start
      </Button>
    </Box>
  );
};

export default GameStartPrompt;
