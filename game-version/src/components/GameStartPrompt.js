import { Box, Button, IconButton } from '@mui/material';
import { useContext, useState } from 'react';
import { GameLogicContext } from '../contexts/GameLogicContextProvider';
import { gameStatus } from '../utils/gameUtils';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const GameStartPrompt = () => {
  const { setGameProgress } = useContext(GameLogicContext);
  const [infoPage, setInfoPage] = useState(1);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        p: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {infoPage === 1 ? (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            p: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: '70%',
            }}
          >
            <h3>Fitts’ law</h3>
            <p>
              Fitts' law is a model for predicting human movement and is often used in the human–computer interaction
              (HCI) field. The law models the <b>movement time (MT)</b> or time to complete a clicking task as a
              function of the <b>distance to a target (D)</b> and the <b>target width (W)</b>:
            </p>

            <p style={{ backgroundColor: 'rgb(179, 219, 89, 50%)', padding: '8px 24px', borderRadius: '2rem' }}>
              <i>
                <b>MT = a + b log_2(D/W + 1)</b>
              </i>
            </p>

            <p>
              where <b>a</b> and <b>b</b> are coefficients determined through experiments so you do not have to worry
              about these.
            </p>

            <p>
              The key takeaway here is that the <b>the distance and the target size will determine the movement time</b>
              .
            </p>
          </Box>
          <Box
            sx={{
              width: '10%',
            }}
          >
            <IconButton size='large' edge='start' color='inherit' onClick={() => setInfoPage(2)}>
              <AiOutlineArrowRight />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            p: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: '10%',
            }}
          >
            <IconButton size='large' edge='start' color='inherit' padding='2' onClick={() => setInfoPage(1)}>
              <AiOutlineArrowLeft />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: '70%',
            }}
          >
            <h3>How to play </h3>
            <p>
              An interface will be given for you to improve by dragging and resizing buttons for better interactions.
              With the redesigned interface, press the <b>‘Ready’</b> button to start the clicking tasks. You will be
              prompted to complete <b>6 clicking tasks</b>. The faster you complete the clicking tasks, the more the
              plant will grow.
            </p>
            <p>
              <b>3 attempts</b> will be given. If the movement time has not improved after the 3rd attempt, the plant
              will die.
            </p>
            <p>
              Click <b>‘Start’</b> to begin designing the interface.
            </p>
            <Button variant='contained' disableElevation onClick={() => setGameProgress(gameStatus.DESIGN_IN_PROGRESS)}>
              Start
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default GameStartPrompt;
