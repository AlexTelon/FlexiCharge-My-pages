import {
	DataGrid,
	GridToolbarContainer,
	GridToolbarFilterButton,
	GridToolbarDensitySelector,
	GridCellParams,
} from "@mui/x-data-grid";
import clsx from "clsx";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AuthService from "../components/AuthService";

import BottomNavigationBar from "../components/BottomNavigation";
import Mobile from "../components/Mobile";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			"& .long": {
				fontSize: "12px",
			},
			"& .short": {
				fontSize: "15px",
			},
		},
		grid: {
			spacing: 0,
			alignItems: "center",
			justifyContent: "center",
			maxWidth: "60%",
			minWidth: "10vh",
			height: "50rem",
			margin: "auto",
		},
		container: {
			backgroundColor: theme.flexiCharge.primary.white,
			borderRadius: "0.5rem",
			justifyContent: "center",
			padding: "1rem",
		},
	})
);

const columns = [
	{
		field: "date",
		headerName: "Date",
		minWidth: 100,
		flex: 0.1,
		fontSize: "5px",
		type: "date",
	},
	{
		field: "electricityTransferred",
		headerName: "Electricity transferred (kWh)",
		minWidth: 125,
		flex: 0.25,
		filterable: false,
	},
	{
		field: "priceKwh",
		headerName: "Price (SEK/kWh)",
		minWidth: 130,
		flex: 0.25,
		filterable: false,
	},
	{
		field: "location",
		headerName: "Location",
		width: 150,
		type: "string",
		sortable: false,
	},
	{
		field: "totalCost",
		headerName: "Total Cost (SEK)",
		minWidth: 130,
		flex: 0.25,
		filterable: false,
	},
];

const rows = [
	{
		id: 1,
		date: "2021-03-21",
		electricityTransferred: 64,
		priceKwh: 1.5,
		totalCost: 96,
		location: "Per-Brahe Parkeringshus, Jönköping",
	},
	{
		id: 2,
		date: "2021-03-27",
		electricityTransferred: 98,
		priceKwh: 1.5,
		totalCost: 147,
		location: "Asecs Röd Entre, Jönköping",
	},
	{
		id: 3,
		date: "2021-04-10",
		electricityTransferred: 75,
		priceKwh: 1.5,
		totalCost: 112.5,
		location: "Per-Brahe Parkeringshus, Jönköping",
	},
	{
		id: 4,
		date: "2021-03-25",
		electricityTransferred: 100,
		priceKwh: 1.4,
		totalCost: 140,
		location: "Sjukhusgatan, Jönköping",
	},
	{
		id: 5,
		date: "2021-03-26",
		electricityTransferred: 80,
		priceKwh: 1.5,
		totalCost: 120,
		location: "Per-Brahe Parkeringshus, Jönköping",
	},
	{
		id: 6,
		date: "2021-03-28",
		electricityTransferred: 66,
		priceKwh: 1.5,
		totalCost: 99,
		location: "Asecs Röd Entre, Jönköping",
	},
	{
		id: 7,
		date: "2021-03-30",
		electricityTransferred: 67,
		priceKwh: 1.3,
		totalCost: 87.1,
		location: "Asecs Röd Entre, Jönköping",
	},
	{
		id: 8,
		date: "2021-05-31",
		electricityTransferred: 95,
		priceKwh: 1.5,
		totalCost: 142.5,
		location: "Per-Brahe Parkeringshus, Jönköping",
	},
	{
		id: 9,
		date: "2021-05-17",
		electricityTransferred: 84,
		priceKwh: 1.6,
		totalCost: 134.4,
		location: "Per-Brahe Parkeringshus, Jönköping",
	},
	{
		id: 10,
		date: "2021-06-05",
		electricityTransferred: 76,
		priceKwh: 1.6,
		totalCost: 121.6,
		location: "Sjukhusgatan, Jönköping",
	},
	{
		id: 11,
		date: "2021-05-01",
		electricityTransferred: 100,
		priceKwh: 1.6,
		totalCost: 160,
		location: "Sjukhusgatan, Jönköping",
	},
	{
		id: 12,
		date: "2021-03-21",
		electricityTransferred: 100,
		priceKwh: 1.4,
		totalCost: 140,
		location: "Per-Brahe Parkeringshus, Jönköping",
	},
	{
		id: 13,
		date: "2021-03-27",
		electricityTransferred: 94,
		priceKwh: 1.5,
		totalCost: 141,
		location: "Per-Brahe Parkeringshus, Jönköping",
	},
	{
		id: 14,
		date: "2021-04-10",
		electricityTransferred: 67,
		priceKwh: 1.5,
		totalCost: 100.5,
		location: "Asecs Röd Entre, Jönköping",
	},
	{
		id: 15,
		date: "2021-03-25",
		electricityTransferred: 76,
		priceKwh: 1.4,
		totalCost: 106.4,
		location: "Per-Brahe Parkeringshus, Jönköping",
	},
	{
		id: 16,
		date: "2021-03-26",
		electricityTransferred: 87,
		priceKwh: 1.5,
		totalCost: 130.5,
		location: "Asecs Röd Entre, Jönköping",
	},
	{
		id: 17,
		date: "2021-03-28",
		electricityTransferred: 90,
		priceKwh: 1.5,
		totalCost: 135,
		location: "Sjukhusgatan, Jönköping",
	},
];

const toolbar = () => {
	return (
		<GridToolbarContainer>
			<GridToolbarFilterButton />
			<GridToolbarDensitySelector />
		</GridToolbarContainer>
	);
};

const ChargingSessions = () => {
	const classes = useStyles();
	const history = useHistory();

	useEffect(() => {
		const currentUser = AuthService.getCurrentUser();
		if (!currentUser) {
			history.push("/sign-up");
		}
	}, []);

	return (
		<>
			{Mobile() ? <Navbar /> : <BottomNavigationBar />}
			<div
				style={{ height: "550px", width: "80%", margin: "auto" }}
				className={classes.root}
			>
				<div style={{ display: "flex", height: "100%" }}>
					<div style={{ flexGrow: 1 }}>
						<h1>Charging</h1>
						<DataGrid
							rows={rows}
							columns={columns}
							// rowHeight={60}
							getCellClassName={(params: GridCellParams) => {
								const value = params.value as string;
								console.log(value.length);
								if (params.field === "location") {
									return value.length > 28 ? "long" : "short";
								}
								return "";
							}}
							pageSize={10}
							disableColumnMenu
							disableSelectionOnClick
							components={{ Toolbar: toolbar }}
							rowsPerPageOptions={[10]}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChargingSessions;
