import { Accordion, AccordionDetails, AccordionSummary, Divider, FormControlLabel, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import useStyles from "./chargingHistoryTabStyles";
import MockCharging from "./MockCharging";


import TablePagination from "@mui/material/TablePagination";




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const charges = MockCharging();



export default function BasicTable() {
  const [pg, setpg] = React.useState(0);
    const [rpg, setrpg] = React.useState(5);
  
    function handleChangePage(event:any, newpage:any) {
        setpg(newpage);
    }
  
    function handleChangeRowsPerPage(event:any) {
        setrpg(parseInt(event.target.value, 10));
        setpg(0);
    }

  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.maxHeight}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="center">Electricity transerred (kWh)</StyledTableCell>
            <StyledTableCell align="center">Price (SEK/kWh)</StyledTableCell>
            <StyledTableCell align="center">Location</StyledTableCell>
            <StyledTableCell align="right">Total Costs (SEK)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>    
        {charges.slice(pg * rpg, pg *
                            rpg + rpg).map((charges) => (
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
      <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={charges.length}
                rowsPerPage={rpg}
                page={pg}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
    </TableContainer>
  );
}






