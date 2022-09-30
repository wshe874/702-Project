import { Grid, Paper } from '@mui/material';


const SideMenuHeader = () => {

  const cell = {
    padding: 0,
    textAlign: "center",
    fontSize: '13px'
  }


  return (
    <>
        <Grid item xs={2}>
          <Paper style={cell}>Prompt</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper style={cell}>Width</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper style={cell}>Height</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper style={cell}>Distance</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper style={cell}>Average movement time (ms)</Paper>
        </Grid>
      </>
  );
};

export default SideMenuHeader;
