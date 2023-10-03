import { Accordion, AccordionDetails, AccordionSummary, Divider, FormControlLabel, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MockInvoices from "./MockInvoices"
import useStyles from "../styles/InvoicesTabStyles";

type invoices = {
    id : string,
    year : string,
    month : string,
    total : string,
    sessions : {
            id : string,
            timestamp : number,
            charger : string,
            total : string
        } []
}[]

type invoice = {
    id : string,
    year : string,
    month : string,
    total : string,
    sessions : {
            id : string,
            timestamp : number,
            charger : string,
            total : string
        } []
}

type sessions = {
    id : string,
    timestamp : number,
    charger : string,
    total : string
} []

type session = {
    id : string,
    timestamp : number,
    charger : string,
    total : string
}

//http://18.202.253.30:8080/invoices/1234
//since invoces are curently public for anyone to get without any authentication we can simply download them from a link without a api call

// mock api call to get invoces
const getInvoicesFromId = (UserId: string) => {
    
    //make a axios call to get invoces
    //for each invoice make a call to get all the charging sessions billed in said invoice
    //create objects where each invoice contains the sessions billed in it
    // sudo -> 
        //var invoices = [];
        //for each invoice and charging session
        //get chargerserialnumber by charger id (some charger)
        //get price per khw and how many kwh whas transfered and calculate price
        // create invoice object ex.
        //const invoice = {
        //    id = "1234",
        //    year = "2022",
        //    month = "may",
        //    total = "1502",
        //    sessions = [
        //        {
        //            id = "100012",
        //            timestamp = "1663163478",
        //            charger = "Some charger (JTH)",
        //            total = "768",
        //        }
        //    ]
        //}

        //invoices.push(invoice)

        //return invoices

        const invoices = MockInvoices()

        return (
            invoices
        )
}


const InvoicesTab = ({UserId} : {UserId: string}) => {
    
    const userInvoices = getInvoicesFromId(UserId) as invoices
    return (
        <InvoicesList invoices = {userInvoices}/>
    )
}


const InvoicesList = ({invoices} : {invoices:invoices}) => {
    
    
    return (
        <List>
            {invoices.map((invoice) => (
                <InvoicesListItem key = {invoice.id} invoice = {invoice}/>
            ))}
        </List>
    )
}

const InvoicesListItem = ({invoice} : {invoice:invoice}) => {

    //calculate number of charging sessions

    const classes = useStyles();

    return (
        <ListItem className={classes.invoiceListItem} disablePadding>
                <Accordion>
                    <InvoicesListItemAccordionSummary year = {invoice.year} month = {invoice.month} total = {invoice.total} id = {invoice.id} numberOfSessions = "4"/>
                    <InvoicesListItemAccordionDetails sessions = {invoice.sessions}/>
                </Accordion>
        </ListItem>
    )
}

const InvoicesListItemAccordionSummary = ({year, month, total, id, numberOfSessions} : {year : string; month : string; total : string; id : string; numberOfSessions : string}) => {
    const classes = useStyles();

    const openInNewTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
      
      const onClickUrl = (url: string): (() => void) => () => openInNewTab(url)

    return (
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
        < Typography sx={{ width: '25%', flexShrink: 0 }} onClick={(event) => event.stopPropagation()} onFocus={(event) => event.stopPropagation()}>{year} {month}</Typography>
        < Typography sx={{ width: '25%', flexShrink: 0 }} onClick={(event) => event.stopPropagation()} onFocus={(event) => event.stopPropagation()}>Charging sessions: {numberOfSessions}</Typography>
        < Typography sx={{ width: '25%', flexShrink: 0 }} onClick={(event) => event.stopPropagation()} onFocus={(event) => event.stopPropagation()}>{total}kr</Typography>
        <div onClick={(event) => event.stopPropagation()} onFocus={(event) => event.stopPropagation()}>
            <button className={classes.downloadInvoiceButton} onClick={onClickUrl("http://18.202.253.30:8080/invoices/1234")}>
                View invoice
            </button>
        </div>
        </AccordionSummary>
        //1234 in the downloadlink should be replaced by id in the future
    )
}

const InvoicesListItemAccordionDetails = ({sessions} : {sessions:sessions}) => {
    return (
        <AccordionDetails>
            <List>
                {sessions.map((session) => (
                    <ChargingSessionListItem key = {session.id + session.timestamp} session = {session}/>
                ))}
            </List>
        </AccordionDetails>
    )
}

const ChargingSessionListItem = ({session} : {session: session}) => {

    const classes = useStyles();

    var date =  new Date(session.timestamp * 1000).toLocaleDateString("sv");

    return (
        <>
            <Divider variant="middle" />
            <ListItem className={classes.sessionItemInfo} disablePadding>
                <p>{date} {session.charger}</p>
                <p>{session.total}kr</p>
                <a href="">More information about session</a>
            </ListItem>
        </> 
    )
}



export default InvoicesTab