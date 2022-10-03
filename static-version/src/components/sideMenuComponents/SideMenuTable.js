import { Grid } from '@mui/material';
import { useContext } from 'react';
import { GameLogicContext } from '../../contexts/GameLogicContextProvider';
import SideMenuHeader from './SideMenuHeader'
import SideMenuTableRow from './SideMenuTableRow'


const SideMenuTable = (props) => {

   const {gameResults} = useContext(GameLogicContext);

   const root = {
      flexGrow: 1
   };

  return (

    <div style={root}>
      {console.log("gameResults: ", gameResults)}
      <Grid container spacing={0}>

        {/* This is the table header */}
        <Grid container item 
        justifyContent="space-around"
        alignItems="center"
        xs={12} spacing={0}
        style={{borderBottom: '1px solid black', paddingBottom: '10px'}}>
          <SideMenuHeader/>
        </Grid>


        {/* This is rendering each row of the table. There should be 0 rows at the very start. And then after the 1st attempt and
        onwards, there should be 6 rows for 6 prompts. */}
        {gameResults.length > 0 ? gameResults[gameResults.length - 1].map((promptData, index) => {
            const distanceToDisplay = Math.floor(promptData.distance);
            const mtToDisplay = Math.floor(promptData.averageMovementTime);

            return <Grid container item 
            key={index}
            justifyContent="space-around"
            alignItems="center"
            xs={12} spacing={0}
            style={{marginTop: '10px', marginBottom: '10px'}}>
              <SideMenuTableRow prompt={index + 1} buttonConfigurations={promptData.buttonConfigurations} distance={distanceToDisplay} mt={mtToDisplay} color={props.color}/>
            </Grid>
        }) : null}
      </Grid>
    </div>
  );
};

export default SideMenuTable;
