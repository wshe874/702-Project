import { useState } from "react";
import { createContext } from "react";

const GameContext = createContext(undefined);

function GameContextProvider({ children }) {
    const [configuration, setConfiguration] = useState([
        {
            width: 90,
            height: 90,
            x: 0,
            y: 90,
        },
        {
            width: 90,
            height: 90,
            x: 0,
            y: 180,
        },
        {
            width: 262,
            height: 285,
            x: 500,
            y: 200,
        },
        {
            width: 262,
            height: 285,
            x: 800,
            y: 200,
        }
    ]);
    console.log(configuration);

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