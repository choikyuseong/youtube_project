const express = require('express');
const app = express();

const PORT = 4000;

function handleListening(){
    console.log(`Listening on: http://localhost:${PORT}`);
}

const betweenHome = (req , res , next )=> {
    console.log("between");
    next();
}

const handleHome = (req , res , next) =>{
    console.log("handle");
    next();
}

const handleProfile = (req , res , next) =>{
    console.log("handleProfile");
    next();
}

// app.use(betweenHome);
app.get("/", betweenHome,handleHome);

app.get("/profile" , handleProfile);


app.listen(PORT , handleListening);