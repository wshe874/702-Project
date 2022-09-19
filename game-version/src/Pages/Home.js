import React from "react";
import Grid from '@mui/material/Grid';
import { Box, Button } from "@mui/material";

function Home() {

  return(
  <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'stretch',
          p: 2,
          height: '87vh',
        }}
      >
        <Grid container spacing={2} justifyContent="space-around">
          <Grid container
              direction="column" justifyContent='center' alignItems='center' item xs={6}>
            <h1>Game of Fitts'</h1>
            <Button sx={{color: 'black', backgroundColor: '#b3db59'}} variant="outlined" size="large" disableRipple>Start</Button>
          </Grid>
          <Grid container direction="column" justifyContent='center' alignItems='center' item xs={6}>
            <p>plant</p>
          </Grid>
        </Grid>
      </Box>
  </>
    
  );
}

export default Home;
