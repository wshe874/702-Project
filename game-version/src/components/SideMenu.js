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

  const readyBtn = {
    color: 'black', backgroundColor: '#b3db59', marginTop: '30px', marginBottom: '40px'
  }

  const dummyData = [
    {
      width: 3.4, 
      height: 4.5,
      distance: 5.6,
      mt: 3.4
    }
  ];


  return (
    <Card sx={{ width: '100%', height: '100%', background: '#f4f4f4', boxShadow: 'none', borderRadius: '1rem' }}>
      <CardContent sx={{height: '95%'}}>
        <Grid container
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          sx={{border: '1px solid green', height: '100%', width: '100%', position: 'relative'}}>

          <Grid item
              direction="column"
              justifyContent="space-around"
              alignItems="stretch" 
              xs={8} md={8} sx={{border: '5px solid blue'}}>
              <Grid item xs={4} md={4}>
                <Button sx={readyBtn} variant="outlined" size="large" disableRipple>Ready</Button>
              </Grid>

              <Grid item xs={4} md={4}>
                {/* <SideMenuHeader/>
                <SideMenuTableRow prompt={"1"} width={"2.3"} height={"3.4"} distance={"3.4"} mt={"5.6"}/> */}
                <SideMenuTable data={dummyData}/>
              </Grid>
          </Grid>

          <Grid item xs={4} md={4} alignItems="stretch" sx={{position: 'relative', width: '100%', textAlign: 'center', border: '3px solid yellow'}}>
              <div style={{border: '1px solid red', position: 'absolute', bottom: '0', display: 'block', margin: 'auto 0', width: '100%'}}>
                <Animation stage={localPlantStage}></Animation>
              </div>
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  );
};

export default SideMenu;
