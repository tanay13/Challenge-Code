const express = require('express')
const fs = require('fs');
const app = express()


app.get('/',(req,res)=>{
    res.json({
        path : "right",
        message: "enter a role as url parameter to get the datas. Doctor - All datas , Patient - Only name and age"
    })
})

app.get('/:user',(req,res)=>{
    fs.readFile('./patient.json', (err, json) => {
        let obj = JSON.parse(json);
        if(req.params.user === 'patient')
        objDisp = obj.map(({name,age})=>({name,age}))
        else if(req.params.user === 'doctor')
        objDisp = obj.map(({name,age,problem,city})=>({name,age,problem,city}))
        else
        objDisp = {
            "message":"Wrong role name. Try patient or doctor"
        }
        res.json(objDisp);
    });
})


app.listen(3000,()=>{
    console.log("Server running")
})

