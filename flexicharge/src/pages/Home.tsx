import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Box } from '@material-ui/core';
import ChargingSessions from './ChargingSessions';
import { useEffect, useState } from 'react';
import AuthService from '../components/AuthService';



const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
 

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    console.log("whats uppppppp",currentUser)
    if (!currentUser) {
      console.log("there is no user")
    } else {
      console.log(currentUser.username)
    }
  });






  const handleChange = async (event: any, newValue: number) => {
    setSelectedTab(newValue)
  };



  return (
      <>
        <Box sx={{ width: '80%', margin: 'auto', bgcolor: 'background.paper' }}>
          <Tabs value={selectedTab} onChange={handleChange} centered>
            <Tab label="profile" />
            <Tab label="charging sessions" />
            <Tab label="invoices" />
          </Tabs>
        </Box>
        {selectedTab === 1 && <ChargingSessions />}
        {selectedTab === 2}
      </>
  );
};

export default Home;
