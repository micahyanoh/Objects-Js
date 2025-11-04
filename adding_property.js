function person(name,age){
    this.name =name;
    this.age = this.age;

    this.call = function(){
        console.log(`${name} is ${age} years old`);
    }

}

const karim = new person("Karim", 27);
karim.call();

karim.gender = "male";
console.log (`${karim.name} is a ${karim.gender}`)