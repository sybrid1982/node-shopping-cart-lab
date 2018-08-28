'use const';

const express = require("express");
const app = express();
const cartRoutes = require("./routes/cart-routes");

app.use(express.static("./public"));
app.use("/", cartRoutes);

const port = 5000;

app.listen(port, ()=> {
    console.log(`Server started on port: ${port}`);
});