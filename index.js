const express = require('express')
const app = express();
const routes = require('./routes')
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/hits", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection error:"));

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(routes)

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})