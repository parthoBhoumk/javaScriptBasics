//if else statements

var variable = 87;
if(variable > 50){
    console.log('more than 50')
}
else if(variable == 50){
    console.log("it is 50")
}
else {
    console.log("less than 50")
}

//Golf code

function golfScore(par,strokes){
    if(strokes ==1){
        return "hole-in-one"
    }
    else if(strokes <=(par-2)){
        return "Eagle"
    }
    else if(strokes == (par-1)){
        return "Birdie"
    }
    else if(strokes == par){
        return "par"
    }
    else if(strokes == (par+1)){
        return "bogey"
    }
    else if(strokes == (par+2)){
        return "Double Bogey"
    }
    else return "GO HOME"
    
}
console.log(golfScore(6,10))  //its better if you use case statements here

//case and switch statements

function caseExample(val){
    var answer = "";
    switch(val){
        case 1: answer = "first";
        break;
        
        case 2: answer = "second";
        break;
        
        case 2: answer = "third";
        break;
        default: answer = "not a valid input"
        break;
    }
    return answer;
    
}

console.log(caseExample("skj"));  //goes to the default statement
//now for multiple case but one output situation

function mulCase(val){
    var answer = "";
    switch(val){
        case 1:
        case 3:
        case 10:
        answer = "its for Adam";
        break;
        case 2:
        case 7:
        case 6:
        answer = "its for Eve";
        break;
        default:
        answer = "neither Adam nor Eve ";
        break;
        
    }
    return answer;
}
console.log(mulCase(2))

/*a program that will determine whether to hold or bet in card game
if cards are below 6 card count increases and if greater than 10 than it decreases
if the count is greater than 0 then hold and if less than o then bet

*/
// a global variable is declared
var count = 0;
function holdOrBet(card){
    switch(card){
        
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        count++;
        break;
        case 10:
        case "A":
        case "K":
        case "Q":
        case "J":
        count--;
        break;
        
    }
    var holdBet = "Hold";
    if(count < 0){
        holdBet = "Bet";
    }
    return count +" " + holdBet;
}

holdOrBet(2);holdOrBet("J"); holdOrBet("A");holdOrBet(10);holdOrBet(9);
console.log(holdOrBet(7));
