//1
var theThing = null
var replaceThing = function() {
  var originalThing = theThing;
  theThing = {
    longStr: new Array(1000000).join("*")
  };
};
setInterval(replaceThing, 1000);

//3
var theThing = null
var replaceThing = function() {
  var originalThing = theThing;
  var unused = function() {
    if (originalThing)
      console.log("hi");
  };
  theThing = {
    longStr: new Array(1000000).join("*")
    someMethod: function() {
      console.log(someMessage);
    }
  };
};
setInterval(replaceThing, 1000);

