import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { MdHome } from 'react-icons/md';
import { GameLogicContext } from '../contexts/GameLogicContextProvider';
import { gameStatus } from '../utils/gameUtils';
import { useContext } from 'react';

const Header = ({ level }) => {
  const {gameProgress} = useContext(GameLogicContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            {level}
          </Typography>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' disabled={gameProgress === gameStatus.IN_PROGRESS} sx={{ mr: 2 }}>
            <MdHome />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
