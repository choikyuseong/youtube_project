import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {userRouter} from "./router";

const express = require('express');
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));

// const PORT = 4000;
//
// function handleListening(){
//     console.log(`Listening on: http://localhost:${PORT}`);
// }

const betweenHome = (req , res , next )=> {
    console.log("between");
    next();
}

const handleHome = (req , res , next) =>{
    res.send("hello from my ass");
    next();
}

const handleProfile = (req , res , next) =>{
    res.send("you are on my profile");
    next();
}

// app.use(betweenHome);
app.get("/", betweenHome,handleHome);
app.get("/profile" , handleProfile);
app.use("/user" , userRouter);

export default app;