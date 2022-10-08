//##################### literals ###############################

var age = 87;
var name = 'josh';

var output = ` hello my name is ${name} and i am ${age} years old`;

console.log(output)  

//using objects and functions 

const show = {
    
    win: ['Bangladesh', ' India', 'WI'],
    lose: ['srilanka', 'NZ'],
    tie: ['Afg','SA', 'Eng']
};

function makeToList(arr){
    const myList = [];
    
    for(let i = 0; i < arr.length ; i++){
        myList.push(`<html> ${arr[i]} also participated </html>`);
        
    
    }
    return myList;
}

console.log(makeToList(show.win))

//return objects with arguments anf values of same name

const person1 = (name,age,gender) => {
    return {  
    name: name,
    age: age,
    gender: gender
    };
}

console.log(person1('john', 15,'male'))

// we can re-write the function simply 

const person2 = (name,age,gender) => ( {name, age, gender} )          // wed can do this only when                                                       the parameter and the variable names are same
console.log(person2('Georgina', 19,'Female'))

//_____________________________class object in JS__________________________

function makeclass(){
    class weightConversion{
        constructor(weightINkg){
            return this._weight = 2.20*weightINkg ;
        }
        
        get weightTOpound(){
            return this._weight;
        }
        set weightTOpound(newWeightTOpound){
            this._weight = newWeightTOpound;
        }
        
    }
    return weightConversion;
}

const myweight = makeclass();
const WEIGHT = new myweight(62);
let calculatedWeight = WEIGHT.weightTOpound    //accessiong with the getter method of class without accessing the private variable _weight
console.log(calculatedWeight)

WEIGHT.weightTOpound = 150;   //using the setter to set the varibale value externally
calculatedWeight = WEIGHT.weightTOpound; // using getter again to get the newly updated value
console.log(calculatedWeight)


import { changeToUpper } from "./exporting"

let cap = changeToUpper('this is small letter sentence')
console.log(cap);


//-----------importing default exports -----------------
/*
suppose the following function is in math.js file
export default function sum(a,b){
    return a+b;
}

import sum from "./math.js"
var value = sum(3,4);
 
value would be 7 



-----------------------------------------------------DONE-------------------------------------------------------------
