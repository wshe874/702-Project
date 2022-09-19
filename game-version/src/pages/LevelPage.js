import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import EditingBoard from '../components/EditingBoard';

const LevelPage = ({ level = 'Level 1: Canvas' }) => {
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
            <EditingBoard />
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
