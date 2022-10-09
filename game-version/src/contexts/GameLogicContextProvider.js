import { useEffect, useState } from "react";
import { createContext } from "react";
import { initialTotalID, gameStatus } from "../utils/gameUtils";

const GameLogicContext = createContext(undefined);

function GameLogicContextProvider({ children }) {
  const [gameProgress, setGameProgress] = useState(gameStatus.NOT_OPEN);
  const [gameResults, setGameResults] = useState([]); // use this state to get all the games results for each attempt
  const [gameRounds, setGameRounds] = useState(1);
  const [previousID, setPreviousID] = useState(initialTotalID());
  const [plantStage, setPlantStage] = useState(0); // use this state to get the plant state
  const [numFails, setNumFails] = useState(0);
  const [lastRoundResult, setLastRoundResult] = useState({}); //use this state to compare with the result from last round
  const [numOfAttempts, setNumOfAttempts] = useState(0); // Use this to determine whether we have just finished the very first attempt or not
  const [tableColor,setTableColor] = useState("black"); // This is the colour of the side-bar's text

  const resetAllStates = () => {
    setGameProgress(gameStatus.NOT_OPEN);
    setGameResults([]);
    setGameRounds(1);
    setPreviousID(initialTotalID());
    setPlantStage(0);
    setNumFails(0);
    setLastRoundResult({});
    setNumOfAttempts(0);
    setTableColor("black");
  }


  const determineFinishByFails = () => {
    if (numFails === 2) {
      setGameProgress(gameStatus.FINISHED);
      setPlantStage(4);
    } else {
      setGameProgress(gameStatus.DESIGN_IN_PROGRESS);
      setNumFails(numFails + 1);
    }
  };

  const onSuccessfulAttempt = (params) => {
    setGameProgress(gameStatus.DESIGN_IN_PROGRESS);
    setGameRounds(gameRounds + 1);
    setPreviousID(params.newID);
    setPlantStage(params.stage);
    setNumFails(0);
    setLastRoundResult(params.results);
  };

  const updateGameStatus = (results) => {
    let newID = 0;
    let index = 0;
    while (index < 6) {
      newID += results[index].id;
      index++;
    }

    setNumOfAttempts(oldValue => {return oldValue + 1});

    // Setting the colour of the side-bar's table's text
    if (numOfAttempts === 0) {
      // Yes, when numOfAttemps = 0, because have not updated at this stage yet.
      setTableColor("black");
    } else if (previousID > newID) {
      setTableColor("green");
    } else if (previousID < newID) {
      setTableColor("red");
    }

    console.log(previousID + "previous id");
    console.log(newID + "new id");


    setGameResults([...gameResults, results]);
    if (previousID > newID) {
      if (newID < 3.3) {
        setPlantStage(3);
        setGameProgress(gameStatus.FINISHED);
      } else {
        const differenceInID = previousID - newID;

        switch (gameRounds) {
          case 1:
            if (differenceInID / previousID > 0.1) {
              onSuccessfulAttempt({ results: results, newID: newID, stage: 1 });
            } else {
              determineFinishByFails();
            }
            break;
          case 2:
            if (differenceInID / previousID > 0.15) {
              onSuccessfulAttempt({ results: results, newID: newID, stage: 2 });
            } else {
              determineFinishByFails();
            }
            break;
          case 3:
            if (differenceInID / previousID > 0.18) {
              onSuccessfulAttempt({ results: results, newID: newID, stage: 3 });
              setGameProgress(gameStatus.FINISHED);
            } else {
              determineFinishByFails();
            }
            break;
          default:
            break;
        }
      }
    } else {
      determineFinishByFails();
    }
  };

  const context = {
    gameProgress,
    gameResults,
    setGameProgress,
    gameRounds,
    updateGameStatus,
    plantStage,
    setPlantStage,
    numFails,
    tableColor,
    resetAllStates
  };

  return (
    <GameLogicContext.Provider value={context}>
      {children}
    </GameLogicContext.Provider>
  );
}

export { GameLogicContext, GameLogicContextProvider };
