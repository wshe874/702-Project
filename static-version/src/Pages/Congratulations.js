import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Animation from "../components/Animation";
import BarChart from "../components/BarChart";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { GameLogicContext } from "../contexts/GameLogicContextProvider";
import { useNavigate } from "react-router-dom";

function Congratulations() {
  const options = {
    animation: {
      duration: 5000,
    },
  };

  let AttemptNumber = 0;
  const { gameResults, resetAllStates } = useContext(GameLogicContext);
  const navigate = useNavigate();

  const finalLabels = gameResults.map((result) => {
    AttemptNumber++;
    return "Attempt " + AttemptNumber;
  });

  const indexOfPerformances = gameResults.map((result) => {
    let totalID = 0;
    let totalMT = 0;
    result.forEach((data) => {
      totalID += data.id;
    });
    result.forEach((data) => {
      totalMT += data.averageMovementTime;
    });
    return totalID / totalMT;
  });

  const gameData = {
    labels: finalLabels,
    datasets: [
      {
        label: "Performance Index",
        data: indexOfPerformances,
        backgroundColor: ["#AF81C9"],
      },
    ],
  };

  const onclickPlayAgain = () => {
    resetAllStates();
  };

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
            <h1>You are done!</h1>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            item
            xs={6}
          >
            <Card style={{ border: "2px solid #b3db59" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  See your progress here!
                </Typography>
                <br></br>
                <Typography variant="body2" color="text.secondary">
                  Index of Performance for Each Attempt
                </Typography>
                <br></br>
                <div style={{ height: "380px", width: "700px" }}>
                  <BarChart chartData={gameData} options={options} />
                </div>
              </CardContent>
            </Card>
            <Button
              component={Link}
              to="/game"
              sx={{ color: "black", backgroundColor: "#b3db59" }}
              variant="outlined"
              size="large"
              onClick={onclickPlayAgain}
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
