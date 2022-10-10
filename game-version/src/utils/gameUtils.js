import CourseOneButton from "../components/courseButtons/CourseOneButton";
import CourseTwoButton from "../components/courseButtons/CourseTwoButton";
import DashboardButton from "../components/menuButtons/DashboardButton";
import ProfileButton from "../components/menuButtons/ProfileButton";
import TodoOneButton from "../components/TodoButtons/TodoOneButton";
import TodoTwoButton from "../components/TodoButtons/TodoTwoButton";

const menuBoundary = {
  className: "menuBoundary",
  dimension: {
    top: 0,
    left: 0,
    width: 90,
    height: 1,
  },
};

const generalBoundary = {
    className: 'courseBoundary',
    dimension: {
        top: 0,
        left: 95, // Buffer to avoid edge collision
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
    boundary: menuBoundary,
  },
  {
    width: 90,
    height: 90,
    x: 0,
    y: 180,
    Button: DashboardButton,
    boundary: menuBoundary,
  },
  {
    width: 262,
    height: 285,
    x: 200,
    y: 270,
    Button: CourseOneButton,
    boundary: generalBoundary,
  },
  {
    width: 262,
    height: 285,
    x: 500,
    y: 270,
    Button: CourseTwoButton,
    boundary: generalBoundary,
  },
  {
    width: 215,
    height: 140,
    x: 1000,
    y: 150,
    Button: TodoOneButton,
    boundary: generalBoundary,
  },
  {
    width: 215,
    height: 170,
    x: 1000,
    y: 300,
    Button: TodoTwoButton,
    boundary: generalBoundary,
  },
];

const getInitialConfiguration = () => {
  return initialConfiguration;
};

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
};

const calculateId = (width, distance) => {
  return Math.log(distance / width + 1) / Math.log(2);
};

const initialTotalID = ()=>{
    let index = 1;
    let indexOfDifficulty = 0;
    while(index < 7){
        const activatedButtons = activatedButtonsAt(index);
        const x1 = (initialConfiguration[activatedButtons.second].x + initialConfiguration[activatedButtons.second].width) / 2;
        const y1 = (initialConfiguration[activatedButtons.second].y + initialConfiguration[activatedButtons.second].height) / 2;

        const x2 = (initialConfiguration[activatedButtons.first].x + initialConfiguration[activatedButtons.first].width) / 2;
        const y2 = (initialConfiguration[activatedButtons.first].y + initialConfiguration[activatedButtons.first].height) / 2;

        const distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        indexOfDifficulty += calculateId(initialConfiguration[activatedButtons.second].width, distance)
        index++;
    }

    return indexOfDifficulty;
}

const gameStatus = {
    NOT_OPEN:'Not Open',
    DESIGN_IN_PROGRESS: 'Design In Progress',
    IN_PROGRESS:'In Progress',
    FINISHED:'Finished'
}

const pickPrompt = (value) => {
  switch (value){
    case 1: return "Go to the Account page. Then go to the ECE Health & Safety Induction course page. Repeat 3x times"; 
    case 2: return "Go to the Account page. Then view the mid-semester break announcement. Repeat 3x times"; 
    case 3: return "Go to the Dashboard page. Then go to the Account page. Repeat 3x times"; 
    case 4: return "Go to the ENGGEN 403 course page. Then view the mid-semester break announcement. Repeat 3x times"; 
    case 5: return "Go to the ECE Health & Safety Induction course page. Then go to the ENGGEN 403 course page. Repeat 3x times"; 
    case 6: return "View the in-person safety induction announcement. Then view the mid-semester break announcement. Repeat 3x times"; 
   }

}

export { getInitialConfiguration, activatedButtonsAt, calculateId, initialTotalID, gameStatus,pickPrompt };
