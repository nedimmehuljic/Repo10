// Only change code below this line
var lion = {
    "name": "Simba",
    "legs": "4",
    "tails": "1",
    "roar": "roar-roar"
};

function myFunction(prop1){
    delete lion[prop1];
    return lion;
}
// Oncly change code above this line
console.log(myFunction("roar"));
module.exports = myFunction;