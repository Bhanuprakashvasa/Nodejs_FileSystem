import express from "express";
import fs from "fs";
const app = express();

const port = 5000;

app.get('/',(req,res) =>{
    res.send("Hello")
})
app.get("/create",(req,res)=>{
var data = new Date().getTime().toLocaleString();
var dateTime=`${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`;

fs.writeFile(`./${dateTime}.txt`,data, (err) => {
  if (err) console.log( err);
  else console.log("Done")
});
res.send("file-system created");
})











app.get("/Backup",(request,response)=>{
    fs.readdir("./",(err,Backup)=>{
        if(err)
            console.log(err)
        else
            response.json({Backup})
    });
})

app.listen(port, () => {
  console.log(`The Server Started at the port :  ${port}`);
});