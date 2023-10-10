import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    invoiceListItem: {
      display: 'block !important' 
    },

    sessionItemInfo: {
      display: 'block !important',
      '& a': {
        display: 'inline-block !important',
        align: 'right',
        width: '20%', 
        flexShrink: 0,
        fontSize: theme.flexiCharge.font.fontSize.small
      },
      '& p': {
        display: 'inline-block !important',
        width: '40%', 
        flexShrink: 0
      }
    },

    downloadInvoiceButton: {
      backgroundColor: theme.flexiCharge.primary.green,
      color: theme.flexiCharge.primary.white,
      width: '100%',
      padding: '10px',
      fontSize: theme.flexiCharge.font.fontSize.small,
      borderRadius: '10px',
      border: 'none',
      '&:hover': {
        boxShadow: '0px 2px 2px #000'
      }
    }
  })

);

export default useStyles;