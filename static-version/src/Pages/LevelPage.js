import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import EditingBoard from '../components/EditingBoard';
import { useContext } from 'react';
import { GameLogicContext } from '../contexts/GameLogicContextProvider';
import GameStartPrompt from '../components/GameStartPrompt';
import { gameStatus } from '../utils/gameUtils';

const LevelPage = ({ level = 'Level 1: Canvas' }) => {
  const { gameProgress } = useContext(GameLogicContext);

  return (
    <>
      <Header level={level} />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'stretch',
          p: 2,
          height: '87vh',
        }}
      >
        <Grid container spacing={2}>
          <Grid justifyContent='center' alignItems='stretch' item xs={9}>
            {gameProgress === gameStatus.NOT_OPEN ? <GameStartPrompt /> : <EditingBoard />}
          </Grid>
          <Grid justifyContent='center' alignItems='stretch' item xs={3}>
            <SideMenu />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LevelPage;
