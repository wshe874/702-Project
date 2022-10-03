import { useState } from "react";
import { createContext } from "react";
import { getInitialConfiguration } from "../utils/gameUtils";

const GameContext = createContext(undefined);

function GameContextProvider({ children }) {
    const [configuration, setConfiguration] = useState(getInitialConfiguration());


    const hasCollision = (index, x, y, width, height) => {
        for (let i = 0; i < configuration.length; i++) {
            if (i === index) {
                continue;
            }

            const comparedComponent = configuration[i];

            if (!(x > comparedComponent.x + comparedComponent.width ||
                x + width < comparedComponent.x ||
                y > comparedComponent.y + comparedComponent.height ||
                y + height < comparedComponent.y)) {
                return true;
            }
        }

        return false;
    }

    const changePosition = (index, newX, newY) => {
        if (hasCollision(index, newX, newY, configuration[index].width, configuration[index].height)) {
            return;
        }


        const newConfiguration = [...configuration];
        newConfiguration[index].x = newX;
        newConfiguration[index].y = newY;

        setConfiguration(newConfiguration);
    }

    const changeSize = (index, newWidth, newHeight) => {
        if (hasCollision(index,  configuration[index].x,  configuration[index].y, newWidth, newHeight)) {
            return;
        }

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