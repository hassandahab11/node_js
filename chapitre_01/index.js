const { response, request } = require('express');
const express = require('express');

const app = express();


app.listen(8000, () => {
    console.log("Serveur lancé");
})

app.get("/authers/:id", (request, response)=>{
    switch(request.params.id){
        case "1":response.send("Lawrence Nowell, UK");
        break;
        case "2":response.send("William Shakespeare, UK");
        break;
        case "3": response.send("Charles Dickens, US");
        break;
        case "4": response.send("OScar Wilde, UK");
        break;
        default:
             response.send("ecrivant non existente");
    }
})
