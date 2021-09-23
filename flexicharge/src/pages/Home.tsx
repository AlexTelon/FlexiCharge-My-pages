import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Box } from '@material-ui/core';
import ChargingSessions from './ChargingSessions';
import Profile from './Profile';
import { useState } from 'react';


  
const Home = (props: { name: string }) =>{
    const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = async (event: any, newValue: number) => {
    setSelectedTab(newValue)
  };

  return (
      
    <>
    <Box sx={{ width: '80%',margin: 'auto', bgcolor: 'background.paper' }}>
      <Tabs value={selectedTab} onChange={handleChange} centered>
        <Tab label="profile" />
        <Tab label="charging sessions" />
        <Tab label="invoices" />
      </Tabs>
    </Box>
    {selectedTab === 0 && <Profile name={props.name} />}
    {selectedTab === 1 && <ChargingSessions />}
    {selectedTab === 2 }
    </>
  );
};

export default Home;
