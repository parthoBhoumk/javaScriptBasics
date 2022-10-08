//Objects in Javascripts

var myObject= {
    "name" : "Glass",
    "height(cm)": 120,
    "weight(gram)": 200,
    "color": "Black"
    
};

var nameValue = myObject.name; //accesing with dot notation
var weightValue = myObject["weight(gram)"];  //accesing with brackets 

//accesing with variable
var index = "height(cm)";
var heightValue = myObject[index]
//console.log(heightValue);

//updating the objecyt properties

myObject.name = 'power bank';

//add new properties 
myObject.price = "$20"
myObject["price"] = "$20"

//delete properties 
delete myObject.price

//objects can be used as a dictionary in lieu of switch case statements
function lookUp(val){
    
    var search = {
      "first"  : "alpha",
      "second" : "beta",
      "third"  : "gamma"  
    };
    return search[val];
}
//console.log(lookUp('first'))


myObject.hasOwnProperty('name')    //use to check if a poperty is there

//defining a complex object

var music = [               //its an array
    {
        "album" : "first",      //first element is an object
        "title": "neon",
        "format": [1,2,3],      //value of the third property is itself an array 
        "availibility" : "yes"
    },      //end of first object
    {
        "album" : "second",     //second element is also an object
        "titlle": "blue",
        "format": [4,5,6],      //same as before 
        "availibility": "no"
        
    }           //end of second object
]

console.log(music[0].format[2])   //dot and bracket notation both can be used for this type of complex object


//Nested objects

var nestedObject = {
    "House": {
        "Bedroom":{
            "status" : "inside the bedroom",
            "color": "Blue"
        },
        "Kitchen":{
            "status": "inside the kitchen",
            "color": "Black"
            }       
    },
    "skill":{
        "virtual":{
            "coding": "yes",
            "gaming": "No"
        },
        "real_life":{
            "cooking": "yes",
            "singing":"yes"
        }
    }
}
console.log(nestedObject.skill.virtual.coding)    //nested object and accesing the properties with dot notation


/* a program that will update the properties of an exixsting object usinf a function
if not an empty value is passed than the propertyu willget deleted
*/

var collection = {
    "1234": {
        "artist": "One direction",
        "album": "first",
        "tracks": [
            "beautiful", 
            "story of my life"
        ]
    },
    "5678": {
        "artist":"Jay lo" ,
        "album": "second",
        "tracks": [
            "midnight",
            "another lie"
        ]
    },
    "1000": {
        "artist":"eminem",
        "album": "main al",
        "tracks": [
            "rap god",
            "memories"
        ]
    }
}
//lets build the function to update the values now
function updateCollection(id,prop,value){
    if(value === ""){
        delete collection[id][prop];
    }
    else if(prop == "tracks"){
        collection[id][prop] = collection[id][prop] || [] ; //in case there is no previous array we need to create a new one
        collection[id][prop].push(value) ;
    }
    else collection[id][prop] = value;
    
    return collection;
}

var collectionCopy = JSON.parse(JSON.stringify(collection))  //to keep the previous value
updateCollection(1000,"artist","marron 5")
updateCollection(1000,"tracks","")
updateCollection(1000,"tracks","midnight memories")
updateCollection(1000,"tracks","one mmore night")
console.log(collectionCopy)
console.log(collection)
