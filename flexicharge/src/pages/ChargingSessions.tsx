import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'date',
    headerName: "date",
    width: 250,
    editable: true,
  },
  {
    field: 'electricityTransferred',
    headerName: 'Electricity transferred (kWh)',
    width: 300,
    editable: true,
  },
  {
    field: 'priceKwh',
    headerName: 'Price (SEK/kWh)',
    type: 'number',
    width: 300,
    editable: true,
  },
  {
    field: 'totalCost',
    headerName: 'Total Cost (SEK)',
    width: 200,
  },
];

const rows = [
  { id: 1, date: "2021-03-21", electricityTransferred: 64, priceKwh: 1.5, totalCost: 96},
  { id: 2, date: "2021-03-27", electricityTransferred: 98, priceKwh: 1.5, totalCost: 147},
  { id: 3, date: "2021-04-10", electricityTransferred: 75, priceKwh: 1.5, totalCost: 112.5 },
  { id: 4, date: "2021-03-25", electricityTransferred: 100, priceKwh: 1.4, totalCost: 140 },
  { id: 5, date: "2021-03-26", electricityTransferred: 80, priceKwh: 1.5, totalCost: 120 },
  { id: 6, date: "2021-03-28", electricityTransferred: 66, priceKwh: 1.5, totalCost: 99 },
  { id: 7, date: "2021-03-30", electricityTransferred: 67, priceKwh: 1.3, totalCost: 87.1 },
  { id: 8, date: "2021-05-31", electricityTransferred: 95, priceKwh: 1.5, totalCost: 142.5 },
  { id: 9, date: "2021-05-17", electricityTransferred: 84, priceKwh: 1.6, totalCost: 134.4 },
  { id: 10, date: "2021-06-05", electricityTransferred: 76, priceKwh: 1.6, totalCost: 121.6 },
  { id: 11, date: "2021-05-01", electricityTransferred: 100, priceKwh: 1.6, totalCost: 160 },
  { id: 12, date: "2021-03-21", electricityTransferred: 100, priceKwh: 1.4, totalCost: 140 },
  { id: 13, date: "2021-03-27", electricityTransferred: 94, priceKwh: 1.5, totalCost: 141 },
  { id: 14, date: "2021-04-10", electricityTransferred: 67, priceKwh: 1.5, totalCost: 100.5 },
  { id: 15, date: "2021-03-25", electricityTransferred: 76, priceKwh: 1.4, totalCost: 106.4 },
  { id: 16, date: "2021-03-26", electricityTransferred: 87, priceKwh: 1.5, totalCost: 130.5 },
  { id: 17, date: "2021-03-28", electricityTransferred: 90, priceKwh: 1.5, totalCost: 135 },
];

const ChargingSessions = () => {
  
    return (
       <div style={{ height: 580, width: '100%'}}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
          />
        </div>
    )
}



export default ChargingSessions
