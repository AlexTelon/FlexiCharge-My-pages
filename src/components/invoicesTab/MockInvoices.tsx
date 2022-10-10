

const MockInvoices = () => {

    var invoices = []

    const invoice1 = {
        id : "1234a",
        year : "2022",
        month : "June",
        total : "1500",
        sessions : [
            {
                id : "100012",
                timestamp : 1663163478,
                charger : "Some charger (JTH)",
                total : "450",
            },
            {
                id : "100013",
                timestamp : 1663163478,
                charger : "Some other charger (PLUTO)",
                total : "225",
            },
            {
                id : "100014",
                timestamp : 1663163478,
                charger : "Some other other charger (HLK)",
                total : "725",
            },
            {
                id : "100015",
                timestamp : 1663163478,
                charger : "Some other other other charger (The MOON)",
                total : "100",
            }
        ]
    }
    
    const invoice2 = {
        id : "1234b",
        year : "2022",
        month : "may",
        total : "1100",
        sessions : [
            {
                id : "100012",
                timestamp : 1663163478,
                charger : "Some charger (JTH)",
                total : "200",
            },
            {
                id : "100014",
                timestamp : 1663163478,
                charger : "Some other charger (HLK)",
                total : "350",
            },
            {
                id : "100017",
                timestamp : 1663163478,
                charger : "Some other other charger (idk)",
                total : "550",
            }
        ]
    }
    
    const invoice3 = {
        id : "1234c",
        year : "2022",
        month : "January",
        total : "768",
        sessions : [
            {
                id : "100012",
                timestamp : 1663163478,
                charger : "Some charger (JTH)",
                total : "768",
            }
        ]
    }
    
    invoices.push(invoice1)
    invoices.push(invoice2)
    invoices.push(invoice3)

    return (
        invoices
    )
}


export default MockInvoices