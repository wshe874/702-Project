import { useState } from "react";
import { createContext } from "react";
import { initialTotalID, gameStatus } from "../utils/gameUtils";

const GameLogicContext = createContext(undefined);

function GameLogicContextProvider({ children }) {
  const [gameProgress, setGameProgress] = useState(gameStatus.NOT_OPEN); // false means game has not started
  const [gameResults, setGameResults] = useState([]);
  const [gameRounds, setGameRounds] = useState(1);
  const [previousID, setPreviousID] = useState(initialTotalID());
  const [plantStage, setPlantStage] = useState(0);
  const [numFails, setNumFails] = useState(0);

  console.log("in context numfails " + numFails);
  console.log(gameResults);

  const updateGameStatus = (results) => {
    let newID = 0;
    let index = 0;
    while (index < 6) {
      newID += results[index].id;
      index++;
    }
    if (previousID > newID) {
      const differenceInID = previousID - newID;
      switch (gameRounds) {
        case 1:
          if (differenceInID > 0.2) {
            setGameRounds(gameRounds + 1);
            setPreviousID(newID);
            setPlantStage(1);
            setNumFails(0);
            setGameResults([...gameResults, results]);
          } else {
            if (numFails === 3) {
              setGameProgress(gameStatus.FINISHED);
              setPlantStage(5);
            } else {
              setNumFails(numFails + 1);
            }
          }
          break;
        case 2:
          if (differenceInID > 0.2) {
            setGameRounds(gameRounds + 1);
            setPreviousID(newID);
            setPlantStage(2);
            setNumFails(0);
            setGameResults([...gameResults, results]);
          } else {
            if (numFails === 3) {
              setGameProgress(gameStatus.FINISHED);
              setPlantStage(5);
            } else {
              setNumFails(numFails + 1);
            }
          }
          break;
        case 3:
          if (differenceInID > 0.2) {
            setGameProgress(gameStatus.FINISHED);
            setPlantStage(3);
            setGameResults([...gameResults, results]);
          } else {
            if (numFails === 3) {
              setGameProgress(gameStatus.FINISHED);
              setPlantStage(5);
            } else {
              setNumFails(numFails + 1);
            }
          }
          break;
        default:
          break;
      }
    } else {
      if (numFails === 3) {
        setGameProgress(gameStatus.FINISHED);
        setPlantStage(5);
      } else {
        setNumFails(numFails + 1);
      }
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
