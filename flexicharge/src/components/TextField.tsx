import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "39ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Firstname" variant="standard" />
    </Box>
  );
}
