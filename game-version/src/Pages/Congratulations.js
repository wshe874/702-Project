import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Animation from "../components/Animation";
import BarChart from "../components/BarChart";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { GameLogicContext } from "../contexts/GameLogicContextProvider";
import {CSVLink} from "react-csv";

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

  const data = [];

  const headers = [
    { label: "Round", key: "round" },
    { label: "Prompt number", key: "promptNumber" },
    { label: "Average Movement Time", key: "avgMovementTime" },
    { label: "Distance", key: "distance" },
    { label: "ID", key: "id" },
    { label: "Button Height1", key: "btnHeight1" },
    { label: "Button Width1", key: "btnWidth1" },
    { label: "Button X1", key: "btnX1" },
    { label: "Button Y1", key: "btnY1" },
    { label: "Button Height2", key: "btnHeight2" },
    { label: "Button Width2", key: "btnWidth2" },
    { label: "Button X2", key: "btnX2" },
    { label: "Button Y2", key: "btnY2" }
  ];

  function convertToCSV(results){
    
    for (let i = 0; i < results.length; i++) {
      for (let j = 0; j < 6; j++) {
        let object = {
          round:results[i][j].round, 
          promptNumber:j+1, 
          avgMovementTime:results[i][j].averageMovementTime, 
          distance:results[i][j].distance,
          id:results[i][j].id,
          btnHeight1:results[i][j].buttonConfigurations[0].height,
          btnWidth1:results[i][j].buttonConfigurations[0].width,
          btnX1:results[i][j].buttonConfigurations[0].x,
          btnY1:results[i][j].buttonConfigurations[0].y,
          btnHeight2:results[i][j].buttonConfigurations[1].height,
          btnWidth2:results[i][j].buttonConfigurations[1].width,
          btnX2:results[i][j].buttonConfigurations[1].x,
          btnY2:results[i][j].buttonConfigurations[1].y,
        };
        console.log(object);
        data.push(object);
      }
    }
    return console.log(data);
  }

  convertToCSV(gameResults);
  
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
            <CSVLink data={data} header={headers}>Save</CSVLink>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Congratulations;
