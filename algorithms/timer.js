/*
Creat a timer function that takes in a number, n, and prints
n down to 1.
n should be immediately printed then print the next decremented
number after one second (1000ms), until 1 is printed.
*/

var timer = function (n) {
  // code goes here
  var sec = 0;
  for (var i = n; i >= 1; i--) {
    (function (num, ms) {
      setTimeout(function() {
        console.log(num);
      }, ms);
    })(i, sec);
    sec+=1000;
  }
};

timer(5); // should finish in 4s
