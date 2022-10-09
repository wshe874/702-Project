import { useState } from "react";
import { createContext } from "react";
import { getInitialConfiguration } from "../utils/gameUtils";

const GameContext = createContext(undefined);

function GameContextProvider({ children }) {
    const [configuration, setConfiguration] = useState(getInitialConfiguration());

    const resetConfiguration= () =>{
        const temp = [...configuration];
        temp[0].width = 90;
        temp[0].height = 90;
        temp[0].x = 0;
        temp[0].y=90;
        temp[1].width = 90;
        temp[1].height = 90;
        temp[1].x = 0;
        temp[1].y=180;
        temp[2].width = 262;
        temp[2].height = 285;
        temp[2].x = 200;
        temp[2].y=270;
        temp[3].width = 262;
        temp[3].height = 285;
        temp[3].x = 500;
        temp[3].y=270;
        temp[4].width = 215;
        temp[4].height = 140;
        temp[4].x = 1000;
        temp[4].y=150;
        temp[5].width = 215;
        temp[5].height = 170;
        temp[5].x = 1000;
        temp[5].y=300;
        setConfiguration(temp);
    }


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
        resetConfiguration
    };

    return (
        <GameContext.Provider value={context}>
            {children}
        </GameContext.Provider>
    )
}

export { GameContext, GameContextProvider };