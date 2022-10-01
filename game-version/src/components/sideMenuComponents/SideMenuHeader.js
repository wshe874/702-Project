import { Grid, Paper } from '@mui/material';


const SideMenuHeader = () => {

  const cell = {
    padding: 0,
    textAlign: "center",
    fontSize: '13px',
    backgroundColor: 'transparent'
  }


  return (
    <>
        <Grid item xs={2}>
          <Paper elevation={0} style={cell}>Prompt</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={0} style={cell}>Width</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={0} style={cell}>Height</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={0} style={cell}>Distance</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={0} style={cell}>Average movement time (ms)</Paper>
        </Grid>
      </>
  );
};

export default SideMenuHeader;
