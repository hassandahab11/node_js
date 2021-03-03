const express = require("express");
const expressHandlebars = require("express-handlebars");

const port = 8000;

const app = express();
app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`the Server is lanched in localhost:/ ${port} poret !!!`);
});


app.get("/home", (req, res)=>{
    res.render("home");
})
app.get("/contact", (req, res)=>{
    res.render("contact");
})
app.get("/page2", (req, res)=>{
    res.render("page2");
})
app.get("/post", (req, res)=>{
    res.render("post");
})
app.get("/recipe", (req, res)=>{
    res.render("recipe");
})
app.get("/team", (req, res)=>{
    res.render("team");
})
app.get("/team-member", (req, res)=>{
    res.render("team-member");
})