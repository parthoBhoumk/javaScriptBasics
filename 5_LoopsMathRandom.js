//Loops

//while loop
var myArray = [];
var i = 1;
while(i < 6){
    myArray.push(i);
    i++;
}

//for loop notation
myArray = [];
for(var i = 0; i < 6 ; i++){
    myArray.push(i+4)
}
console.log(myArray);

//accessing arrays with for loops
var total = 0

for(i = 0; i < myArray.length ; i++){
    
     total += myArray[i]
     
}
console.log(total)

//Nested for loop

var matrix = [[1, 2, 3], [3 , 5], [ 6, 9, 45]];
var product = 1;

for(var i= 0 ; i< matrix.length; i++){
    for(var j = 0; j< matrix[i].length; j++){
        product *= matrix[i][j];       
    }
}
console.log(product)

//Do while loop
 //first it will run the block and then check for the condition but                                          in while loop it first checks the condition before running                                                      the code

var newArray = []
var i = 10;
do{                            
    newArray.push(i);
    i++;
} while(i<5)

console.log(i,newArray);

/* -------------------------------------###---------------------------------------------
 lookUp contacts --> Have to find out the values for any firstname given and other property like number of lastName*/

var contacts = [
    {
        "firstName": "John",
        "lastName": "Denver",
        "number": "0163575143"
    },
     {
        "firstName": "Christine",
        "lastName": "Sway",
        "number": "not found"
    },
     {
        "firstName": "Adam",
        "lastName": "Malone",
        "number": "0165451216"
    }
]
 function lookup(name,prop){
     for(var i = 0 ; i < contacts.length ; i++){
         if(contacts[i].firstName === name){
             return contacts[i][prop] || "No such property"
         }
     } return "The name does not exist"
     
 }

console.log(lookup("Adam","number"))

// -------------------------------###------------------------------

// generate random number

var random  = Math.random()
var randomWholeNumbers = Math.floor(Math.random()*20);
var ourMin = 10;
var ourMax = 80;
var randomWholeNumbersInRange = Math.floor(Math.random()*(ourMax- ourMin)) + ourMin;
console.log(randomWholeNumbersInRange)

//&&&&&&&&&&&&&&&&  str-->int  &&&&&&&&&&&&&&&&

var integer = parseInt('56')
integer = parseInt("10001000", 2)      // radix point to let the pc know its a binary number default is decimal

//ternary operator 

var num = -4653546
status = num > 0 ? "positive" : num===0 ? "zero" : "negative"

console.log(status)
