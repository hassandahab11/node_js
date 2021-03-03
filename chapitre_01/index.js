const { response, request } = require('express');
const express = require('express');

const app = express();


app.listen(8000, () => {
    console.log("the server is lanched");
})


// Ex 01
const authers = [
    "Lawrence Nowell, UK",
    "William Shakespeare, UK",
    "Charles Dickens, US",
    "Oscar Wilde, UK"
  ]
  app.get("/authers/:id", (request, response) => {
   response.send(authers[request.params.id])
  })

// Ex 02
  const authersBks= [
    "Beowulf",
    "Hamlet, Othello, Romeo and Juliet, MacBeth",
    "Oliver Twist, A Christmas Carol",
    "The Picture of Dorian Gray, The Importance of Being Earnest"
  ]
  app.get("/authers/books/:id", (request, response) => {
    response.send(authersBks[request.params.id])
   })
// Ex 03
   app.get("/cars/", (req, res) => {
    res.send("ERROR");
});

// Ex 04

  