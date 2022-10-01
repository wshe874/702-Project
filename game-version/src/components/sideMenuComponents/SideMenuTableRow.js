import { Grid, Paper } from '@mui/material';


const SideMenuTableRow = (props) => {

  const {prompt, buttonConfigurations, distance, mt, color} = props;

  const cell = {
    padding: 0,
    textAlign: "center",
    fontSize: '13px',
    backgroundColor: 'transparent',
    color: color
  }

  const topCell = {
    marginBottom: '4px',
  }

  const bottomCell = {
    marginTop: '4px'
  }

  function InnerGrid(props) {
    return (
      <>
        <Grid item xs={4}>
          <Paper elevation={0} style={{...cell, ...topCell}}>{props.value1}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={0} style={{...cell, ...bottomCell}}>{props.value2}</Paper>
        </Grid>
      </>
    );
  }
  
  return (
    <>
        <Grid item xs={2}>
          <Paper elevation={0} style={cell}>{prompt}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Grid container item
          direction="column" 
          justifyContent="space-between"
          alignItems="center"
          xs={12} spacing={0}>
            <InnerGrid value1={buttonConfigurations[0].width} value2={buttonConfigurations[1].width}/>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container item 
          direction="column" 
          justifyContent="space-between"
          alignItems="center"
          xs={12} spacing={0}>
            <InnerGrid value1={buttonConfigurations[0].height} value2={buttonConfigurations[1].height}/>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={0} style={cell}>{distance}</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper elevation={0} style={cell}>{mt}</Paper>
        </Grid>
      </>
  );
};

export default SideMenuTableRow;
