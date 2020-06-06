const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  //console.log(req.body);
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var result=num1+num2;
  res.send("The result of calculation is: "+result);
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  //console.log(req.body);
  var height=parseFloat(req.body.height);
  var weight=parseFloat(req.body.weight);
  var result=(703*weight)/(height*height);
  if(result <= 18.5) {
  res.send("Your BMI is: "+result+"  =>  Underweight");
} else if(result > 18.5 && result < 25) {
  res.send("Your BMI is: "+result+"  =>  Normalweight");
} else if(result >= 25 && result <= 29.9) {
  res.send("Your BMI is: "+result+"  =>  Overweight");
} else {
  res.send("Your BMI is: "+result+"  =>  Obesity");
}
});

app.listen(4040, function(){
  console.log("Server running on port 4040");
});
