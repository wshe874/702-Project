import { useContext, useEffect, useState } from 'react';
import { Card, CardContent, Button, Grid, Paper } from '@mui/material';
import Animation from '../components/Animation';
import { GameLogicContext } from '../contexts/GameLogicContextProvider';
import SideMenuTable from './sideMenuComponents/SideMenuTable'
import { gameStatus } from '../utils/gameUtils';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const SideMenu = () => {
  const {plantStage,setPlantStage, tableColor, gameProgress, numFails, setGameProgress} = useContext(GameLogicContext);
  const [localPlantStage,setLocalPlantStage] = useState(plantStage);

  useEffect(()=>{
    setLocalPlantStage(plantStage);
  },[plantStage, setPlantStage, setLocalPlantStage, localPlantStage]);

  const readyBtn = {
    color: 'black', backgroundColor: '#b3db59', marginTop: '30px', marginBottom: '40px'
  }

  const classes = {
    root: {
      flexGrow: 1,
    },
    paper: {
      textAlign: "center",
      color: "blue",
      backgroundColor: 'transparent',
      height: '100%'
    }
  };

  return (
    <Card sx={{ width: '100%', height: '100%', background: '#f4f4f4', boxShadow: 'none', borderRadius: '1rem' }}>
      <CardContent sx={{height: '95%'}}>
        <Grid container
          direction="column"
          justifyContent="space-around"
          alignItems="stretch"
          sx={{height: '100%', width: '100%', position: 'relative'}}>

          <Grid item
              xs={8} md={7} 
              sx={{textAlign: 'center'}}>

              {/* This is the Ready button */}
              <Grid container item 
              justifyContent="center"
              alignItems="center"
              xs={12} md={12} spacing={0}>
                <Button sx={readyBtn} variant="outlined" size="large" disabled={gameProgress !== gameStatus.DESIGN_IN_PROGRESS} onClick={() => setGameProgress(gameStatus.IN_PROGRESS)} disableRipple>Ready</Button>
              </Grid>

              {/* This is the data table */}
              <Grid container 
                direction="column"
              justifyContent="space-around"
              alignItems="stretch" 
              sx={{width: '100%'}}>
                <SideMenuTable color={tableColor}/>
              </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SideMenu;
