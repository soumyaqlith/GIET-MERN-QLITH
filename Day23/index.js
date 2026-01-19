const express = require("express");
const connectDb = require("./dbConfig/db");

let app = express();

connectDb();

app.use("/api", (req, res) => {
    console.log("hii wecome to the backend world");
    res.send("hello yes the app is running");
})

app.listen(8000, () => {
    console.log("server is running");
})