import app from "./app";
import "./DB";
import dotenv from "dotenv";  //env 쓰는이유 디비 오픈 숨기기위해
dotenv.config();


import "./models/Video";

const PORT = process.env.PORT || 4000;

function handleListening(){
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT , handleListening);