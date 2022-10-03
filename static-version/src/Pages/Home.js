import React from "react";
import Animation from "../components/Animation";
import Grid from '@mui/material/Grid';
import { Box, Button } from "@mui/material";
import { Link } from 'react-router-dom'

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
              direction="column" justifyContent='center' alignItems='center' item xs={12}>
            <h1>Game of Fitts'</h1>
            <Button component={Link} to="/game" sx={{color: 'black', backgroundColor: '#b3db59'}} variant="outlined" size="large" disableRipple>Start</Button>
          </Grid>
        </Grid>
      </Box>
  </>
);
}


function Home2() {
  return (
    <div>
      Welcome
      <div className="App" style={{ display: "flex" }}>
        <div style={{ height: "200px", width: "200px" }}>
          <Animation stage={0}></Animation>
        </div>
        <div style={{ height: "200px", width: "200px" }}>
          <Animation stage={1}></Animation>
        </div>
        <div style={{ height: "200px", width: "200px" }}>
          <Animation stage={2}></Animation>
        </div>
        <div style={{ height: "200px", width: "200px" }}>
          <Animation stage={3}></Animation>
        </div>
        <div style={{ height: "200px", width: "200px" }}>
          <Animation stage={4}></Animation>
        </div>
      </div>
    </div>

  );
}

export default Home;
