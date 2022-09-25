import { useContext, useEffect, useState } from 'react';
import { Card, CardContent, Button, Grid, Item } from '@mui/material';
import Animation from '../components/Animation';
import { GameLogicContext } from '../contexts/GameLogicContextProvider';
import SideMenuTable from './sideMenuComponents/SideMenuTable'


const SideMenu = () => {
  const {plantStage,setPlantStage} = useContext(GameLogicContext);
  const [localPlantStage,setLocalPlantStage] = useState(plantStage);

  useEffect(()=>{
    setLocalPlantStage(plantStage);
  },[plantStage, setPlantStage, setLocalPlantStage, localPlantStage]);


  return (
    <Card sx={{ width: '100%', height: '100%', background: '#f4f4f4', boxShadow: 'none', borderRadius: '1rem' }}>
      <CardContent>
        <Button sx={{color: 'black', backgroundColor: '#b3db59', marginTop: '30px', marginBottom: '40px'}} variant="outlined" size="large" disableRipple>Ready</Button>
        <SideMenuTable/>
        <Animation stage={localPlantStage}></Animation>
      </CardContent>
      
    </Card>
  );
};

export default SideMenu;
