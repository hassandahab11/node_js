const express = require("express");
const expressHandlebars = require("express-handlebars");
const port = 8000;
const app = express();

app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.listen(port, () => {
  console.log("Serveur lancé");
});

app.get("/home", (req, res)=>{
    res.render("home");
})

app.post("/login", (req, res)=>{
    res.render("login");
})
app.get("/login", (req, res)=>{
    res.render("login");
})