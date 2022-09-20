import { useState } from "react";
import { createContext } from "react";
import { getInitialConfiguration } from "../utils/gameUtils";

const GameContext = createContext(undefined);

function GameContextProvider({ children }) {
    const [configuration, setConfiguration] = useState(getInitialConfiguration());

    const changePosition = (index, newX, newY) => {
        const newConfiguration = [...configuration];
        newConfiguration[index].x = newX;
        newConfiguration[index].y = newY;

        setConfiguration(newConfiguration);
    }

    const changeSize = (index, newWidth, newHeight) => {
        const newConfiguration = [...configuration];
        newConfiguration[index].width = newWidth;
        newConfiguration[index].height = newHeight;

        setConfiguration(newConfiguration);
    }

    const context = {
        configuration,
        changePosition,
        changeSize,
    };

    return (
        <GameContext.Provider value={context}>
            {children}
        </GameContext.Provider>
    )
}

export { GameContext, GameContextProvider };