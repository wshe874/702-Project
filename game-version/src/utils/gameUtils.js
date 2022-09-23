import CourseOneButton from "../components/courseButtons/CourseOneButton";
import CourseTwoButton from "../components/courseButtons/CourseTwoButton";
import DashboardButton from "../components/menuButtons/DashboardButton";
import ProfileButton from "../components/menuButtons/ProfileButton";
import TodoOneButton from "../components/TodoButtons/TodoOneButton";
import TodoTwoButton from "../components/TodoButtons/TodoTwoButton";

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

const initialConfiguration = [
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
];

const getInitialConfiguration = () => {
    return initialConfiguration;
}

const activatedButtonsAt = (prompt) => {
    let activatedButtons = {};
    switch (prompt) {
        case 1:
            activatedButtons.first = 0;
            activatedButtons.second = 2;
            break;
        case 2:
            activatedButtons.first = 0;
            activatedButtons.second = 4;
            break;
        case 3:
            activatedButtons.first = 1;
            activatedButtons.second = 0;
            break;
        case 4:
            activatedButtons.first = 3;
            activatedButtons.second = 4;
            break;
        case 5:
            activatedButtons.first = 2;
            activatedButtons.second = 3;
            break;
        case 6:
            activatedButtons.first = 5;
            activatedButtons.second = 4;
            break;
        default:
            activatedButtons.first = undefined;
            activatedButtons.second = undefined;
    }
    return activatedButtons;
}

const calculateId = (width, distance) => {
    return Math.log(distance / width + 1) / Math.log(2);
}

export { getInitialConfiguration, activatedButtonsAt, calculateId };