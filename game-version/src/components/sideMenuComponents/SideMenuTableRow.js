import { Grid } from '@mui/material';


const SideMenuTableRow = (props) => {

  const {prompt, width, height, distance, mt} = props;

  const columnStyle = {
    fontSize: '13px',
    textAlign: 'center',
    alignItems: 'center',
    border: '1px solid black',
    width: '20%',
    height: '100%',
    margin: '0',
    padding: '0'
  }


  return (
    <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center">
      <Grid container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center" 
        spacing={0}
        sx={{border: '1px solid black', padding: '5%'}}>
          {/* This is the row with the column headers */}
          <Grid item xs={2} md={2}>
            <div style={columnStyle}>{prompt}</div>
          </Grid>
          <Grid item xs={2} md={2}>
            <div style={columnStyle}>{width}</div>
          </Grid>
          <Grid item xs={2} md={2}>
            <div style={columnStyle}>{height}</div>
          </Grid>
          <Grid item xs={2} md={2}>
            <div style={columnStyle}>{distance}</div>
          </Grid>
          <Grid item xs={2} md={2}>
            <div style={columnStyle}>{mt}</div>
          </Grid>
      </Grid>
    </Grid>
  );
};

export default SideMenuTableRow;
