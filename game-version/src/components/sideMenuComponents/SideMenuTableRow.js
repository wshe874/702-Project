import { Grid, Paper } from '@mui/material';


const SideMenuTableRow = (props) => {

  const {prompt, buttonConfigurations, distance, mt} = props;

  const cell = {
    padding: 0,
    textAlign: "center",
    fontSize: '13px'
  }
  
  return (
    <>
        <Grid item xs={2}>
          <Paper style={cell}>{prompt}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper style={cell}>{buttonConfigurations[0].width}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper style={cell}>{buttonConfigurations[0].height}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper style={cell}>{distance}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper style={cell}>{mt}</Paper>
        </Grid>
      </>
  );
};

export default SideMenuTableRow;
