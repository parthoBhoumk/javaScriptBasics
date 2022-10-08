//functions
function java_function(){
     
     console.log('inside the function')
    
}

java_function()
//console.log(a);

//local scope

function localScope(){
    var myVar = 6;     //myVar is local varible
    console.log(myVar)
    
}

localScope()
//console.log(myVar) ;  // error is shown because it is a local variable of previous function

//Local Variable precedence global variable within a function

var global = 'its global';
function locVsGlobal(){
   var global = 'now its local'
 return global;   
}
console.log(locVsGlobal())   //it will show the local variable value
console.log(global)             // this shows the global value of variable

/*stand in line...one value added in the last and another one is removed from
first*/

function standInLine(arr,item){
    arr.push(item);
    return arr.shift()
                    
}

var aray = [1,2,3,4,5];
console.log("before:" + JSON.stringify(aray))
console.log("processing: " + standInLine(aray,8))
console.log('after:' + JSON.stringify(aray))

// equality operator

function testequl(val){
    if(val == 10){    // double equal value converts the type of data and then checks if its equal or not
        return true;
    }
    else return false;
}

function testAbsoluteEqual(val){
    if(val === '10'){     // this is a strict equality operator and wont change the data type
        return true
    }
    else return false
    
}
//console.log(testAbsoluteEqual(10));  // 10 will give false where '10' will give true

/*
not Equal --> "!=" sampe operator as C language
strictNotEqual operator !==         //opposite of "===" this operator
greater than            >
less than               <
greater ir equal        >=
less or equal           <=
logical AND             &&
logical OR              ||
*/
