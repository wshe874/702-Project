import { useEffect, useState } from "react";
import { createContext } from "react";
import { initialTotalID, gameStatus } from "../utils/gameUtils";

const GameLogicContext = createContext(undefined);

function GameLogicContextProvider({ children }) {
  const [gameProgress, setGameProgress] = useState(gameStatus.NOT_OPEN);
  const [gameResults, setGameResults] = useState([]); // use this state to get all the games results for each attempt
  const [gameRounds, setGameRounds] = useState(1);
  const [previousID, setPreviousID] = useState(initialTotalID());
  const [numOfAttempts, setNumOfAttempts] = useState(0); // Use this to determine whether we have just finished the very first attempt or not
  const [tableColor,setTableColor] = useState("black"); // This is the colour of the side-bar's text

  const resetAllStates = () => {
    setGameProgress(gameStatus.NOT_OPEN);
    setGameResults([]);
    setGameRounds(1);
    setPreviousID(initialTotalID());
    setNumOfAttempts(0);
    setTableColor("black");
  }

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
    setGameResults([...gameResults, results]);
    if(gameRounds < 5){
      setGameProgress(gameStatus.DESIGN_IN_PROGRESS);
      setGameRounds(gameRounds + 1);
      setPreviousID(newID);
    }else{
      setGameProgress(gameStatus.FINISHED);
    }
  };

  const context = {
    gameProgress,
    gameResults,
    setGameProgress,
    gameRounds,
    updateGameStatus,
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
