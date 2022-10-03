import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Animation from "../components/Animation";
import BarChart from "../components/BarChart";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { GameLogicContext } from "../contexts/GameLogicContextProvider";

function Congratulations() {
  const options = {
    animation: {
      duration: 5000,
    },
  };

  let AttemptNumber = 0;
  const { plantStage, gameResults } = useContext(GameLogicContext);
  const finalLabels = gameResults.map((result) => {
    AttemptNumber++;
    return "Attempt " + AttemptNumber;
  });

  const gameData = {
    labels: finalLabels,
    datasets: [
      {
        label: "Prompt 1",
        data: gameResults.map((data) => data[0].averageMovementTime),
        backgroundColor: ["#AF81C9"],
      },
      {
        label: "Prompt 2",
        data: gameResults.map((data) => data[1].averageMovementTime),
        backgroundColor: ["#F89A7E"],
      },
      {
        label: "Prompt 3",
        data: gameResults.map((data) => data[2].averageMovementTime),
        backgroundColor: ["#F2CA85"],
      },
      {
        label: "Prompt 4",
        data: gameResults.map((data) => data[3].averageMovementTime),
        backgroundColor: ["#54D1F1"],
      },
      {
        label: "Prompt 5",
        data: gameResults.map((data) => data[4].averageMovementTime),
        backgroundColor: ["#7C71AD"],
      },
      {
        label: "Prompt 6",
        data: gameResults.map((data) => data[5].averageMovementTime),
        backgroundColor: ["#445569"],
      },
    ],
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
            {plantStage === 4 ? <h1>Better Luck Next Time!</h1>:<h1>Congratulations!</h1>}
            <div style={{ height: "600px", width: "600px" }}>
              <Animation stage={plantStage}></Animation>
            </div>
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
                  Average time in milliseconds (ms) for each attempt
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
