import { useState } from "react";
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

  const determineFinishByFails = () => {
    if (numFails === 2) {
      setGameProgress(gameStatus.FINISHED);
      setPlantStage(5);
    } else {
      setNumFails(numFails + 1);
    }
  };

  const onSuccessfulAttempt = (params) => {
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
    setGameResults([...gameResults, results]);
    if (previousID > newID) {
      if (newID < 3.5) {
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
  };

  return (
    <GameLogicContext.Provider value={context}>
      {children}
    </GameLogicContext.Provider>
  );
}

export { GameLogicContext, GameLogicContextProvider };
