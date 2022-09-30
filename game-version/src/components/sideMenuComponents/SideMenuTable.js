import { Grid } from '@mui/material';
import { useContext } from 'react';
import { GameLogicContext } from '../../contexts/GameLogicContextProvider';
import SideMenuHeader from './SideMenuHeader'
import SideMenuTableRow from './SideMenuTableRow'


const SideMenuTable = () => {

   const {gameResults} = useContext(GameLogicContext);

   const root = {
    flexGrow: 1
   };

  return (

    <div style={root}>
      <Grid container spacing={0}>
        <Grid container item 
        justifyContent="space-around"
        alignItems="center"
        xs={12} spacing={0}
        style={{borderBottom: '1px solid black', paddingBottom: '10px'}}>
          <SideMenuHeader/>
        </Grid>

        {gameResults.map((promptData, index) => {
            return <Grid container item 
            justifyContent="space-around"
            alignItems="center"
            xs={12} spacing={0}
            style={{marginTop: '10px', marginBottom: '10px'}}>
              <SideMenuTableRow key={index} prompt={index + 1} width={promptData.width} height={promptData.height} distance={promptData.distance} mt={promptData.mt}/>
            </Grid>
        })}
      </Grid>
    </div>
  );
};

export default SideMenuTable;
