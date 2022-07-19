const express = require("express");
const productRouter = require("./routers/product");
const categoryRouter = require("./routers/category")

const PORT = 4000;

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(categoryRouter);

app.listen(PORT,()=>{
    console.log(`working at ${PORT}`)
});
