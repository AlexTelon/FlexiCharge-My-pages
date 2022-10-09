import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useStyles from "../components/styles/profileStyles";
import ProfileInformation from "../components/ProfileInformation";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import AuthService from "../components/AuthService";
import { PropaneSharp } from "@mui/icons-material";
import InvoicesList from "./invoicesList/InvoicesList";

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
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilytName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [userName, setUserName] = useState("");
  const history = useHistory();

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
      history.push("/sign-in");
    } else {
      setFirstName(currentUser.name);
      setFamilytName(currentUser.family_name);
      setEmail(currentUser.email);
      setPhoneNumber(currentUser.phone);
      setAddress(currentUser.address);
      setUserName(currentUser.username);
    }
  }, []);

  const handleEmptyField = (text: string) => {
    const valid = [];
    if (text == undefined || text == "") {
      valid.push("......................................");
      return valid;
    } else {
      return text;
    }
  };

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
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 10, borderColor: "#e5e5e5" }}>
        <Tabs
          variant="fullWidth"
          TabIndicatorProps={{ sx: { backgroundColor: "#333", height: 4 } }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ ...customStyles, border: 0 }}
            label="Profile"
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
            sx={{
              ...customStyles,
            }}
            label="Invoices"
            {...allyProps(2)}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <ProfileInformation
          label="Firstname"
          descript={`${handleEmptyField(firstName)}`}
        />
        <ProfileInformation
          label="Lastname"
          descript={handleEmptyField(familyName)}
        />
        <ProfileInformation label="Email" descript={handleEmptyField(email)} />
        <ProfileInformation label="Phone" descript={handleEmptyField(phone)} />
        <ProfileInformation
          label="Address"
          descript={handleEmptyField(address)}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Here will the users charging history be
      </TabPanel>
      <TabPanel value={value} index={2}>
        <InvoicesList/>
      </TabPanel>
    </Box>
  );
}
