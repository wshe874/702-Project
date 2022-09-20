import { useState } from "react";
import { createContext } from "react";
import CourseOneButton from "../components/courseButtons/CourseOneButton";
import CourseTwoButton from "../components/courseButtons/CourseTwoButton";
import DashboardButton from "../components/menuButtons/DashboardButton";
import ProfileButton from "../components/menuButtons/ProfileButton";
import TodoOneButton from "../components/todoButtons/TodoOneButton";
import TodoTwoButton from "../components/todoButtons/TodoTwoButton";

const GameContext = createContext(undefined);

function GameContextProvider({ children }) {
    const menuBoundary = {
        className: 'menuBoundary',
        dimension: {
            top: 0,
            left: 0,
            width: 800,
            height: 270,
        }
    };

    const courseBoundary = {
        className: 'courseBoundary',
        dimension: {
            top: 90,
            left: 90,
            width: 710,
            height: 1,
        }
    };

    const todoBoundary = {
        className: 'todoBoundary',
        dimension: {
            top: 0,
            left: 800,
            width: 1,
            height: 1,
        }
    };


    const [configuration, setConfiguration] = useState([
        {
            width: 90,
            height: 90,
            x: 0,
            y: 90,
            Button: ProfileButton,
            boundary: menuBoundary
        },
        {
            width: 90,
            height: 90,
            x: 0,
            y: 180,
            Button: DashboardButton,
            boundary: menuBoundary
        },
        {
            width: 262,
            height: 285,
            x: 200,
            y: 270,
            Button: CourseOneButton,
            boundary: courseBoundary
        },
        {
            width: 262,
            height: 285,
            x: 500,
            y: 270,
            Button: CourseTwoButton,
            boundary: courseBoundary
        },
        {
            width: 215,
            height: 140,
            x: 1000,
            y: 150,
            Button: TodoOneButton,
            boundary: todoBoundary
        },
        {
            width: 215,
            height: 170,
            x: 1000,
            y: 300,
            Button: TodoTwoButton,
            boundary: todoBoundary
        }
    ]);

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