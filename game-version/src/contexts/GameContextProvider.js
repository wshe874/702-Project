import { useState } from "react";
import { createContext } from "react";

const GameContext = createContext(undefined);

function GameContextProvider({ children }) {
    const [configuration, setConfiguration] = useState([
        {
            width: 100,
            height: 50,
            x: 0,
            y: 0,
        },
        {
            width: 50,
            height: 50,
            x: 50,
            y: 50,
        },
        {
            width: 300,
            height: 120,
            x:500,
            y: 200,
        },
        {
            width: 50,
            height: 200,
            x: 10,
            y: 500
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