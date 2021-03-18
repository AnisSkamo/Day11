// Create a myPetsArray array here
myPetsArray = ["Dog", "Cat"];
// End of myPetsArray here

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    
    // Only change code below this line
    var myNewPets = myPetsArray();
    myPetsArray.push("Bird", "Fish");
    var firstPet = myPetsArray.shift ();
    var lastPet = myPetsArray.pop ();
    myPetsArray.unshift("Lion");

    // Only change code above this line
}

console.log(myArrayFunction(myNewPets)); // Change this line
module.exports = myArrayFunction;
