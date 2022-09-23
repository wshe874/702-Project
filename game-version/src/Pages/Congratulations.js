import React from "react";
import Grid from "@mui/material/Grid";
import Animation from "../components/Animation";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Congratulations() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "stretch",
          p: 2,
          height: "87vh",
        }}
      >
        <Grid container spacing={2} justifyContent="space-around">
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            item
            xs={6}
          >
            <h1>Congratulations!</h1>
            <div style={{ height: "600px", width: "600px" }}>
              <Animation stage={4}></Animation>
            </div>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            item
            xs={6}
          >
            <Card style={{ border: "2px solid #b3db59" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Your best result!
                </Typography>
              </CardContent>
            </Card>
            <Button
              component={Link}
              to="/game"
              sx={{ color: "black", backgroundColor: "#b3db59" }}
              variant="outlined"
              size="large"
              disableRipple
            >
              Play again
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Congratulations;
