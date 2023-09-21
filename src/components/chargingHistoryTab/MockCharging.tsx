

const MockCharging = () => {

    var chargingHistory = []

    const charging1 = {
        id : "1231",
        year : "2021",
        month : "03",
        day: "21",
        kWh: 64,
        price: 1.5,
        location: "Per Brahe, Parkeringshus, Jönköping",
        costs: 96,
        paid: true
    }
    const charging2 = {
        id : "1234",
        year : "2021",
        month : "03",
        day: "27",
        kWh: 98,
        price: 1.5,
        location: "Asecs Röd Entre, Jönköping",
        costs: 147,
        paid: false,
    }
    const charging3 = {
        id : "1235",
        year : "2021",
        month : "04",
        day: "10",
        kWh: 75,
        price: 1.5,
        location: "Per Brahe, Parkeringshus, Jönköping",
        costs: 112.5,
        paid: true,
    }
    const charging4 = {
        id : "1236",
        year : "2021",
        month : "03",
        day: "25",
        kWh: 100,
        price: 1.4,
        location: "Sjukhusgatan, Jönköping",
        costs: 140,
        paid: true,
    }
    const charging5 = {
        id : "1237",
        year : "2022",
        month : "03",
        day: "25",
        kWh: 100,
        price: 1.5,
        location: "Sjukhusgatan, Jönköping",
        costs: 150,
        paid: true,
    }
    
    const charging6 = {
        id : "1238",
        year : "2021",
        month : "05",
        day: "20",
        kWh: 100,
        price: 1.4,
        location: "Ekhagsringen, Jönköping",
        costs: 140,
        paid: true,
    }
    
    const charging7 = {
        id : "1239",
        year : "2022",
        month : "08",
        day: "25",
        kWh: 100,
        price: 1.2,
        location: "Jönköping",
        costs: 120,
        paid: true,
    }
    
    const charging8 = {
        id : "1240",
        year : "2021",
        month : "10",
        day: "25",
        kWh: 100,
        price: 1.4,
        location: "Sjukhusgatan, Jönköping",
        costs: 140,
        paid: true,
    }
    const charging9 = {
        id : "1241",
        year : "2022",
        month : "03",
        day: "25",
        kWh: 100,
        price: 1.4,
        location: "Per Brahe, Parkeringshus, Jönköping",
        costs: 140,
        paid: true,
    }
    
    
    chargingHistory.push(charging1)
    chargingHistory.push(charging2)
    chargingHistory.push(charging3)
    chargingHistory.push(charging4)
    chargingHistory.push(charging5)
    chargingHistory.push(charging6)
    chargingHistory.push(charging7)
    chargingHistory.push(charging8)
    chargingHistory.push(charging9)
    
 

    return (
        chargingHistory
    )
}


export default MockCharging