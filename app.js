// const express = require('express')
// const app = express()

// const xlsx = require('xlsx');

// // console.log(data)

// var cors = require('cors')
// app.use(cors())
// let students ={name:'ahmad',id :52}
// let allstudents =[{name:'rony',id :52},{name:'sandra',id :52},{name:'bghm',id :52}]
// app.get('/', function (req, res) {
//   res.send(students)
// })
// app.get('/allstudents', function (req, res) {
//   const wb = xlsx.readFile('huss.xlsx');
// let ws =wb.Sheets['students'];
// let data = xlsx.utils.sheet_to_json(ws);
//     // res.send(allstudents)
//     res.send(data)
//   })


// app.listen(5000)





const express = require("express");
const app = express();
const xlsx = require('xlsx');
var cors = require('cors')
app.use(cors())
const PORT = process.env.PORT || 3030;

app.get('/allstudents', function (req, res) {
  const wb = xlsx.readFile('huss.xlsx');
let ws =wb.Sheets['students'];
let data = xlsx.utils.sheet_to_json(ws);
    // res.send(allstudents)
    res.send(data)
  })

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});