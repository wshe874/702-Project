import { Grid } from '@mui/material';
import { useContext } from 'react';
import { GameLogicContext } from '../../contexts/GameLogicContextProvider';
import SideMenuHeader from './SideMenuHeader'
import SideMenuTableRow from './SideMenuTableRow'


const SideMenuTable = () => {

   const {gameResults, gameRounds} = useContext(GameLogicContext);

   const root = {
      flexGrow: 1
   };

  return (

    <div style={root}>
      {console.log("gameResults: ",  gameResults)}
      <Grid container spacing={0}>
        <Grid container item 
        justifyContent="space-around"
        alignItems="center"
        xs={12} spacing={0}
        style={{borderBottom: '1px solid black', paddingBottom: '10px'}}>
          <SideMenuHeader/>
        </Grid>

        {gameResults.length > 0 ? gameResults[gameRounds-1].map((promptData, index) => {
            const distanceToDisplay = Math.floor(promptData.distance);
            const mtToDisplay = Math.floor(promptData.averageMovementTime);

            return <Grid container item 
            key={index}
            justifyContent="space-around"
            alignItems="center"
            xs={12} spacing={0}
            style={{marginTop: '10px', marginBottom: '10px'}}>
              <SideMenuTableRow prompt={index + 1} buttonConfigurations={promptData.buttonConfigurations} distance={distanceToDisplay} mt={mtToDisplay}/>
            </Grid>
        }) : null}
      </Grid>
    </div>
  );
};

export default SideMenuTable;
