import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useStyles from "../components/styles/profileStyles";
import ProfileInformation from "./profileTab/ProfileInformation";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import AuthService from "../components/AuthService";
import ProfileFormHandling from "./profileTab/ProfileFormHandling";
import UpdateProfileButton from "./profileTab/UpdateProfileButton";
import InvoicesTab from "./invoicesTab/InvoicesTab";
import ChargingTab from "./chargingHistoryTab/chargingHistoryTab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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
  const currentUser = AuthService.getUpdatedUserProfile();

  const inputFieldValues = [
    {
      name: "firstName",
      label: "First name: ",
      descript: "Sebastian",
      id: "firstName",
    },
    {
      name: "lastName",
      label: "Last name: ",
      descript: "Zeed",
      id: "lastName",
    },
    {
      name: "phoneNumber",
      label: "Phone Number: ",
      descript: "+46731234456",
      id: "phoneNumber",
    },
    {
      name: "streetAddress",
      label: "Street address: ",
      descript: "Banarpsgatan 6",
      id: "streetAddress",
    },
    {
      name: "zipCode",
      label: "Zip code: ",
      descript: "55312",
      id: "zipCode",
    },
    {
      name: "city",
      label: "City: ",
      descript: "Jönköping",
      id: "city",
    },
    {
      name: "country",
      label: "Country: ",
      descript: "Sweden",
      id: "country",
    },
  ];
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
  }, []);
  console.log(inputFieldValues);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const customStyles = {
    fontSize: "28px",
    height: "100px",
    border: "none !important",
    "&:active": { color: "#78bd76 !important" },
    "&:focus": { color: "#78bd76 !important" },
    color: "#333 !important",
  };
  return (
    <Box sx={{ width: "100%", maxHeight: "100%", display: "grid", overflow: "auto" }}>
      <Box sx={{ borderBottom: 10, borderColor: "#e5e5e5" }}>
        <Tabs
          variant="fullWidth"
          TabIndicatorProps={{ sx: { backgroundColor: "#333", height: 4 } }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
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
            sx={{ ...customStyles, border: 0 }}
            label="Profile"
            {...allyProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <InvoicesTab UserId={userId} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <ChargingTab/>
      </TabPanel>

      <TabPanel value={value} index={2}>
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
  );
}
