// if you declare same variable with the name var twice it wont give any error and code might have //bugs

var myCat = 'itsmycat';
var myCat = 'notmycat';
console.log(myCat)

// but using let will show you an error while trying to decllare the same variable twice

let myDog = 'its my dog';
//let myDog = 'its not my dog';       commenting out to exclude the error while running other codes

//let is also used to declare variable inside a particular block.outside the block the value wont have any effect and wont even exist to be called or be assigned a value

function checklet(){
    
    let myLet = 'inside function';  //only inside this function block..not even inside the other                                        blocks declared inside this function, no if else for loops                                          while do while or even other object class
    if(1){
        
        let myLet = 'inside if blcok';   //its a new variable even though of the same name and                                                      works only inside this if block...
        console.log(myLet);
    }
    
    console.log(myLet)
}

checklet()

//const is another type of daclaration for variables that allows you to not change the value of this variable meanoing its only a ready only varible and if any time you wanna assign something to it youwill get an error messege 

function checkConst(str){
    
    var   NEWVAR = str + 'is cool'   //if u use const in this line it will raise an error but no error if declared as var or let
    
    NEWVAR   = str + ' ' + 'is not so cool'
    return console.log(NEWVAR)   
}



checkConst("He")
//its better to use const and let always 

//array mutation is possible though

const s = [4,5,6];

//s = [3,4,5];                //is gonna give an error

//however we can access the individual values and change them

s[0] = 'string'
console.log(s)

// use object.freeze to not change any object values in an object aafter declaring it

const MATHOBJ = {
    PI : 3.14,
    g  : 9.8
};

//Object.freeze(MATHOBJ);

MATHOBJ.g = 100;            // this will work and change the constant object attributes but if we use object.freeze it will show error
//@#######################################  Arrow Functions  ################################

const myArrow = (arr1,arr2) => arr1.concat(arr2);

console.log(myArrow([1,2],[3,4]))

const myArray = [1.2, 3, 5, -45, 9,-2.4]
const squeredList = (arr) => {
    
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x)
    return squaredIntegers;
}

const squaredIntegers = squeredList(myArray)
console.log(squaredIntegers)

//############ Spread and rest operator ###############################

const arr1 = [4,5,6,7]
var arr2 = arr1
var arr2 = [...arr1]  // this is the spread operator 
arr1[0] = 'changed'   // now the arr2 will also get chnaged
//so if we wanna copy an array we can use the spread operator

console.log(arr2)

function summ(a,b,c){
    return console.log(a+b+c);
}

//summ(4,5,6) we can directly assign the array as argument by using the rest operator
 summ(...arr2) // it will take the first three elements of the arr2 as the function is bounded to only three inputs
 
 //#########################################################################
 
 //############################# Destructors ###############################
 
 var varObj = {  x : 5, y : 6, z : 89 };
     
const { x: a , y : b, z : c} = varObj;

console.log(a,b,c)

const weather = {
    today: 28,
    tomorrow: 42
};

//destructor using function
function getTomorrow(newObject){
    
    const {tomorrow : tempOfTomorrow} = newObject;
    return tempOfTomorrow
}

console.log(getTomorrow(weather))

//destructor for nested objects

const weatherNest = {
    today: {
        min: 28,
        max: 50
    },
    tomorrow: {
        min: 30,
        max: 60
    }
};

//destructor using function
function getTomorrowNest(newObjectNest){
    
    const {tomorrow : {max: maxTempOfTomorrow}} = newObjectNest;
    return maxTempOfTomorrow
}

console.log(getTomorrowNest(weatherNest))

//Destructuring Assignment with Rest Operator to Reassign Array

var longArray = [1,2,3,4,5,6,7,8,9,10]

function removedEl(bogList){
    const[, , ...shortArray] = longArray;
    return shortArray;
}
console.log(longArray)
console.log(removedEl(longArray))

//Destructuring Assignment to Pass an Object

var userDetail = {
    
    name: 'iser man',
    age: 34,
    min_income: 2400,
    max_income: 5000
};

function avgFinder({min_income,max_income}){
    return (max_income+min_income)/2 ;
}
console.log(avgFinder(userDetail))      // so this is a handy method to extract an information only what we need from any api or user. just remember to use the curly braces in the function parameter


    
