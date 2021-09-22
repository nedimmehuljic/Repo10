// Only change code below this line
var myPet = {
    species: "Pit Bull",
    name: "Roky",
    legs: 4,
    friends: [ "Micky", "John" ]
};

function myFunction(myObj){
    return myObj;
}
// Oncly change code above this line

console.log(myFunction(myPet));
module.exports = { myPet, myFunction };