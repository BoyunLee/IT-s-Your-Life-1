const express = require("express")
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) =>{
    res.status(200);
    res.sendFile(__dirname + "/index.html");
});

app.get("/res1", (req, res) =>{
    res.status(200);
    res.sendFile(__dirname + "/src/1.html");
});

app.get("/res2", (req, res) =>{
    res.status(200);
    res.sendFile(__dirname + "/src/2.html");
});

app.get("/res3", (req, res) =>{
    res.status(200);
    res.sendFile(__dirname + "/src/3.html");
});

app.get("/res4", (req, res) =>{
    res.status(200);
    res.sendFile(__dirname + "/src/4.html");
});

app.listen(port, () =>{
    console.log(`${port}번 포트에서 서버 실행 중`);
    console.log(`__dirname : ${__dirname}`);
});