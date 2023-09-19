import { Accordion, AccordionDetails, AccordionSummary, Divider, FormControlLabel, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MockCharging from "./MockCharging";
import { green } from "@mui/material/colors";


const charges = MockCharging();
let row = document.getElementsByTagName("TableRow")

// function paidCharging(charges){
//     if(charges.paid){
//         row.style.backgroundColor = green
        
//     }
// }

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="center">Electricity transerred (kWh)</TableCell>
            <TableCell align="center">Price (SEK/kWh)</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="right">Total Costs (SEK)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {charges.map((charges) => (
            <TableRow
              key={charges.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {charges.year}-{charges.month}-{charges.day}
              </TableCell>
              <TableCell align="center">{charges.kWh}</TableCell>
              <TableCell align="center">{charges.price}</TableCell>
              <TableCell align="center">{charges.location}</TableCell>
              <TableCell align="right">{charges.costs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}





