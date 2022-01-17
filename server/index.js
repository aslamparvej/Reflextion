const express = require('express');

const app = express();
const PORT = 5000;

app.get('/', (req,res)=>{
    res.send("Welcome to my Fleflextion website :)");
})

app.listen(PORT,()=> console.log(`Server runnig on PORT ${PORT}`));