// creating a person object
function person(name, age) {
  this.name = name;
  this.age = this.age;

  this.call = function () {
    console.log(`${name} is ${age} years old`);
  };
}

// instantiating the object
const karim = new person("Karim", 27);
karim.call();

// adding a property to the object
karim.gender = "male";
console.log(`${karim.name} is a ${karim.gender}`);

// alternative way of adding a property to an object
// using bracket notation

karim["race"] = "African";

console.log(`${karim.name} is an ${karim.race}`);

// deleting properties from an object
for(let key in karim){
    console.log(key);
};
console.log(`******************************************************`)
delete karim["race"];

for (let key in karim) {
  console.log(key);
};

// iterating through properties of an object

for(let key in person){
console.log(key,  karim['key']);
};
