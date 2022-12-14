import { useContext, useEffect, useState } from 'react';
import { Card, CardContent, Button, Grid, Paper } from '@mui/material';
import Animation from '../components/Animation';
import { GameLogicContext } from '../contexts/GameLogicContextProvider';
import SideMenuTable from './sideMenuComponents/SideMenuTable';
import { gameStatus } from '../utils/gameUtils';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const SideMenu = () => {
  const { plantStage, setPlantStage, tableColor, gameProgress, numFails, setGameProgress } =
    useContext(GameLogicContext);
  const [localPlantStage, setLocalPlantStage] = useState(plantStage);

  useEffect(() => {
    setLocalPlantStage(plantStage);
  }, [plantStage, setPlantStage, setLocalPlantStage, localPlantStage]);

  const readyBtn = {
    color: 'black',
    backgroundColor: '#b3db59',
  };

  const classes = {
    root: {
      flexGrow: 1,
    },
    paper: {
      textAlign: 'center',
      color: 'blue',
      backgroundColor: 'transparent',
      height: '100%',
    },
  };

  return (
    <Card sx={{ width: '100%', height: '100%', background: '#f4f4f4', boxShadow: 'none', borderRadius: '1rem' }}>
      <CardContent>
        <Grid
          container
          direction='column'
          justifyContent='flex-start'
          alignItems='stretch'
          sx={{ height: '100%', width: '100%', position: 'relative' }}
        >
          <Grid item xs={8} md={7} sx={{ textAlign: 'center' }}>
            {/* This is the Ready button */}
            <Grid container item justifyContent='center' alignItems='center' xs={12} md={12} spacing={0}>
              <Button
                sx={readyBtn}
                variant='outlined'
                size='large'
                disabled={gameProgress !== gameStatus.DESIGN_IN_PROGRESS}
                onClick={() => setGameProgress(gameStatus.IN_PROGRESS)}
                disableRipple
              >
                Ready
              </Button>
            </Grid>

            {/* This is the data table */}
            <Grid
              container
              direction='column'
              justifyContent='space-around'
              alignItems='stretch'
              sx={{ width: '100%', height: '100%' }}
            >
              <SideMenuTable color={tableColor} />
            </Grid>
          </Grid>

          {/* This is the plant and the 3 heart lives meter */}
          <Grid
            container
            item
            xs={4}
            md={4}
            alignItems='flex-end'
            sx={{ position: 'relative', width: '100%', textAlign: 'center' }}
          >
            <div style={classes.root}>
              <Grid container spacing={1}>
                {/* Plant */}
                <Grid
                  container
                  item
                  xs={12}
                  md={12}
                  spacing={0}
                  direction='column'
                  justifyContent='flex-end'
                  alignItems='center'
                >
                  <Paper elevation={0} style={classes.paper}>
                    <div style={{ width: '60%', margin: '0 auto' }}>
                      <Animation stage={localPlantStage}></Animation>
                    </div>
                  </Paper>
                </Grid>

                {/* 3 heart lives meter */}
                <Grid container item direction='column' justifyContent='center' alignItems='center' xs={12} spacing={3}>
                  <Grid item xs={4}>
                    <Paper elevation={0} style={classes.paper}>
                      {numFails <= 2 ? (
                        <FavoriteIcon style={{ color: 'red' }} />
                      ) : (
                        <FavoriteBorderIcon style={{ color: 'red' }} />
                      )}
                      {numFails <= 1 ? (
                        <FavoriteIcon style={{ color: 'red' }} />
                      ) : (
                        <FavoriteBorderIcon style={{ color: 'red' }} />
                      )}
                      {numFails === 0 ? (
                        <FavoriteIcon style={{ color: 'red' }} />
                      ) : (
                        <FavoriteBorderIcon style={{ color: 'red' }} />
                      )}
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SideMenu;
