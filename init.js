import app from "./app";
import "./DB";

const PORT = 4000;

function handleListening(){
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT , handleListening);