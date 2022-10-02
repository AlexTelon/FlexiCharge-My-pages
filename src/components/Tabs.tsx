import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useStyles from "../components/styles/profileStyles";

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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 10, borderColor: "#e5e5e5" }}>
        <Tabs
          sx={{ border: "none" }}
          variant="fullWidth"
          TabIndicatorProps={{ sx: { backgroundColor: "#333", height: 4 } }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{
              fontSize: "28px",
              color: "#333",
              height: "100px",
              "&:active": { color: "#333" },
              "&:focus": { color: "#333" },
            }}
            label="Profile"
            {...allyProps(0)}
          />
          <Tab
            sx={{
              fontSize: "28px",
              color: "#333",
              height: "100px",
              "&:active": { color: "#333" },
              "&:focus": { color: "#333" },
            }}
            label="Charging History"
            {...allyProps(1)}
          />
          <Tab
            sx={{
              fontSize: "28px",
              color: "#333",
              height: "100px",
              "&:active": { color: "#333" },
              "&:focus": { color: "#333" },
            }}
            label="Invoices"
            {...allyProps(2)}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        Here will the compnents for user profile be
      </TabPanel>
      <TabPanel value={value} index={1}>
        Here will the users charging history be
      </TabPanel>
      <TabPanel value={value} index={2}>
        Here will the users invoices be.
      </TabPanel>
    </Box>
  );
}
