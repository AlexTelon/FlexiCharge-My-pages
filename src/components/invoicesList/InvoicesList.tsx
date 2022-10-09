import { Accordion, AccordionDetails, AccordionSummary, FormControlLabel, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'




const InvoicesList = () => {
    return (
        <List>
            <InvoicesListItem></InvoicesListItem>
            <InvoicesListItem></InvoicesListItem>
            <InvoicesListItem></InvoicesListItem>
        </List>
    )
}

export default InvoicesList

const InvoicesListItem = () => {
    return (
        <ListItem disablePadding>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-label="Expand"
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                    < Typography sx={{ width: '25%', flexShrink: 0 }}>Faktura Maj</Typography>
                    < Typography sx={{ width: '25%', flexShrink: 0 }}>Antal laddningar: 4</Typography>
                    < Typography sx={{ width: '25%', flexShrink: 0 }}>1203kr</Typography>
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<button>hello</button>}
                        label=""
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
        </ListItem>
    )
}

const ChargingSessionList = () => {
    return (
        <List>
            <ChargingSessionListItem SessionInfo="this is a test"/>
        </List>
    )
}

const ChargingSessionListItem = ({SessionInfo} : {SessionInfo: string}) => {
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemText primary={SessionInfo} />
            </ListItemButton>
        </ListItem>
    )
}



