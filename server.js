const express = require("express")
const app = express()
const rutas = require('./routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req , res ) => {
    res.sendFile(__dirname + "/public/index.html")
});

app.use('/productos', rutas);

app.listen(8080, ()=> {
    console.log("servidor levantado ");
});