// constructor pattern for object  creation
function createCircle(radius) {
  this.radius = radius;

  //IIFE, Immediately Invoked Fn in js
  this.draw = (function () {
    console.log("draw");
  })();
}

const circle = new createCircle(90);

// creating student object

function student(name, subject) {
  this.learn = function () {
    console.log(`${name} is learning ${subject}`);
  };
}

const tom = new student("Tom", "French");
tom.learn();

// creating teacher object

function teacher(name, lesson, grade) {
  this.teach = function () {
    console.log(`${name} is teaching ${lesson} in Grade ${grade}`);
  };
  // invoking fn on function creation
  this.teach();
}

const odijo = new teacher("Joe", "French", 8);
