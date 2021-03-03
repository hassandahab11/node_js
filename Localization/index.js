const { request, response } = require("express");
const x = require("./translations.json");
const express = require("express");
const expressHandlebars = require("express-handlebars");
const port = 8000;

const app = express();
app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`the Server is lanched in localhost:/${port} port `)
});


app.get("/:lang", (request, response) => {
    response.send(x[request.params.lang])
   
})


app.get("/home?", (req, res)=>{
    res.render("home");
})

