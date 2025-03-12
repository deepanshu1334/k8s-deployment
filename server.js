const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello, World! Node.js App is Running from deepanshu kumar!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
