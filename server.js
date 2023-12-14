const express = require("express");

const app = express();

const port = 3000;


  app.get('/greeting', function(req, res) {
    res.send("Hello, stranger");
  });
  

  app.get('/greeting/:name', function(req, res) {
    const name = req.params.name
    res.send(`What's up,${name}`);
  });
  
  app.get('/tip/:total/:tipPercentage', function(req, res) {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    const tip = (total * tipPercentage)/ 100


    res.send(`${tip}`);
  });
  
  app.get('/magic/:question', function(req, res) {
    const question = req.params
    const responses= ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const randomresp = Math.floor(Math.random ()*responses.length)
    const magic8 = responses[randomresp]
    res.send(`Magic 8 bal : ${magic8}`);
  });

  
  


app.set("view engine", "jsx");

app.engine("jsx", require("express-react-views").createEngine());

  







// 3. Create Our Server
app.listen("3000", (req, res) => {
  console.log("Server is currently running on port 3000");
});
