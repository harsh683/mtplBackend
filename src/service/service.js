const db=require('../model/database');
let service={}

service.setupDb = ()=>{
    return db.createTables().then((data)=>{
        return db.populateTable().then(data=>{
            return data
        }).catch(error=>{
            console.log(error)
        })
    }).catch(error=>{
        console.log(error)
    })
}

service.signUpUser = (data) =>{
    return db.signUpUser(data).then(data=>{
        return data
    }).catch(error=>{
        console.log(error)
    })
}

service.getProvincesList = () =>{
    return db.getProvincesList().then(data=>{
        return data
    }).catch(error=>{
        console.log(error)
    })
}

service.installmentOptions = (data) => {
    return db.installmentOptions(data).then(data=>{
        return data
    }).catch(error=>{
        console.log(error)
    })
}

service.postPurchasePolicy = (data)=>{
    return db.postPurchasePolicy(data).then(data=>{
        return data
    }).catch(error=>{
        console.log(error)
    })
}

service.getPurchasePolicy = ()=>{
    return db.getPurchasePolicy().then(data=>{
        return data
    }).catch(error=>{
        console.log(error)
    })
}

//adding details to mtplCalculator collection
service.adddetails = ((details) => {
    return db.adddetails(details).then((data) => {
        if (data == null) {
            return {"message":"details added successfully!!"};
            
        } else {
            let err = new Error("failed to insert details!!");
            err.status = 404;
            throw err; 
        }
    })
})

//getting d
service.getdetailbyregno = ((regNo) => {
 
    return db.getdetailbyregno().then((data) => {
        if (data.length == 0) {
            let err = new Error("details not available!!");
            err.status = 404;
            throw err;
        } else {
                return data[0];
        }
    })
})

module.exports=service;