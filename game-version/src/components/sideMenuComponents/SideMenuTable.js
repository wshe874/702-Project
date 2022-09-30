import SideMenuHeader from './SideMenuHeader'
import SideMenuTableRow from './SideMenuTableRow'



const SideMenuTable = (props) => {

    const data = props.data[0];

  return (
    <div>
        <SideMenuHeader/>
        <SideMenuTableRow prompt={1} width={data.width} height={data.height} distance={data.distance} mt={data.mt}/>
    </div>
  );
};

export default SideMenuTable;
