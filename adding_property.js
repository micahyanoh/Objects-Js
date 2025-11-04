// creating a person object
function person(name,age){
    this.name =name;
    this.age = this.age;

    this.call = function(){
        console.log(`${name} is ${age} years old`);
    }

}

// instantiating the object
const karim = new person("Karim", 27);
karim.call();

// adding a property to the object
karim.gender = "male";
console.log (`${karim.name} is a ${karim.gender}`)

// alternative way of adding a property to an object

karim['race']='African';

console.log(`${karim.name} is an ${karim.race}`);