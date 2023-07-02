const exprees = require("express");
const app= exprees();
const port = 3000;
app.get('/',(req,res)=>{
    res.send('hello world');
});

app.listen(port,()=>{
    console.log('asdasd');
});