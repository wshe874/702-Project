import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { MdHome } from 'react-icons/md';

const Header = ({ level }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            {level}
          </Typography>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <MdHome />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
