const db = require ('../utilities/connection')
const pgp = require('pg-promise')()

const operations = {}

const provinces = [
    {
        "pname": "Blagoevgrad"
    },
    {
        "pname": "Burgas"
    },
    {
        "pname": "Dobrich"
    },
    {
        "pname": "Gabrovo"
    },
    {
        "pname": "Haskovo"
    },
    {
        "pname": "Kardzhali"
    },
    {
        "pname": "Kyustendil"
    },
    {
        "pname": "Lovech"
    },
    {
        "pname": "Montana"
    },
    {
        "pname": "Pazardzhik"
    },
    {
        "pname": "Pernik"
    },
    {
        "pname": "Pleven"
    },
    {
        "pname": "Plovdiv"
    },
    {
        "pname": "Razgrad"
    },
    {
        "pname": "Ruse"
    },
    {
        "pname": "Shumen"
    },
    {
        "pname": "Silistra"
    },
    {
        "pname": "Sliven"
    },
    {
        "pname": "Smolyan"
    },
    {
        "pname": "Sofia-grad"
    },
    {
        "pname": "Sofia (province)"
    },
    {
        "pname": "Stara Zagora"
    },
    {
        "pname": "Targovishte"
    },
    {
        "pname": "Varna"
    },
    {
        "pname": "Veliko Tarnovo"
    },
    {
        "pname": "Vidin"
    },
    {
        "pname": "Vratsa"
    },
    {
        "pname": "Yambol"
    }
]

const cs = new pgp.helpers.ColumnSet(['pname'],{table:'provinces'})
const query = () => pgp.helpers.insert(provinces,cs);

operations.createTables = () =>{
    return db.any('CREATE TABLE provinces (pname text)')
    .then(data => {
        return db.any("CREATE TABLE users (fullName text, email text, password text, phoneNo text)").then(data=>{
            return db.any("CREATE TABLE mtplcalculator (vehicleinfo json,insuringparty json,policy json,installment json,additionalcovers json)").then(data=>{
                return db.any("CREATE TABLE purchasepolicy (contactinformation json,deliveryinformation json,personalinformation json,vehicleownerinformation json)").then(data=>{
                    return ('tables created')
                })
            })
        })
    })
    .catch(error => {
        console.log(error);
    });
}

operations.populateTable = () =>{
    return db.any(query).then(data=>{
        console.log("columns updated")
        return ('Insertion successful')
    }).catch(error=>{
        console.log(error)
    })
}

operations.signUpUser = (data) =>{
    console.log(data)
    return db.any('insert into users("fullname","email","password","phoneno") values (${fullName},${email},${password},${phoneNo})',data).then(data=>{
        return data 
    }).catch(error=>{
        console.log(error)
    })
}

operations.getProvincesList = () =>{
    return db.any('select array (select pname from provinces)').then(data=>{
        return data
    }).catch(error=>{
        console.log(error)
    })
}

const calculateInstallments = new Promise ((resolve,reject)=>{
    setTimeout(() => resolve("done"), 1000);
})

operations.installmentOptions = (data) =>{
    return calculateInstallments.then(()=>{
    return ([
        {
            "title": "Single Payment",
            "subtitle": "Best value",
            "amount": 4039999,
            "saving": 60497,
            "installmentsCount": 1,
            "discounts": [],
            "installments": []
        },
        {
            "title": "Two Payments",
            "subtitle": "Every 6 months",
            "amount": 4060098,
            "saving": 40398,
            "installmentsCount": 2,
            "discounts": 0,
            "installments": [
                2030049,
                2030049
            ]
        },
        {
            "title": "Four Payments",
            "subtitle": "Every 3 months",
            "amount": 4100496,
            "saving": 0,
            "installmentsCount": 4,
            "discounts": 0,
            "installments": [
                1025124,
                1025124,
                1025124,
                1025124
            ]
        }
    ])
    
})

}

operations.postPurchasePolicy = (data) =>{
    return db.any('INSERT INTO purchasePolicy (contactInformation, deliveryInformation,personalInformation,vehicleOwnerInformation) VALUES (${contactInformation}, ${deliveryInformation}, ${personalInformation}, ${vehicleOwnerInformation})', data).then(data=>{
        return data
    }).catch(error =>{
        console.log(error)
    })
}

operations.getPurchasePolicy = () =>{
    return db.any('select * from purchasePolicy').then(data=>{
        return data
    }).catch(error =>{
        console.log(error)
    })
}

operations.getdetailbyregno=()=>{
    return db.any('select * from mtplCalculator').then(data=>{
        return data
    }).catch(error =>{
        console.log(error)
    })
}

operations.adddetails=(data)=>{
    return db.none('insert into mtplCalculator values (${vehicleInfo},${insuringParty},${policy},${installment},${additionalCover})',data).then(data=>{
        return data
    }).catch(error =>{
        console.log(error)
    })
}


module.exports = operations;
