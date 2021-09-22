// Only change code below this line
var lion = {
    "name": "Simba",
    "legs": "4",
    "tails": "1"
};

function myFunction(prop1, prop2){
lion[prop1] = prop2;
return lion;
}
// Oncly change code above this line
console.log(myFunction("roar", "roar-roar"));
module.exports = myFunction;