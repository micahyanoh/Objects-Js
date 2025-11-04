function stopWatch() {
  // defining private variable
  let startTime,
    endTime,
    running,
    duration = 0;
  //start fn
  this.start = function () {
    if(running)
        throw new Error('Stop Watch Has Already Started');
    running= true;
    startTime = new Date();
  };
  //stop fn
  this.stop = function () {
    if (!running)
        throw new Error('Stop Watch Has NOT been Started');
    endTime = new Date();
    running = false;
    const seconds = (endTime - startTime)/1000;
    duration +=seconds;
  };
  // reset fn
  this.reset = function () {
    startTime = 0;
    endTime = 0;
    duration= 0;
    running = false;
  };

  // defining a read-only property

  Object.defineProperty(this,'duration',{
    get:function(){
        return duration;
    }
  });
};

const sw = new stopWatch();