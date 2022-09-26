import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Animation from "../components/Animation";
import BarChart from "../components/BarChart";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { placeholderGameData } from "../utils/placeholderGameData";
import { GameLogicContext } from "../contexts/GameLogicContextProvider";

function Congratulations() {
  const options = {
    animation: {
      duration: 5000,
    },
  };

  const { plantStage } = useContext(GameLogicContext);
  const [gameData, setGameDate] = useState({
    labels: ["Attempt 1", "Attempt 2", "Attempt 3"],
    datasets: [
      {
        label: "Prompt 1",
        data: placeholderGameData.map((data) => data.promptTimes[0]),
        backgroundColor: ["#AF81C9"],
      },
      {
        label: "Prompt 2",
        data: placeholderGameData.map((data) => data.promptTimes[1]),
        backgroundColor: ["#F89A7E"],
      },
      {
        label: "Prompt 3",
        data: placeholderGameData.map((data) => data.promptTimes[2]),
        backgroundColor: ["#F2CA85"],
      },
      {
        label: "Prompt 4",
        data: placeholderGameData.map((data) => data.promptTimes[3]),
        backgroundColor: ["#54D1F1"],
      },
      {
        label: "Prompt 5",
        data: placeholderGameData.map((data) => data.promptTimes[4]),
        backgroundColor: ["#7C71AD"],
      },
      {
        label: "Prompt 6",
        data: placeholderGameData.map((data) => data.promptTimes[5]),
        backgroundColor: ["#445569"],
      },
    ],
  });
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
                  Your best result!
                </Typography>
                <br></br>
                <Typography variant="body2" color="text.secondary">
                  Average time in milliseconds (ms) for each successful attempt
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
