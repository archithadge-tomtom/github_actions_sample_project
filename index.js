const express=require('express')
const {spawn}=require('child_process')

const app=express()

app.get("/test1",(req,res)=>{
    console.log("Test1 endpoint called")
    const python=spawn('python',['python_scripts/script1.py'])
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        console.log(dataToSend)
       });
       
    res.status(400).send("Endpoint 1 called successfully")
})

app.get("/test2",(req,res)=>{
    console.log("Test2 endpoint called")
    res.status(400).send("Endpoint 2 called successfully")
})

app.listen(8000,()=>{
    console.log("Listening to port 8000");
})