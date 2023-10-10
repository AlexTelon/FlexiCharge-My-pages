import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Logout from "@mui/icons-material/Logout";
import useStyles from "../components/styles/profileStyles";
import ProfileInformation from "./profileTab/ProfileInformation";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import AuthService from "../components/AuthService";
import ProfileFormHandling from "./profileTab/ProfileFormHandling";
import UpdateProfileButton from "./profileTab/UpdateProfileButton";
import Title from "./Title";
import InvoicesTab from "./invoicesTab/InvoicesTab";
import ChargingTab from "./chargingHistoryTab/chargingHistoryTab";
import FlexiChargeLogo from "../assets/header-profile.svg";






interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={classes.tabPanel}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function allyProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const currentUser = AuthService.getUserProfileInfo();
  let inputFieldValues
  if(currentUser){
    inputFieldValues = [
      {
        name: "firstName",
        label: "First name: ",
        descript: currentUser.firstName,
        id: "firstName",
      },
      {
        name: "lastName",
        label: "Last name: ",
        descript: currentUser.lastName,
        id: "lastName",
      },
      {
        name: "phoneNumber",
        label: "Phone Number: ",
        descript: currentUser.phoneNumber,
        id: "phoneNumber",
      },
      {
        name: "streetAddress",
        label: "Street address: ",
        descript: currentUser.streetAddress,
        id: "streetAddress",
      },
      {
        name: "zipCode",
        label: "Zip code: ",
        descript: currentUser.zipCode,
        id: "zipCode",
      },
      {
        name: "city",
        label: "City: ",
        descript: currentUser.city,
        id: "city",
      },
      {
        name: "country",
        label: "Country: ",
        descript: currentUser.country,
        id: "country",
      },
    ];
  } else {
    inputFieldValues = [{
      name: "",
      label: "",
      descript: "",
      id: "",
    }];
  }
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setFamilytName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setuserId] = useState("");
  const history = useHistory();

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
      history.push("/sign-in");
    } else {
      setFirstName(currentUser.firstName);
      setFamilytName(currentUser.lastName);
      setEmail(currentUser.email);
      setPhoneNumber(currentUser.phoneNumber);
      setZipCode(currentUser.zipCode);
      setCity(currentUser.city);
      setCountry(currentUser.country);
      setAddress(currentUser.streetAddress);
      setUserName(currentUser.username);
      setuserId(currentUser.user_id);
    }
  }, [currentUser]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const customStyles = {
    fontSize: "14px",
    height: "100px",
    borderTop: "1px solid #e5e5e5",
    "&:active": { color: "#78bd76 !important" },
    "&:focus": { color: "#78bd76 !important", outline: "none" },
    color: "#333 !important",
  };
  return (
    <Box sx={{ width: "100%", height: "100%", display: "grid", overflow: "auto", gridTemplateColumns: "20% 80%" }}>
      <Box sx={{ height: "100vh", position: "sticky", top: "0", left: "0", display: "flex", flexDirection: "column", backgroundColor: "white" }}>
          <img className={classes.navLogo} src={FlexiChargeLogo} />

          <Tabs
          variant="fullWidth"
          TabIndicatorProps={{ sx: { backgroundColor: "#333", height: 4 } }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          orientation="vertical"
          sx={{ position: "sticky", top: "0", left: "0", width: "100%" }}
        >
          <Tab
            sx={{
              ...customStyles,
            }}

            label="Invoices"
            {...allyProps(0)}
          />
          <Tab
             sx={{
              ...customStyles,
            }}
            label="Charging History"
            {...allyProps(1)}
          />
          <Tab
             sx={{ ...customStyles, borderBottom:"1px solid #e5e5e5" }}
            label="Profile"
            {...allyProps(2)}
          />
        </Tabs>
        <a href = '/sign-in' className={classes.logoutButton} onClick={AuthService.logout}>
        <Logout style={{ color: "#78bd76",  }} fontSize="large" />
          Sign Out
        </a>
      </Box>
      <Box>
        <TabPanel value={value} index={0}>
          <Title text="Invoices" />
          <InvoicesTab UserId={userId} />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Title text="Charging History" />
          <ChargingTab/>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Title text="Profile" />
          <UpdateProfileButton
            classes={classes}
            onClick={(e: any) => e.setIsOpen(true)}
          />
          {inputFieldValues.map((inputFieldValue, index) => {
            return (
              <ProfileInformation
                key={index}
                label={inputFieldValue.label}
                descript={inputFieldValue.descript}
              />
            );
          })}
          <ProfileFormHandling classes={classes} />
        </TabPanel>
      </Box>
    </Box>
  );
}
