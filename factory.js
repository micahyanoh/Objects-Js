// using factory pattern to create objects
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(5);
circle.draw();

// creating a student object
function student(name, subject) {
  return {
    name,
    action: function () {
      console.log(`${name} is learning ${subject}`);
    },
  };
}

const tom = student("Tom", "maths");
tom.action();

// creating a teacher object

function teacher(name, lesson, grade) {

  return{
    teach: function(){
      console.log(`${name} is teaching ${lesson} in Grade ${grade}`);
    }
  }
  
}

const odijo= teacher("Joe","Maths",1);
odijo.teach();