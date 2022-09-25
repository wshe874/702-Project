import { useContext, useEffect, useState } from 'react';
import { Grid, Item } from '@mui/material';


const SideMenuTable = () => {


  const columnStyle = {
    fontSize: '13px',
    textAlign: 'center'
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
            sx={{borderBottom: '1px solid black', paddingBottom: '5px'}}>
              {/* This is the row with the column headers */}
              <Grid item xs={2} md={2}>
                <div style={columnStyle}>Attempt</div>
              </Grid>
              <Grid item xs={2} md={2}>
                <div style={columnStyle}>Width</div>
              </Grid>
              <Grid item xs={2} md={2}>
                <div style={columnStyle}>Height</div>
              </Grid>
              <Grid item xs={2} md={2}>
                <div style={columnStyle}>Distance</div>
              </Grid>
              <Grid item xs={2} md={2}>
                <div style={columnStyle}>Average movement time (ms)</div>
              </Grid>
          </Grid>
        </Grid>
  );
};

export default SideMenuTable;
