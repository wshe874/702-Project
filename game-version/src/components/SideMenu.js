import { useContext, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Animation from '../components/Animation';
import { GameLogicContext } from '../contexts/GameLogicContextProvider';


const SideMenu = () => {
  const {plantStage,setPlantStage} = useContext(GameLogicContext);
  const [localPlantStage,setLocalPlantStage] = useState(plantStage);

  useEffect(()=>{
    setLocalPlantStage(plantStage);
  },[plantStage, setPlantStage, setLocalPlantStage, localPlantStage]);



  return (
    <Card sx={{ width: '100%', height: '100%', background: '#f4f4f4', boxShadow: 'none', borderRadius: '1rem' }}>
      <CardContent>Put content in SideMenu component for the measurements and plant
      <Animation stage={localPlantStage}></Animation>
      </CardContent>
      
    </Card>
  );
};

export default SideMenu;
