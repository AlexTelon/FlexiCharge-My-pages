

const MockCharging = () => {

    var chargingHistory = []

    const charging1 = {
        id : "1231",
        year : "2021",
        month : "03",
        day: "21",
        kWh: "64",
        price: "1.5",
        location: "Per Brahe, Parkeringshus, Jönköping",
        costs: "96",
        paid: true
    }
    const charging2 = {
        id : "1234",
        year : "2021",
        month : "03",
        day: "27",
        kWh: "98",
        price: "1.5",
        location: "Asecs Röd Entre, Jönköping",
        costs: "147",
        paid: false,
    }
    const charging3 = {
        id : "1235",
        year : "2021",
        month : "04",
        day: "10",
        kWh: "75",
        price: "1.5",
        location: "Per Brahe, Parkeringshus, Jönköping",
        costs: "112.5",
        paid: true,
    }
    const charging4 = {
        id : "1236",
        year : "2021",
        month : "03",
        day: "25",
        kWh: "100",
        price: "1.4",
        location: "Sjukhusgatan, Jönköping",
        costs: "140",
        paid: true,
    }
    
    chargingHistory.push(charging1)
    chargingHistory.push(charging2)
    chargingHistory.push(charging3)
    chargingHistory.push(charging4)
    
 

    return (
        chargingHistory
    )
}


export default MockCharging